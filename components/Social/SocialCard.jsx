import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SocialCard.module.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function SocialCard({ medium, url, icon }) {
  return (
    <div className={styles.card_container}>
      <a
        href={url}
        className={styles.social_link}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.icon_container}>
          <FontAwesomeIcon icon={icon} className={styles.social_icon} />
        </div>
        <p className={styles.social_text}>{medium}</p>
      </a>
    </div>
  );
}
