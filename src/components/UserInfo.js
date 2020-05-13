import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import "./UserInfo.module.less";

const { Text } = Typography;

function UserInfo(props) {
  const { user, field, displayName } = props;
  const data = user ? user[field] : null;
  const displayText = (displayName || field || "")
    .replace(/([A-Z])/g, " $1")
    .trim();

  return user ? (
    <div styleName="user-info">
      <Text styleName="user-info-field" level={4}>
        {displayText}
      </Text>
      <Text styleName="user-info-data">{data}</Text>
    </div>
  ) : null;
}

UserInfo.propTypes = {
  user: PropTypes.object,
  field: PropTypes.string,
  displayName: PropTypes.string,
};

export default UserInfo;
