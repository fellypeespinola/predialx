/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import { Table, Space, Modal, DatePicker } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { listOrder } from "../../hooks/useOrder";
import { OrderContext } from "../../contexts/OrderContext";

export function ListOrdersComponent() {
  const { RangePicker } = DatePicker;
  const { orders, setOrders } = useContext(OrderContext);
  const [carregando, setCarregando] = useState(false);
  const { confirm } = Modal;

  useEffect(() => {
    const unsubcribe = async () => {
      await loadOrders({});
    };

    unsubcribe();

    return () => {
      unsubcribe();
    };
  }, []);

  const colunas = [
    {
      title: "Descrição",
      dataIndex: "description",
      sorter: true,
      key: "description",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Data",
      sorter: true,
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => <span>{new Date(date).toLocaleDateString()}</span>,
    },
    {
      title: "Cliente",
      dataIndex: "creator",
      key: "creator.name",
      render: (creator) => <a>{creator.name}</a>,
    },
    {
      title: "Colaborador em Atendimento",
      dataIndex: "callaborator",
      key: "collaborator.name",
      render: (collaborator) => <a>{}</a>,
    },
  ];

  async function loadOrders(formData) {
    setCarregando(true);

    let mounted = true;

    await listOrder(formData).then((response) => {
      if (mounted) {
        setOrders(response.data);
        setCarregando(false);
      }
    });

    return function cleanup() {
      mounted = false;
    };
  }

  // async function handleDeletarEvento(evento) {
  //   confirm({
  //     icon: <ExclamationCircleOutlined />,
  //     content: `Deseja deletar: ${evento.nome}?`,
  //     async onOk() {
  //       await deletarEvento(evento._id).then(() => {
  //         const eventos = listaEventos.filter((item) => {
  //           return item._id != evento._id;
  //         });

  //         setListaEventos(eventos);
  //       });
  //     },
  //   });
  // }

  // async function handleAtualizarEstado(evento) {
  //   await atualizarEstadoEvento(evento._id, !evento.finalizado);

  //   carregarEventos();
  // }

  return (
    <>
      <Table
        rowKey="id"
        columns={colunas}
        dataSource={orders}
        loading={carregando}
      />
    </>
  );
}
