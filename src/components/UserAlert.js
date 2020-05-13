import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Alert } from "antd";
import "./UserAlert.module.less";

function UserAlert(props) {
  const [style, setStyle] = useState({ opacity: 0 });
  const { user } = props;
  const message = `${user.firstName} is off the grid!`;

  useEffect(() => {
    setStyle({ opacity: user.location ? 0 : 1 });

    if (!user.location) {
      setTimeout(() => {
        setStyle({ opacity: 0 });
      }, 3000);
    }
  }, [user]);

  return (
    <Alert
      style={style}
      styleName="user-alert"
      message={message}
      type="error"
    />
  );
}

UserAlert.propTypes = {
  user: PropTypes.object,
};

export default UserAlert;
