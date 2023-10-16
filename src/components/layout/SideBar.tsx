"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";


import SidebarItem from "./SideBarItems";
import Box from "../Box";
import spotify from "../../assets/svg/spotify.svg";
import Library from "./Library";
import { SidebarProps } from "../../types/types";




const Sidebar = ({ children,  }: SidebarProps) => {
 

  const routes = [
    {
      icon: HiHome,
      label: 'Home',

    },
    {
      icon: BiSearch,
      label: 'Search',

    },
  ]




  return (
    <div
      className={twMerge(`
        flex 
        h-full
        `,

      )}
    >
      <div
        className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
      >

        <Box>



          <div className="flex flex-col gap-y-4 px-5 py-4">
            <img src={spotify} alt="" width={120} />
            {routes.map((item) => (

              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">


          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
