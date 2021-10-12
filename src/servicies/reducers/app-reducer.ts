import { TOGGLE_LIKE, LOAD_IMAGES, DELETE_IMAGE, SET_FILTER } from "../actions/actions";
import { TApplicationActions } from "../actions/actions";
import { TImage } from "../types/data";

type TAppState = {
  images: Array<TImage>;
  filtered: boolean;
}

const initialState: TAppState = {
  images: [],
  filtered: false
}

export const appReducer = (state = initialState, action: TApplicationActions): TAppState => {
  switch (action.type) {
    case LOAD_IMAGES: {
      const images = action.detailImagesList.map(image => {
        const {id, views, downloads, webformatURL: url} = image;
        return {id, views, downloads, url, isLiked: false};
      })
      return {
        images,
        filtered: false
      }
    }
    case TOGGLE_LIKE: {
      return {
        ...state,
        images: state.images.map(image => {
          return image.id === action.id ? {...image, isLiked: !image.isLiked} : image
        })
      }
    }
    case DELETE_IMAGE: {
      return {
        ...state,
        images: state.images.filter(image => image.id !== action.id)
      }
    }
    case SET_FILTER: {
      return {
        ...state,
        filtered: !state.filtered
      }
    }
    default:
      return state;
  }
}


