import styles from "./style.module.scss";
import { Link } from "react-scroll";
export default function Nav({ to, name }) {
  return (
    <>
      <li>
        <Link
          className={styles.navLink}
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          {name}
        </Link>
      </li>
    </>
  );
}
