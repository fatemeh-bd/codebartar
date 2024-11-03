import { forwardRef } from "react";
import { InputProps } from "./types";
export const boxClass = "bg-secondary-200 p-3 rounded-xl text-sm text-foreground";
export const inputClass =
  "form-input my-2  w-full !ring-0 !ring-offset-0  !border-0  ";
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", icon, ...rest }, ref) => {
    const classList = `${inputClass} ${className} ${boxClass}`;

    return icon ? (
      <div
        className={` flex items-center justify-between  gap-2 ${classList} [&>svg]:text-secondary-700`}
      >
        <input
          {...rest}
          ref={ref}
          className="w-full border-none !outline-none bg-transparent placeholder:font-normal"
        />
        {icon}
      </div>
    ) : (
      <input className={classList} {...rest} ref={ref} />
    );
  }
);

Input.displayName = "Input";

export default Input;
