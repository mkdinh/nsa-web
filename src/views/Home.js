import React, { useState } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

import UserAlert from "@components/UserAlert";
import UserCard from "@components/UserCard";
import UserList from "@components/UserList";
import UserMap from "@components/UserMap";
import apiClient from "@api";
import "./Home.module.less";

const { Content } = Layout;

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    props.didRender();
    getUser(6);
    onReady();
  }, []);

  async function getUsers() {
    setIsLoading(true);
    const users = await apiClient.users.getUsers();
    setUsers(users);
    setIsLoading(false);
  }

  async function getUser(id) {
    setIsLoading(true);
    const user = await apiClient.users.getUser(id);
    setCurrentUser(user);
    setIsLoading(false);
  }

  async function onItemClick(item) {
    await getUser(item.id);
    onClose();
  }

  function onReady() {
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }

  function onOpen() {
    setIsVisible(true);
    getUsers();
  }

  function onClose() {
    setIsVisible(false);
  }

  return (
    <div styleName="home-view">
      <Layout>
        <Content>
          {isReady && <UserMap location={currentUser.location} />}
          {currentUser.id && <UserCard user={currentUser} />}
        </Content>
        <UserList
          users={users}
          onOpen={onOpen}
          onClose={onClose}
          onItemClick={onItemClick}
          isLoading={isLoading}
          isVisible={isVisible}
        />
        <UserAlert user={currentUser} />
      </Layout>
    </div>
  );
};

Home.propTypes = {
  didRender: PropTypes.func,
};

export default Home;
