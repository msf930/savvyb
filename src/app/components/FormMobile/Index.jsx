import React from "react";

import styles from "./styles.module.scss";

const FormMobile = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <form
        action="https://public.herotofu.com/v1/c16929b0-2864-11ef-b910-172fda062bcc"
        method="post"
        accept-charset="UTF-8"
      >
        <div className={styles.item}>
          <div className={styles.label}>
            <label for="nameFirst">First Name</label>
          </div>
          <div className={styles.input}>
            <input
              name="NameFirst"
              id="nameFirst"
              type="text"
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>
            <label for="nameLast">Last Name</label>
          </div>
          <div className={styles.input}>
            <input
              name="NameLast"
              id="nameLast"
              type="text"
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>
            <label for="email">Email</label>
          </div>
          <div className={styles.input}>
            <input
              name="Email"
              id="email"
              type="email"
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>
            <label for="tel">Phone</label>
          </div>
          <div className={styles.input}>
            <input name="Tel" id="tel" type="tel" className={styles.input} />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>
            <label for="message">Message</label>
          </div>
          <div>
            <textarea
              name="Message"
              id="message"
              className={styles.inputArea}
            />
          </div>
        </div>
        <div className={styles.radioCont}>
          <p>What space are you interested in?</p>
          <div className={styles.itemsCont}>
            <div className={styles.radioItem}>
              <input type="radio" id="hair" name="Space" value="Hair" />
              <label for="hair">Hair</label>
            </div>
            <div className={styles.radioItem}>
              <input type="radio" id="nail" name="Space" value="Nail" />
              <label for="nail">Nail</label>
            </div>
            <div className={styles.radioItem}>
              <input type="radio" id="studio" name="Space" value="Studio" />
              <label for="studio">Studio</label>
            </div>
            <div className={styles.radioItem}>
              <input type="radio" id="other" name="Space" value="Other" />
              <label for="other">Other</label>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.btnCont}>
            <input type="submit" value="Submit" className={styles.btn} />
          </div>
          <div>
            <input
              type="hidden"
              name="_gotcha"
              tabindex="-1"
              autocomplete="off"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormMobile;
