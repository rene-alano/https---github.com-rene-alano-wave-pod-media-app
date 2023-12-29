import styles from "./style.module.scss";
import { Link } from "react-router-dom";
export default function Nav({ to, name }) {
  return (
    <>
      <li>
        <Link className={styles.navLink} to={to}>
          {name}
        </Link>
      </li>
    </>
  );
}
