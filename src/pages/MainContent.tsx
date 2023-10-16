import { useState } from 'react';
import Navbar from '../components/Navbar';

import { useMutation, } from '@tanstack/react-query';
import axios from 'axios';
import ContentPage from './ContentPage';

const fetchSearchResults = async (searchQuery:any) => {
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
  // const { data, isLoading, isError } = useQuery(
  //   ['search', searchValue],
  //   () => fetchSearchResults(searchValue),
  //   {
  //     enabled: searchValue !== '',  // Fetch data only when query is not empty
  //   }
  // );
  const mutation = useMutation((searchValue) => fetchSearchResults(searchValue), {
    onSuccess: (data) => {
      // Gérer les données après une mutation réussie
      console.log('Mutation réussie:', data);
    },
  });

  const handleSearch = () => {
    if (searchValue !== '') {
      mutation.mutate(searchValue);
    }
  };
  // console.log('data', data)
  
  // const handleSearch = () => {
  //   
  //   if (searchValue) {
  //     
  //     fetchSearchResults(searchValue);
  //   }
  // };


  const resultOfSearch = mutation.data?.albums?.items
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };


  return (
    <div>


      <div
        className="
        bg-darkGreen
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
      >
        <Navbar
          handleSearch={handleSearch}
          onInputChange={handleInputChange}
          searchValue={searchValue}
        />
        {/* <UserProfile /> */}

        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-2xl font-semibold">
              Browse All
            </h3>
          </div>
          <ContentPage
            resultOfSearch={resultOfSearch}
          />
          {/* <RecentActivity/> */}
        </div>
      </div>


    </div>
  )
}

export default MainContent