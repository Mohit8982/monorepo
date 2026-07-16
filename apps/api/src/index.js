import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productsRouter from "./routes/products.js";
import authRouter from "./routes/auth.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// health
app.get("/health", (req, res) => res.send("ok"));

// public auth routes
app.use("/api/auth", authRouter);

// protect product routes (apply middleware here or to specific routes)
app.use("/api/products", authMiddleware, productsRouter);

// basic error handler
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ error: "internal_error" });
});

const PORT = process.env.PORT || 3000;
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`api listening on ${PORT}`);
  });
}

export default app;
