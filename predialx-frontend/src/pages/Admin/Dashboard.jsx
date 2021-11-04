import React from "react";
import { Breadcrumb } from "antd";
import { ChartComponent } from '../../components/dashboard/ChartComponent'

export function Dashboard() {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Dashboard</h1>
      <ChartComponent />
    </div>
  );
}
