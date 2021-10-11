import React, {FC, useEffect} from 'react';
import Header from '../header/header';
import Main from '../main/main';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import { getImagesList } from '../../servicies/actions/actions';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagesList())
  }, [])

  return (
    <div className={styles.page}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
