// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/end

export const authEndpoint = "https://accounts.spotify.com/authorize";
//onces login button is clicked, user is redirected to spotify login ^

const redirectUri = "http://localhost:3000/";
//redirects back to home page when authorized ^

const clientId = "8967ca69a3eb43da87fd287765c57e48";

//scopes allows user to get the correct permission for functions on spotify
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  //pulling the access token from the URL
        //go into initial array that is being returned, for access token decode the URI component
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
