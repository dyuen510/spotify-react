export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //Remove after finished developing
};

const reducer = (state, action) => {
  console.log(action); //debugger tool

  switch (action.type) {
    case "SET_USER":
      return {
        ...state, // must have this line, which keeps everything that was in user state
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
    default:
      return state;
  }
};

export default reducer;
