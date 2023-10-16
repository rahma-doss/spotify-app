import axios from 'axios'


const baseApi = axios.create({
    baseURL: 'https://accounts.spotify.com'
})


const access_token: string | null = localStorage.getItem("access_token")

console.log("qsdqsdqsdqs", access_token)
baseApi.interceptors.request.use(
    config => {
        // Modify the request config
        config.headers["Content-Type"] =
            "application/x-www-form-urlencoded";

        return config;
    },
    error => {
        // Handle request error
        return Promise.reject(error);
    }
);
// export const GET = async (url: string, params?: string) => {
//     const result = await !params ? api.get(url) : api.get(`${url}?q=${params}`)
//     return result
// }



export const getToken = async (url: string, data: string) => {
    // const result =await apiProducts.get(`${url}`)
    // return result
    return baseApi.post(url, data)
        .then(function (response) {
            return response

        })
        .catch(function (error) {
            console.log(error);
        });
}




export const getCurrentUser = async (url: string, token: string) => {
    // console.log('getCurrentUser', token)
    try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Spotify user data:', error);
        throw error;
    }
};
export const getRecentlyPlayedTracks = async (token: string) => {
    // console.log('getRecentlyPlayedTracks', token)
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
            headers: {
                // Authorization: `Bearer ${access_token}`,
                // "Content-Type": "application/x-www-form-urlencoded",

                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Spotify user data:', error);
        throw error;
    }
};