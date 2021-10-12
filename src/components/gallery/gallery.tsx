import React, {FC, useMemo} from "react";
import styles from './gallery.module.css';
import { useSelector } from "react-redux";
import { RootState } from "../../servicies/types";
import { TImage } from '../../servicies/types/data';
import Card from "../card/card";
import { useDispatch } from "react-redux";
import { SET_FILTER } from "../../servicies/actions/actions";

const Gallery: FC = () => {
  const dispatch = useDispatch();
  const { images, filtered } = useSelector((store: RootState) => store)

  const viewedImages = useMemo(() => {
    return filtered ? images.filter(image => image.isLiked) : images
  }, [filtered, images])

  const onFilterClickHandler = () => {
    dispatch({ type: SET_FILTER})
  }

  return (
    <div>
      <button onClick={onFilterClickHandler}>Тольк фото с лайками</button>
      <div className={styles.content}>
        {viewedImages.length ?
          viewedImages.map((image: TImage) => {
            return <Card key={image.id} image={image}/>
          }) :
          <p>Нет изображений для просмотра</p>
        }
      </div>
    </div>
  )
}

export default Gallery;
