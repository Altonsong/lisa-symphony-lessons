
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

/**
 * 按钮组件属性接口
 * variant - 按钮样式变体
 * size - 按钮尺寸
 */
interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 通用按钮组件 - 用于网站上的各种交互点
 * 支持主要、次要和轮廓三种样式
 * 支持小、中、大三种尺寸
 */
const ActionButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ActionButtonProps) => {
  // 按钮样式变体
  const variantStyles = {
    primary: "bg-[#5D2E46] hover:bg-[#4A2538] text-white border border-[#5D2E46]",
    secondary: "bg-[#D4AF37] hover:bg-[#C09C2F] text-white border border-[#D4AF37]",
    outline: "bg-transparent hover:bg-[#F7F3E3] text-[#5D2E46] border border-[#5D2E46]"
  };

  // 按钮尺寸
  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg"
  };

  return (
    <button
      className={cn(
        "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#5D2E46] focus:ring-opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
