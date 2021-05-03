let accessToken = "";

export const setAccessToken = (string) => {
    accessToken = string;
}

export const getAccessToken = () => {
    return accessToken;
}