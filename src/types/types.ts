import { IconType } from 'react-icons';

export interface RecentlyPlayedTrack {
  track: {
      album: {
          album_type: string;
          total_tracks: number;
          available_markets: string[];
          external_urls: {
              spotify: string;
          };
          // Other album properties...
      };
      artists: {
          external_urls: {
              spotify: string;
          };
          followers: {
              href: string;
              total: number;
          };
          genres: string[];
          // Other artist properties...
      }[];
      // Other track properties...
  };
  played_at: string;
  context: {
      type: string;
      href: string;
      external_urls: {
          spotify: string;
      };
      uri: string;
  };
}


export interface MediaItemProps {
  
  onClick?: (id: string) => void;
}
export interface SidebarProps {
  children?: React.ReactNode;

}

export interface SidebarItemProps {
  icon: IconType;
  label: string;

}


export interface BoxProps {
  children: React.ReactNode;
  className?: string;
  height?: string
}
export interface NavbarProps {
  className?: string;
  handleSearch?: () => void;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;

}
export interface ContentPageProps {
  resultOfSearch: any
}

export interface SpotifyCardProps{
  key:string|number
  albumType:string
  artists:[]
  images:[]
  nameOfSong:string

}