import React from "react";
import styles from "./Profile.module.css"; // Імпорт стилів

export default function Profile(props) {
  return (
    <div className={styles.profile}>
      <div>
        <img src={props.image} alt="User avatar" className={styles.avatar} />{" "}
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p> 
        <p className={styles.location}>{props.location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
