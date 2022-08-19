import * as constants from "./constants";

const initialState = {
  musicList: [],
  recentlyPlayed: [],
  allPlaylists: [],
  recommended: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_MUSIC_LIST: {
      return {
        ...state,
        musicList: action.value,
      };
    }
    case constants.SET_RECENTLY_PLAYED: {
      return {
        ...state,
        recentlyPlayed: action.value,
      };
    }
    case constants.SET_ALL_PLAYLISTS: {
      return {
        ...state,
        allPlaylists: action.value,
      };
    }
    case constants.SET_RECOMMENDED: {
      return {
        ...state,
        recommended: action.value,
      };
    }
    case constants.ADD_RECENTLY_PLAYED: {
      console.log("add recently");
      return {
        ...state,
        recentlyPlayed: [...state.recentlyPlayed, action.value],
      };
    }
    case constants.ADD_RECOMMENDED: {
      console.log("add recommended");
      return {
        ...state,
        recommended: [...state.recommended, action.value],
      };
    }
    case constants.EDIT_RECENTLY_PLAYED: {
      console.log("edit recently");
      let list = [...state.recentlyPlayed];
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === action.value.id) {
          list[i] = action.value;
        }
      }
      return {
        ...state,
        recentlyPlayed: list,
      };
    }
    case constants.EDIT_RECOMMENDED: {
      console.log("edit recommended");
      let list = [...state.recommended];
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === action.value.id) {
          list[i] = action.value;
        }
      }
      return {
        ...state,
        recommended: list,
      };
    }
    default: {
      return state;
    }
  }
}
