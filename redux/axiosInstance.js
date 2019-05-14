import axios from 'axios';

export const apiConfig = {
	baseURL: 'https://dog.ceo/api/'
};

const axiosInstance = axios.create( { baseURL: apiConfig.baseURL } );

axiosIntace.interceptors.request.use( ( config ) => {
	const token = localStorage.getItem( 'token' );

	if ( token ) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
}, err => Promise.reject( err ) );

export default axiosInstance;
