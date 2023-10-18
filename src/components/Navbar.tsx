"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

// import { toast } from "react-hot-toast";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./ui/Button";
import UserProfile from "./UserProfile";
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../constants/config";
import { NavbarProps } from "../types/types";


const handleLogin = () => {

  const redirectUri = encodeURIComponent(SPOTIFY_REDIRECT_URI);
  // window.location.href = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token`;
  const scope = encodeURIComponent('user-read-recently-played');  // Ajoutez le scope nécessaire
  window.location.href = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

};


const Navbar: React.FC<NavbarProps> = ({ className, handleSearch,
  onInputChange,
  searchValue, }) => {



  const accessToken = localStorage.getItem('accessToken');

  return (
    <div
      className={twMerge(` h-fit  `, className )}>
      <div className="w-full flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            // onClick={() => router.back()} 
            className="
              rounded-full 
              bg-blackDefault 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretLeft className="text-white-dark" size={30} />
          </button>
          <button
            // onClick={() => router.forward()} 
            className="
              rounded-full 
              bg-blackDefault  
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <RxCaretRight className="text-white-dark" size={30} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            // onClick={() => router.push('/')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            // onClick={() => router.push('/search')} 
            className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        {accessToken!==""?
           <div className="flex items-center justify-center mt-5">
          <input
            type="text"
            placeholder="Search for a song, artist, or album"
            className="px-4 py-2 rounded-full w-80 border text-black border-gray-300 focus:outline-none"
            value={searchValue}
            onChange={onInputChange}
          />
          <button
            className="ml-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        :null}
     
        {/* <Search/> */}
        <div className="flex justify-between items-center gap-x-4">
          {accessToken ? (
            <UserProfile />
          ) : (
            <>
              <div>
                <Button
                  onClick={handleLogin}
                  className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={handleLogin}
                  className="bg-white-default px-6 py-2"
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}

export default Navbar;
