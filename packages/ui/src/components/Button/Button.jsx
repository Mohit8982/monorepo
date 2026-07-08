import PropTypes from "prop-types";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "./button.constants";

const variantClasses = {
  [BUTTON_VARIANTS.PRIMARY]: "bg-blue-600 text-white hover:bg-blue-700",
  [BUTTON_VARIANTS.SECONDARY]: "bg-gray-600 text-white hover:bg-gray-700",
  [BUTTON_VARIANTS.OUTLINE]:
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  [BUTTON_VARIANTS.GHOST]: "text-gray-700 hover:bg-gray-100",
  [BUTTON_VARIANTS.DANGER]: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses = {
  [BUTTON_SIZES.SMALL]: "px-3 py-1 text-sm",
  [BUTTON_SIZES.MEDIUM]: "px-4 py-2",
  [BUTTON_SIZES.LARGE]: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant,
  size,
  disabled,
  loading,
  leftIcon,
  rightIcon,
  fullWidth,
  onClick,
  type,
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-md
        font-medium
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50

        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {leftIcon}

      {loading ? "Loading..." : children}

      {rightIcon}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  variant: BUTTON_VARIANTS.PRIMARY,
  size: BUTTON_SIZES.MEDIUM,
  disabled: false,
  loading: false,
  fullWidth: false,
  type: "button",
};
