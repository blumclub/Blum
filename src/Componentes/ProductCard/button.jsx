
export function Button({ children, variant = "default", size = "default", className, ...props }) {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-white hover:bg-secondary-hover",
    outline: "border border-gray-200 hover:bg-gray-100",
    ghost: "hover:bg-gray-100",
    default: "bg-blue-500 text-white hover:bg-blue-700",
  }

  const sizeClasses = {
    default: "px-4 py-2 rounded-md text-sm",
    sm: "px-3 py-1 rounded-md text-xs",
    lg: "px-5 py-3 rounded-md text-base",
    icon: "p-2 rounded-full",
  }

  return (
    <button
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

