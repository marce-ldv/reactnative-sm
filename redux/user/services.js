import axiosInstance from '../axiosInstance';

export const getBreeds = () => axiosInstance.get('breeds/list');