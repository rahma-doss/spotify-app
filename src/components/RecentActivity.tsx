// RecentActivity.tsx
import React from 'react';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { RecentlyPlayedTrack } from '../types/types';


const fetchRecentlyPlayed = async () => {
    const accessToken = localStorage.getItem('accessToken');
   

    const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};
const RecentActivity: React.FC = () => {
    const { data, } = useQuery(
        // {queryFn:['recentlyPlayed'] , fetchRecentlyPlayed()}
        {
            queryKey: ["recentlyPlayed"],
            queryFn: () => {


                return fetchRecentlyPlayed();


            }

        }
    );

    const recentlyPlayedTracks = data?.items as RecentlyPlayedTrack[];


    console.log("recentlyPlayedTracks", recentlyPlayedTracks)

    return (
        <div  >
        
            <ul  >
                {recentlyPlayedTracks?.map((playedTrack: any, index: any) => (
                    <li key={index} className='bg-bgRecent mb-3 rounded-md'>
                        <div className='flex '  >
                            {playedTrack.track.album.images?.map((img: any, key: any) =>
                                key == 0 ? (
                                    <img key={key} src={img.url} alt="img-album" width={50} />
                                ) : null
                            )}
                            <div className='ml-2' >
                                <strong className='text-sm' >{playedTrack.track.name}  </strong>
                                <p className='text-colorText'> {playedTrack.track.artists.map((artist: any) => artist.name).join(", ")}{" "}</p>

                            </div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
};


export default RecentActivity;
