export interface Button03Props {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  width?: "small" | "medium" | "large";
  /** Button03 contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button03 = ({ primary = false, size = "medium", width = "medium", backgroundColor, label, ...props }: Button03Props) => {
  const baseClasses = "cursor-pointer flex min-w-180 py-[1em] px-16 pc:px-24 flex-col gap-24 justify-center rounded-4 border border-green overflow-hidden duration-500";
  const sizeClasses = {
    small: "text-14",
    medium: "text-16",
    large: "text-18",
  }[size];
  const widthClasses = {
    small: "min-w-120",
    medium: "min-w-180",
    large: "min-w-240",
  }[width];

  const modeClasses = primary ? "bg-blue-800 text-white" : "bg-white text-gray-800 hoverable:hover:bg-white-hover hoverable:hover:text-green";

  return (
    <button type="button" className={`${baseClasses} ${sizeClasses} ${widthClasses} ${modeClasses}`} {...props}>
      {label}
    </button>
  );
};
