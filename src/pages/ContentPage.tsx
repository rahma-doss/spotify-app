import React from 'react'
import SpotifyCard from '../components/ui/spotifyCards'
import { ContentPageProps } from '../types/types'


const ContentPage: React.FC<ContentPageProps> = ({ resultOfSearch }) => {
   
    return (
        <div>
            <main className="grid place-items-center min-h-screen bg-gradient-to-t p-5">
                <section className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    {resultOfSearch?.map((result: any, index: any) =>
                        <SpotifyCard
                            key={index}
                            albumType={result.album_type}
                            artists={result.artists}
                            images={result.images}
                            nameOfSong={result.name}
                        
                        />
                    )}
                </section>
            </main>
        </div>
    )
}

export default ContentPage