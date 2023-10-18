

import { twMerge } from 'tailwind-merge';
import { SidebarItemProps } from '../../types/types';



const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
}) => {
  return ( 
    <div
      className={twMerge(`
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`,
       
        )
      }
    >
      <Icon size={26} />
      <p className="truncate text-colorText w-100">{label}</p>
    </div>
   );
}

export default SidebarItem;