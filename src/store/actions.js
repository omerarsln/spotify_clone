import * as constants from "./constants";

export const setMusicList = (value) => ({
  type: constants.SET_MUSIC_LIST,
  value,
});
export const getMusicList = () => ({
  type: constants.GET_MUSIC_LIST,
});

export const setRecentlyPlayed = (value) => ({
  type: constants.SET_RECENTLY_PLAYED,
  value,
});
export const getRecentlyPlayed = () => ({
  type: constants.GET_RECENTLY_PLAYED,
});

export const setAllPlaylists = (value) => ({
  type: constants.SET_ALL_PLAYLISTS,
  value,
});
export const getAllPlaylists = () => ({
  type: constants.GET_ALL_PLAYLISTS,
});

export const setRecommended = (value) => ({
  type: constants.SET_RECOMMENDED,
  value,
});
export const getRecommended = () => ({
  type: constants.GET_RECOMMENDED,
});

export const addRecentlyPlayed = (value) => ({
  type: constants.ADD_RECENTLY_PLAYED,
  value,
});

export const addRecommended = (value) => ({
  type: constants.ADD_RECOMMENDED,
  value,
});
export const editRecentlyPlayed = (value) => ({
  type: constants.EDIT_RECENTLY_PLAYED,
  value,
});
export const editRecommended = (value) => ({
  type: constants.EDIT_RECOMMENDED,
  value,
});
