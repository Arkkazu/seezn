export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const baseClasses = "inline-block cursor-pointer font-bold rounded-full border-0 leading-none py-[0.5em] px-[1em]";
  const sizeClasses = {
    small: "text-14",
    medium: "text-16",
    large: "text-18",
  }[size];

  const modeClasses = primary ? "bg-indigo-600 text-white" : "bg-transparent text-gray-800 shadow-inner shadow-black/15";

  return (
    <button type="button" className={`${baseClasses} ${sizeClasses} ${modeClasses}`} style={backgroundColor ? { backgroundColor } : undefined} {...props}>
      {label}
    </button>
  );
};
