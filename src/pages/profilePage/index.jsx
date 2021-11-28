import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

// import { updateProfile, reload } from "firebase/auth";
import { leave, auth } from "../../services/firebase";
// import { getDatabase, ref, set, update, onValue } from "firebase/database";

export const ProfilePage = () => {
  // const [data, setData] = useState();
  const [currentUser, setCurrentUser] = useState();

  // function writeUserData(userId) {
  //   const db = getDatabase();
  //   update(ref(db, "profile/" + userId), {
  //     username: "sa",
  //     email: "trw@mail.ru",
  //   });
  // }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(undefined);
      }
    });
  }, []);

  if (currentUser) {
    const user = currentUser;
    console.log(user.uid);
    return (
      <div>
        <main className={styles.wrapper}>
          <header className={styles.header}>
            <div className={styles.left}>
              <div className={styles.img}>
                <img src={user.photoURL} alt="userImg" />
              </div>

              <h3> {user.displayName}</h3>
            </div>

            <button onClick={() => leave()}>выйти</button>
          </header>
          <section className={styles.userContentWraper}>
            <div className={styles.userContent}>
              <h2>Герои</h2>
              <Link
                style={{ marginRight: "20px" }}
                to={`/characterCreatePage/${user.uid}`}
              >
                Создать нового персонажа
              </Link>
            </div>
            <div className={styles.userContent}>
              <h1>Приключения</h1>
            </div>
            <div className={styles.userContent}>
              <h1>Карты</h1>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return <h1>Профиль не найден</h1>;
};
