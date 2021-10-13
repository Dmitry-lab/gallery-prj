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

  const buttonStyle = filtered ? `${styles.button} ${styles['button_active']}` : styles.button
  const buttonText = filtered ? 'Все фото' : 'Только фото с лайками'

  return (
    <div className={styles.gallery}>
      <button className={buttonStyle} onClick={onFilterClickHandler}>{buttonText}</button>
      {viewedImages.length ?
        <div className={styles.content}>
          {viewedImages.map((image: TImage) => {
            return <Card key={image.id} image={image}/>
          })}
        </div> :
        <p className={styles.text}>Нет изображений для просмотра</p>
      }
    </div>
  )
}

export default Gallery;
