import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HXNxObcHHrtpeat0y9fT-KaYycMIaPNQR4GF03IWAl0'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;