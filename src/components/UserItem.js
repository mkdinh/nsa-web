import React from "react";
import PropTypes from "prop-types";
import { List, Avatar } from "antd";
import "./UserItem.module.less";

function UserListItem(props) {
  const { user } = props;

  function onClick() {
    props.onClick(user);
  }

  return (
    <List.Item onClick={onClick} styleName="user-item">
      <List.Item.Meta
        avatar={<Avatar src={user.profilePhotoUrl} />}
        title={<span styleName="user-name">{user.fullName}</span>}
        description={<span>{user.appVersion}</span>}
      />
    </List.Item>
  );
}

UserListItem.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.object,
};

export default UserListItem;
