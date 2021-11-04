import React from "react";
import { Breadcrumb } from "antd";
import { FormCreateOrderComponent } from '../../components/order/FormCreateOrderComponent'

export function CreateOrder() {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Início</Breadcrumb.Item>
        <Breadcrumb.Item>Orderns de Serviço</Breadcrumb.Item>
        <Breadcrumb.Item>Criar Nova OS</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ marginTop: "20px" }}>
        <FormCreateOrderComponent />
      </div>
    </div>
  );
}
