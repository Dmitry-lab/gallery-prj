import { getImages } from "../../utils/api-requests";
import { TDetailImageInfo } from "../types/data";
import { AppDispatch } from '../types/index';

export const LOAD_IMAGES: 'LOAD_IMAGES' = 'LOAD_IMAGES';

type TLoadImages = {
  type: typeof LOAD_IMAGES;
  detailImagesList: Array<TDetailImageInfo>;
}

export type TApplicationActions = TLoadImages;

const PAGE = 1;
const LIMIT = 40;

export const getImagesList = () => (dispatch: AppDispatch) => {
  getImages(PAGE, LIMIT)
    .then(data => dispatch({ type: LOAD_IMAGES, detailImagesList: data }))
    .catch(err => alert(`Ошибка обращения к серверу: ${err}`))
}



