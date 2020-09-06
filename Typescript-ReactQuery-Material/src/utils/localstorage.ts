const getAuthToken: () => string | null = () => {
    return localStorage.getItem('authToken');
};

const setAuthToken: (token: string) => void = (token) => {
    localStorage.setItem('authToken', token);
};

export { getAuthToken, setAuthToken };
