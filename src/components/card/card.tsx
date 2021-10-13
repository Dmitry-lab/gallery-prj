import React, {FC} from 'react';
import styles from './card.module.css';
import { TImage } from '../../servicies/types/data';
import { useDispatch } from 'react-redux';
import { DELETE_IMAGE, TOGGLE_LIKE } from '../../servicies/actions/actions';

const Card: FC<{image: TImage}> = ({image}) => {
  const dispatch = useDispatch();

  const onLikeClickHandler = () => {
    dispatch({ type: TOGGLE_LIKE, id: image.id })
  }

  const onDeleteClickHandler = () => {
    dispatch({ type: DELETE_IMAGE, id: image.id })
  }

  const deleteButtonStyle = `${styles['default-button']} ${styles['delete-button']}`
  const likeButtonStyle = `${styles['default-button']} ${styles['like-button']} ${
    image.isLiked ? styles['like-button_checked'] : ''}`

  return (
    <figure className={styles.card}>
      <img className={styles.image} src={image.url} alt={`Фото`}/>
      <div className={styles['shadow-rect']} />
      <figcaption className={styles['caption-content']}>
        <div className={styles.info}>
          <p className={styles.caption}>{`Просмотров: ${image.views}`}</p>
          <p className={styles.caption}>{`Скачиваний: ${image.downloads}`}</p>
        </div>
        <div className={styles['likes-block']}>
          <button className={likeButtonStyle} type='button' onClick={onLikeClickHandler}/>
        </div>
        <button className={deleteButtonStyle} type='button' onClick={onDeleteClickHandler}/>
      </figcaption>
    </figure>
  )
}

export default Card
