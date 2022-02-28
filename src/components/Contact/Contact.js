import React from "react";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="title-section">
          <FormattedMessage id="app.titleContact" defaultMessage="" />
        </h2>
      </div>
    </div>
  );
};
export default Contact;
