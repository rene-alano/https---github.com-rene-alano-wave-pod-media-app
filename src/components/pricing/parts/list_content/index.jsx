import { ReactComponent as CheckMark } from "../../../../assets/svg/pricing/checkmark-outline.svg";
import { ReactComponent as XMark } from "../../../../assets/svg/pricing/close-outline.svg";
import styles from "./style.module.scss";

export default function ContentList({ service, notInclude }) {
  return (
    <>
      <div className={styles.listContainer}>
        {service ? (
          <>
            <CheckMark className={styles.checkMark} />
            <li>{service}</li>
          </>
        ) : (
          <>
            <XMark className={styles.XMark} />
            <li>{notInclude}</li>
          </>
        )}
      </div>
    </>
  );
}
