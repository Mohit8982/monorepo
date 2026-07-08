import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;

export const Primary = {
  args: {
    children: "Primary Button",
    type: "button"
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Danger = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Disabled = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading = {
  args: {
    children: "Saving",
    loading: true,
  },
};

export const FullWidth = {
  args: {
    children: "Continue",
    fullWidth: true,
  },
};
