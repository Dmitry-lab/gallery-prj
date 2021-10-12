import { getImages } from "../../utils/api-requests";
import { TDetailImageInfo } from "../types/data";
import { AppDispatch } from '../types/index';

export const LOAD_IMAGES: 'LOAD_IMAGES' = 'LOAD_IMAGES';
export const TOGGLE_LIKE: 'ADD_LIKE' = 'ADD_LIKE';
export const DELETE_IMAGE: 'DELETE_IMAGE' = 'DELETE_IMAGE';
export const SET_FILTER: 'SET_FILTER' = 'SET_FILTER';

type TLoadImages = {
  type: typeof LOAD_IMAGES;
  detailImagesList: Array<TDetailImageInfo>;
}

type TAddLike = {
  type: typeof TOGGLE_LIKE;
  id: number;
}

type TDeleteImage = {
  type: typeof DELETE_IMAGE;
  id: number;
}

type TSetFilter = {
  type: typeof SET_FILTER;
}

export type TApplicationActions = TLoadImages | TAddLike | TDeleteImage | TSetFilter;

const PAGE = 1;
const LIMIT = 40;

export const getImagesList = () => (dispatch: AppDispatch) => {
  getImages(PAGE, LIMIT)
    .then(data => dispatch({ type: LOAD_IMAGES, detailImagesList: data.hits }))
    .catch(err => alert(`Ошибка обращения к серверу: ${err}`))
}



