import { LOAD_IMAGES } from "../actions/actions";
import { TApplicationActions } from "../actions/actions";
import { TImage } from "../types/data";

type TAppState = {
  images: Array<TImage>;
  filteredImages: Array<TImage>;
}

const initialState: TAppState = {
  images: [],
  filteredImages: []
}

export const appReducer = (state = initialState, action: TApplicationActions): TAppState => {
  switch (action.type) {
    case LOAD_IMAGES: {
      const images = action.detailImagesList.map(item => {
        const {id, author, url} = item;
        return {id, author, url, isLiked: false};
      })
      return {
        images,
        filteredImages: [...images]
      }
    }
    default:
      return state;
  }
}


