import React from "react";
import { Breadcrumb } from "antd";
import { ListUsersComponent } from "../../components/user/ListUsersComponent";
import { FormCreateUserComponent } from "../../components/user/FormCreateUserComponent";

export function Users() {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Início</Breadcrumb.Item>
        <Breadcrumb.Item>Usuários</Breadcrumb.Item>
      </Breadcrumb>
      <FormCreateUserComponent />
      <div style={{ marginTop: "20px" }}>
        <ListUsersComponent />
      </div>
    </div>
  );
}
