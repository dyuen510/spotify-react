import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);

  //dispatch is needed to update DataLayer with values. !! Changes and updates to datalayer
  // can pull user in anywhere on the component tree because of the datalayer {user} = dataLayer.user
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    //code ...
    const hash = getTokenFromUrl();
    //hide the access token
    window.location.hash = "";
    const _token = hash.access_token;

    //since there's two token used _token is the preferred for the token we are using or working with
    if (_token) {
      // setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      //basically giving access token to spotify API, which allows communication with react and spotify api
      spotify.setAccessToken(_token);

      //one of the functions of spotifywebapi that retrieves user's information
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });
      });
    }

    console.log("I HAVE A TOKEN >>>>", token);
  }, []); //if empty run once, if [name] then runs once and whenever name is changed.
  // console.log("person", user);
  // console.log("token", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
