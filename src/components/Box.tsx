import { twMerge } from "tailwind-merge";
import { BoxProps } from "../types/types";


const Box: React.FC<BoxProps> = ({ 
  children,
  className
 }) => {
  return ( 
    <div 
      className={twMerge(
        `
        bg-customBlack-light
        rounded-lg 
        h-fit 
        w-full
        `, 
        className
      )}>
      {children}
    </div>
  );
}
 
export default Box;
