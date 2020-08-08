import styles from './footer.module.css';

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <p>
        <small>Developed by António Maia</small>
      </p>
    </footer>
  );
};

export default footer;
