import { ReactComponent as CheckMark } from "../../../../assets/svg/pricing/checkmark-outline.svg";
import styles from "./style.module.scss";

export default function ContentList({ content }) {
  return (
    <>
      <div className={styles.listContainer}>
        <CheckMark className={styles.checkMark} />
        <li>{content}</li>
      </div>
    </>
  );
}
