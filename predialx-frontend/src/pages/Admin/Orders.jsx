import React from "react";
import { Breadcrumb } from "antd";
import { FilterOrdersComponent } from "../../components/order/FilterOrdersComponent";
import { ListOrdersComponent } from "../../components/order/ListOrdersComponent";

export function Orders() {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Início</Breadcrumb.Item>
        <Breadcrumb.Item>Orderns de Serviço</Breadcrumb.Item>
      </Breadcrumb>
      <FilterOrdersComponent />
      <div style={{ marginTop: "20px" }}>
        <ListOrdersComponent />
      </div>
    </div>
  );
}
