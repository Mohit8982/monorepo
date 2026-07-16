import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import data, { products } from "./data.js";
import console from "console";

const app = express();

app.use(express.json());

// IMPORTANT
app.use(cookieParser());

app.use(
  cors({
    origin: "http://monorepo-alb-148356823.ap-south-1.elb.amazonaws.com/",
    credentials: true,
  }),
);

const dummyUsers = [
  { name: "Mohit Barua", id: 4556, role: "admin", username: "mohit8982" },
  { name: "Ankit Solanki", id: 4557, role: "customer", username: "ankit8982" },
  {
    name: "Shubham Choudhary",
    id: 4558,
    role: "customer",
    username: "shubh8982",
  },
  { name: "Sidhant Jain", id: 4559, role: "employee", username: "sid8982" },
];

const privateKey =
  "f99688ec36d40b6c43f6d699a86cda02d39978abe59d2cebb3f3cf694e624894dd06fb443f84d856ea6c04bd50aabd33d4e7ee2e46f50b97c3274d62319f24ae";

function verifyToken(req, res, next) {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "No token found",
    });
  }

  try {
    const payload = jwt.verify(token, privateKey, {
      algorithms: ["HS256"],
    });

    req.user = payload;

    next();
  } catch (err) {
    res.status(401).json({
      valid: false,
      error: err.message,
    });
  }
}

app.get("/api", (req, res) => {
  const payload = { userId: "12345", role: "admin" };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "1h",
  });

  res.cookie("access_token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 1000,
  });

  // Do NOT expose token in response
  return res.send({
    success: true,
    message: "Token stored in HttpOnly cookie",
  });
});

app.get("/api/test-health", (req, res) => {
  return res.send({
    success: true,
  });
});

app.get("/api/verify", (req, res) => {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token found",
    });
  }

  try {
    const decoded = jwt.verify(token, privateKey, {
      algorithms: ["HS256"],
    });

    res.json({
      valid: true,
      decoded,
    });
  } catch (err) {
    res.status(401).json({
      valid: false,
      error: err.message,
    });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    return res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/auth/me/", verifyToken, async (req, res) => {
  const user = req.user;

  const [userData] = dummyUsers.filter((data) => data.id == user.userId);

  return res.status(200).send({
    status: true,
    user: userData,
  });
});

app.post("/api/login", async (req, res) => {
  try {
    const { otp = "", username } = req.body;

    if (Number(otp) === 1234) {
      const [findUser] = dummyUsers.filter(
        (data) => data.username === username,
      );

      if (!findUser) {
        return res.status(401).send({
          message: "User Not Found",
        });
      }

      const payload = { userId: findUser.id, role: findUser.role };

      const token = jwt.sign(payload, privateKey, {
        algorithm: "HS256",
        expiresIn: "1h",
      });

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 1000,
      });

      return res.status(200).send({
        message: "OTP Verified Successfully",
        user: findUser,
      });
    }

    return res.status(401).send({ message: "Invalid OTP" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/getProducts", verifyToken, async (req, res) => {
  return res.send({ status: true, products });
});

app.get("/api/products/search", async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(200).json({
        success: false,
        data: products,
      });
    }

    const filteredProducts = products.filter((product) =>
      ["name", "description"].some((field) =>
        product[field].toLowerCase().includes(search.toLowerCase()),
      ),
    );

    res.status(200).json({
      success: true,
      total: filteredProducts.length,
      data: filteredProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/api/products", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = products.slice(startIndex, endIndex);

  res.json({
    data: paginatedData,
    pagination: {
      page,
      limit,
      totalRecords: products.length,
      totalPages: Math.ceil(products.length / limit),
      hasNextPage: endIndex < products.length,
      hasPreviousPage: page > 1,
    },
  });
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: false, // true in production with HTTPS
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("================================");
  console.log("NEW SERVER STARTED");
  console.log(`Server is running on port ${PORT}`);
  console.log("================================");
});
