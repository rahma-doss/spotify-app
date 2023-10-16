// RecentActivity.tsx
import React from 'react';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { RecentlyPlayedTrack } from '../types/types';





const fetchRecentlyPlayed = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('Access token not found.');
    }

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
        <div>
            <ul>
                {recentlyPlayedTracks?.map((playedTrack: any, index: any) => (
                    <li key={index}>
                        <strong>{playedTrack.track.name}</strong> by{" "}
                        {playedTrack.track.artists.map((artist: any) => artist.name).join(", ")}{" "}
                        (Played at: {playedTrack.played_at})
                    </li>
                ))}
                {/* 
{(tracks, loading, error) =>
                      data && tracks.data
                        ? tracks.data.items.map((track, ind) => {
                            return (
                              <>
                                <TrackCard track={track} />
                              </>
                            )
                          })
                        : null
                    } */}
            </ul>
        </div>
    );
};


export default RecentActivity;
