let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            // setting access token and expiry time variables
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            // setting function to reset access token when it expires
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);

            // clearing the url after the access token expires
            window.history.pushState('Access token', null, '/');

            return accessToken;
        }
    }
}

export {Spotify};