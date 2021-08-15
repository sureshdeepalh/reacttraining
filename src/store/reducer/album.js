import {
  INIT_ALBUM_LIST,
  SUCCESS_ALBUM_LIST,
  FAIL_ALBUM_LIST,
  INIT_ALBUM,
  SUCCESS_ALBUM,
  FAIL_ALBUM,
  INIT_IMAGE,
  SUCCESS_IMAGE,
  FAIL_IMAGE,
} from "../action/actionCreators";

const initialState = {
  albumList: [],
  album: [],
  image: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ALBUM_LIST:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_ALBUM_LIST:
      return {
        ...state,
        loading: false,
        albumList: action.data,
      };
    case FAIL_ALBUM_LIST:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case INIT_ALBUM:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_ALBUM:
      return {
        ...state,
        loading: false,
        album: action.data,
      };
    case FAIL_ALBUM:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case INIT_IMAGE:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_IMAGE:
      const image = state.album.find((im) => im.id === action.id);
      console.log(action);
      return {
        ...state,
        loading: false,
        image: image,
      };
    case FAIL_IMAGE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default reducer;
