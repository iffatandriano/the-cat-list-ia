import axios from "axios";
import env from "../configs/environment";
import useCats from "../utils/hooks/useCats";

const axiosInstance = axios.create({
    baseURL: env.BASE_API_URL
});

const endpoint = {
    cats: 'breeds',
    search: 'breeds/search',
    images: 'images'
}

const getAllCats = (params: any) => axiosInstance.get(endpoint.cats, {
    params
})
                            .then((response) => {
                                return response.data;
                            })
                            .catch((error) => {
                                return error;
                            });

const searchCatByName = (params: any) => axiosInstance.get(endpoint.search, {
    params
})
                            .then((response) => {
                                return response.data;
                            })
                            .catch((error) => {
                                return error;
                            })

const getImageById = (id: string) => axiosInstance.get(`https://api.thecatapi.com/v1/images/${id}`)
                                        .then((response) => {
                                            const data = response.data;
                                            return data;
                                        })
                                        .catch((error) => {
                                            return error;
                                        });
                                        
export {
    axiosInstance,
    getAllCats,
    getImageById,
    searchCatByName,
}