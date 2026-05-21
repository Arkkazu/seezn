export interface Button02Props {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button02 contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button02 = ({ primary = false, size = "medium", backgroundColor, label, ...props }: Button02Props) => {
  const baseClasses = "inline-block min-w-180 cursor-pointer font-bold rounded-8 leading-none py-[1em] px-[1em]";
  const sizeClasses = {
    small: "text-14",
    medium: "text-16",
    large: "text-18",
  }[size];

  const modeClasses = primary ? "bg-blue-800 text-white" : "bg-white text-gray-800 shadow-inner shadow-black/15";

  return (
    <button type="button" className={`${baseClasses} ${sizeClasses} ${modeClasses}`} style={backgroundColor ? { backgroundColor } : undefined} {...props}>
      {label}
    </button>
  );
};
