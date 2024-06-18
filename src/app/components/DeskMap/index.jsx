import React from "react";

import styles from "./styles.module.scss";

const MapMobile = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Location</h1>
      <div className={styles.addressCont}>
        <p>
          5056 Federal Blvd, <br /> Denver, CO 80221
        </p>
      </div>

      <div className={styles.mapCont}>
        <iframe
          src="https://snazzymaps.com/embed/615025"
          width="350px"
          height="330px"
        ></iframe>
      </div>
    </div>
  );
};

export default MapMobile;
