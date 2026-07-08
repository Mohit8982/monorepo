import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Dashboard",
    subtitle: "Manage your application from one place.",
  },
};

export const TitleOnly = {
  args: {
    title: "Settings",
  },
};
