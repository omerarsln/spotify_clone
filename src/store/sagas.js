import { all, call, put, take } from "redux-saga/effects";

import { request } from "../commons/utils";
import * as actions from "../store/actions";
import * as constants from "../store/constants";

const url = "http://zmdp.cloud/iseAlim/spotify.json";
const placeHolderUrl = "https://jsonplaceholder.typicode.com/photos";

function* getMusicList() {
  const result = yield call(request, placeHolderUrl, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setMusicList(result));
    } else {
    }
  }
}
function* getRecentlyPlayed() {
  const result = yield call(request, url, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setRecentlyPlayed(result.recentlyPlayed));
    } else {
    }
  }
}
function* getAllPlaylists() {
  const result = yield call(request, url, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setAllPlaylists(result.allPlaylists));
    } else {
    }
  }
}
function* getRecommended() {
  const result = yield call(request, url, "GET");
  if (result) {
    if (result !== "invalid") {
      yield put(actions.setRecommended(result.recommended));
    } else {
    }
  }
}

function* getMusicListWatcher() {
  while (true) {
    const action = yield take(constants.GET_MUSIC_LIST);
    yield call(getMusicList, action);
  }
}
function* getRecentlyPlayedWatcher() {
  while (true) {
    const action = yield take(constants.GET_RECENTLY_PLAYED);
    yield call(getRecentlyPlayed, action);
  }
}
function* getAllPlaylistsWatcher() {
  while (true) {
    const action = yield take(constants.GET_ALL_PLAYLISTS);
    yield call(getAllPlaylists, action);
  }
}
function* getRecommendedWatcher() {
  while (true) {
    const action = yield take(constants.GET_RECOMMENDED);
    yield call(getRecommended, action);
  }
}

export default function* rootSaga() {
  yield all([
    getMusicListWatcher(),
    getRecentlyPlayedWatcher(),
    getAllPlaylistsWatcher(),
    getRecommendedWatcher(),
  ]);
}
