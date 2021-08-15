import axios from "axios";
import {
  INIT_ALBUM_LIST,
  SUCCESS_ALBUM_LIST,
  FAIL_ALBUM_LIST,
  INIT_ALBUM,
  FAIL_ALBUM,
  SUCCESS_ALBUM,
  INIT_IMAGE,
  FAIL_IMAGE,
  SUCCESS_IMAGE,
} from "./actionCreators";

const initAlbumList = () => ({
  type: INIT_ALBUM_LIST,
});
const failAlbumList = (error) => ({
  type: FAIL_ALBUM_LIST,
  error,
});
const successAlbumList = (data) => ({
  type: SUCCESS_ALBUM_LIST,
  data,
});

export const getAlbumList = () => {
  return async (dispatch) => {
    dispatch(initAlbumList());
    try {
      const albums = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/?_limit=10"
      );
      dispatch(successAlbumList(albums.data));
    } catch (error) {
      dispatch(failAlbumList(error));
    }
  };
};

const initAlbum = () => ({
  type: INIT_ALBUM,
});
const failAlbum = (error) => ({
  type: FAIL_ALBUM,
  error,
});
const successAlbum = (data) => ({
  type: SUCCESS_ALBUM,
  data,
});

export const getAlbum = (id) => {
  return async (dispatch) => {
    dispatch(initAlbum());
    try {
      const albums = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=10`
      );
      dispatch(successAlbum(albums.data));
    } catch (error) {
      dispatch(failAlbum(error));
    }
  };
};

const initImage = () => ({
  type: INIT_IMAGE,
});
const failImage = (error) => ({
  type: FAIL_IMAGE,
  error,
});
const successImage = (id) => ({
  type: SUCCESS_IMAGE,
  id,
});

export const getImage = (id) => {
  return async (dispatch) => {
    dispatch(initImage());
    try {
      dispatch(successImage(id));
    } catch (error) {
      dispatch(failImage(error));
    }
  };
};
