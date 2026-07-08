import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export const Default = {
  args: {
    image: "https://placehold.co/300x300",
    title: "Apple iPhone 16 Pro",
    description:
      "The latest iPhone featuring the A18 Pro chip, titanium design, and an advanced camera system.",
    price: "1,19,900",
    stock: 8,
    badge: "20% Off",
    secondaryBadge: "Up to ₹17,000 Exchange Bonus",
  },
};

export const WithAction = {
  args: {
    image: "https://placehold.co/300x300",
    title: "Sony WH-1000XM6",
    description:
      "Industry-leading noise cancellation with exceptional battery life.",
    price: "29,990",
    stock: 12,
    badge: "Best Seller",
    actions: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add to Cart
      </button>
    ),
  },
};

export const WithChildren = {
  args: {
    image: "https://placehold.co/300x300",
    title: "MacBook Air M4",
    description:
      "Powerful performance with Apple's latest M4 chip and an ultra-lightweight design.",
    price: "1,24,900",
    stock: 5,
    badge: "New",
    children: (
      <div className="rounded-md bg-gray-100 p-3 text-sm">
        <strong>Highlights</strong>
        <ul className="mt-2 list-disc pl-5">
          <li>Apple M4 Chip</li>
          <li>18-hour Battery</li>
          <li>13.6-inch Liquid Retina Display</li>
        </ul>
      </div>
    ),
  },
};

export const Minimal = {
  args: {
    image: "https://placehold.co/300x300",
    title: "Basic Product",
    description: "A simple card with only the required information.",
    price: "999",
  },
};
