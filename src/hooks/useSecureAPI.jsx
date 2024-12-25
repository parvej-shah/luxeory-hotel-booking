import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.init';


const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true
});

const useSecureAPI = () => {
    const navigate = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error.status);
            if (error.status === 401 || error.status === 403) {
                signOut(auth)
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return instance;
};

export default useSecureAPI;