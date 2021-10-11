import React, {FC} from "react";
import styles from './header.module.css';

const Header: FC = () => {
  return (
    <header className={styles['header-block']}>
      <h1 className={styles.header}>Gallery</h1>
    </header>
  )
}

export default Header;
