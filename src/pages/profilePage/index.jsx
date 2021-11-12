import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { leave, auth } from "../../services/firebase";

export const ProfilePage = () => {
  const [a, setA] = useState();
  const user = auth.currentUser;

  let displayName;
  let email;
  let photoURL;
  let emailVerified;

  useEffect(() => {
    if (user !== null) {
      let displayName = user.displayName;
      let email = user.email;
      let photoURL = user.photoURL;
      let emailVerified = user.emailVerified;
      setA(user.photoURL);
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }, [user]);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     if (user.email) {
  //       setA(user.email);
  //     }
  //     console.log(user);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  return <h1>{a}</h1>;
};
