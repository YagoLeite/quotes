import React from "react";

import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Welcome, new user!</h1>
      <p className={classes.paragraph}>
        This website is just a demo practice for React router. However, if you
        wish to play arround a bit, I would be extremly happy.
      </p>
      <p className={classes.paragraph}>
        To store the quotes, I'm using Firebase as a backend. That means that
        every quote, or comment will be stored in the app. So be carefull!
      </p>
    </div>
  );
};

export default Welcome;
