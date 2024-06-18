import React from "react";

import styles from "./styles.module.scss";

const MapMobile = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Location</h1>
      <h3 className={styles.address}>
        5056 Federal Blvd, <br /> Denver, CO 80221
      </h3>
      <div className={styles.mapCont}>
        <iframe
          src="https://snazzymaps.com/embed/615025"
          width="300px"
          height="400px"
        ></iframe>
      </div>
    </div>
  );
};

export default MapMobile;
