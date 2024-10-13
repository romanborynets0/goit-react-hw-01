import React from "react";
import styles from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendListItem}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={styles.avatar}
      />
      <p>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
