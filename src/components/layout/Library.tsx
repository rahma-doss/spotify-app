"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import RecentActivity from "../RecentActivity";
import Button from "../ui/Button";
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../../constants/config";



const Library: React.FC = ({ }) => {
  const accessToken = localStorage.getItem('accessToken');
  const handleLogin = () => {

    const redirectUri = encodeURIComponent(SPOTIFY_REDIRECT_URI);
    // window.location.href = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token`;
    const scope = encodeURIComponent('user-read-recently-played');  // Ajoutez le scope nécessaire
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

  };
  return (
    <div className="">
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-colorText" size={26} />
          <p className="text-colorText font-medium text-md">
            Recently Played Tracks
          </p>
        </div>
        <AiOutlinePlus
          // onClick={onClick} 
          size={20}
          className="
            text-colorText 
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {accessToken !== '' ?
          <RecentActivity /> :
          <div className='bg-bgRecent mb-3 px-4 py-3 mt-3 rounded-md'>
            <h1 className="text-default-white-700" >Log in to see your recent activities.</h1>
            <Button
              onClick={handleLogin}
              className="bg-white-default w-24 mt-4 px-2 py-1"
            >
              Log in
            </Button>
          </div>
        }

      </div>
    </div>
  );
}

export default Library;