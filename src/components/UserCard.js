import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import UserInfo from "@components/UserInfo";
import "./UserCard.module.less";

const { Text } = Typography;
const { Meta } = Card;

function UserCard(props) {
  const [isExpand, setIsExpand] = useState(true);
  const { user } = props;

  function toggleExpand() {
    setIsExpand(!isExpand);
  }

  return (
    <Card bodyStyle={bodyStyle} styleName="user-card">
      <Meta
        title={<Text>{user.fullName}</Text>}
        description={
          <Text styleName="user-app-version">{user.appVersion}</Text>
        }
        avatar={
          <Avatar shape="square" size="large" src={user.profilePhotoUrl} />
        }
      />
      {isExpand && (
        <div styleName="user-content">
          <Text styleName="user-bio">{user.meta.bio}</Text>
          <div styleName="user-card-info">
            <UserInfo user={user} field="email" />
            <UserInfo user={user} field="gender" />
            <UserInfo user={user.location} field="company" />
            <UserInfo
              user={user.location}
              field="countryName"
              display="country"
            />
            <UserInfo user={user.meta} field="address" />
            <UserInfo user={user.meta} field="ipAddress" />
          </div>
        </div>
      )}
      <span onClick={toggleExpand} styleName="mobile-expand-button">
        {isExpand ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </span>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({}),
};

const bodyStyle = {
  paddingBottom: 0,
};

export default UserCard;
