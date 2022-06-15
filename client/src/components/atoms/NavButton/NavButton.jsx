import { Link } from "react-router-dom";
import styles from "./nav-button.module.scss";

export default function NavButton({ href, children }) {

  return (
    <Link className={styles.a} to={href}>{children}</Link>
  );
}
