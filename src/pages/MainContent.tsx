import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';

import { useMutation, } from '@tanstack/react-query';
import axios from 'axios';
import ContentPage from './ContentPage';

const fetchSearchResults = async (searchQuery: any) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchQuery
    )}&type=album`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};


export const revalidate = 0;



const MainContent = () => {


  const [searchValue, setSearchValue] = useState<any>('');
  const [scrolling, setScrolling] = useState<number>(0)
  // const { data, isLoading, isError } = useQuery(
  //   ['search', searchValue],
  //   () => fetchSearchResults(searchValue),
  //   {
  //     enabled: searchValue !== '',  // Fetch data only when searchValue is not empty
  //   }
  // );
  const mutation = useMutation((searchValue) => fetchSearchResults(searchValue), {
    onSuccess: () => {
 
    },
  });

  const handleSearch = () => {
    if (searchValue !== '') {
      mutation.mutate(searchValue);
    }
  };



  const resultOfSearch = mutation.data?.albums?.items
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const scrollableRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const element: any = scrollableRef.current;
      if (element) {
        // Check the scroll position of the scrollable element
        setScrolling(element.scrollTop)
        
      }
    };

    // Attach scroll event listener to the scrollable element
    const scrollableElement: any = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Clean up the event listener when component is unmounted
      if (scrollableElement) {
        scrollableElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
    <div ref={scrollableRef} className={`bg-customBlack-light rounded-lg `} style={{ overflowY: "scroll" }}  >
      <header className={`sticky top-0 px-4  mb-[-4rem] ${scrolling == 0 ? 'bg-transparant' : 'bg-[hsla(0,0%,7%,0.7)]'} z-50`}>
        <Navbar handleSearch={handleSearch} onInputChange={handleInputChange} searchValue={searchValue} />
      </header>

      <div className="h-full w-full ">
        <div className="bg-gradient-to-b  from-teal-700 h-48">
          <div className="h-full py-1 ">

            <h3 className="text-white text-2xl font-semibold mt-28 ml-3">Browse All</h3>
          </div>
        </div>
        <ContentPage resultOfSearch={resultOfSearch} />


      </div>
    </div>
  );
}

export default MainContent