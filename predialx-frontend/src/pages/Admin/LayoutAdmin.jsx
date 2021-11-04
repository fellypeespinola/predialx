import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { AuthContext } from "../../contexts/AuthContext";

import "./Admin.scss";

export function LayoutAdmin(props) {
  const { Header, Content, Footer } = Layout;
  const { usuario, signOut, checkAuth } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const checkLogin = () => {
      checkAuth().catch(() => {
        history.push({ pathname: "/" })
      })
    }

    const unsubcribe = () => {
      console.log(usuario)
      if (usuario) {
        if (usuario.access_level === 'coordenador') {
          console.log('isadmin')
          setIsAdmin(true)
        } else {
          history.push({ pathname: "/admin/orders/create" })
        };
      }
    };
    return () => {
      unsubcribe();
      checkLogin();
    };
  }, []);


  function handleSignOut() {
    signOut().then(() =>
      history.push({ pathname: "/" })
    )
  }

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1" >
              <Link to="/admin">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/admin/users">Usuários</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/admin/orders">Ordens de Serviço</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/admin/orders/create">Criar Nova OS</Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={handleSignOut}>
              Sair
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          2021 © Predial X
        </Footer>
      </Layout>
    </div>
  );
}
