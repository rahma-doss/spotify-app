"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import SidebarItem from "./SideBarItems";
import Box from "../Box";
import spotify from "../../assets/svg/spotify.svg";
import Library from "./Library";
import { SidebarProps } from "../../types/types";




const Sidebar = ({ }: SidebarProps) => {


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
    <div className="flex relative overflow-y-hidden select-none mr-2">
      <aside
        className="relative flex flex-col gap-2  w-80"
      >

        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            <img src={spotify} alt="" width={120} />
            {routes.map((item) => (

              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="flex flex-col h-full justify-stretch items-stretch">
          <Library />
        </Box>
      </aside>

    </div>
  );
}

export default Sidebar;