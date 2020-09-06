import axios from 'axios';
import { getAuthToken } from 'utils/localstorage';

export const baseURL = 'This is your string';

export const instance = axios.create({
    baseURL,
    timeout: 30000,
});

instance.interceptors.request.use(function (config) {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});

// export function errorInterceptor() {
//     instance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log(error);
//         let { status } = error.request;
//         if (status === 0 || status === 404 || status === 500) {
//           // history.push("/fallback");
//           Swal.fire({
//             title: "Error",
//             text: `api failed with status ${status}`,
//             icon: "warning",
//             showConfirmButton: false,
//             allowOutsideClick: true,
//             allowEscapeKey: true,
//           });
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

export default instance;
