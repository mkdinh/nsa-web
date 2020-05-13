import React from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import { List, Drawer, Button } from "antd";

import UserListItem from "@components/UserItem";
import "./UserList.module.less";

function UserList(props) {
  const { isVisible, onClose, onOpen, users } = props;
  return (
    <>
      <div styleName="trigger-button">
        <Button size="large" type="danger" shape="circle" onClick={onOpen}>
          <PlusOutlined />
        </Button>
      </div>

      <Drawer onClose={onClose} visible={isVisible} bodyStyle={bodyStyle}>
        <List
          loading={props.isLoading}
          dataSource={users}
          renderItem={(user) => (
            <UserListItem onClick={props.onItemClick} user={user} />
          )}
        />
      </Drawer>
    </>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onItemClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

const bodyStyle = {
  padding: 0,
};

export default UserList;
