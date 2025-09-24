import styles from "./footer.module.css";

export const Footer = ({ total }) => {
  return (
    <footer>
      <code className={styles.footer}>
        Le gestionnaire de tâches vous a permis de traiter {total} tâches depuis le début de son utilisation.
      </code>
    </footer>
  );
};
