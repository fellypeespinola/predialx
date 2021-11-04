/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useContext, useState } from "react";
import { Table, Space, Modal, Switch } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { listUser } from "../../hooks/useUser";
import { UserContext } from "../../contexts/UserContext";

export function ListUsersComponent() {
  const { users, setUsers } = useContext(UserContext);
  const [carregando, setCarregando] = useState(false);
  const { confirm } = Modal;

  useEffect(() => {
    const unsubcribe = async () => {
      await loadUsers();
    };

    unsubcribe();

    return () => {
      unsubcribe();
    };
  }, []);

  const colunas = [
    {
      title: "Nome",
      dataIndex: "name",
      sorter: true,
      key: "name"
    },
    {
      title: "Email",
      sorter: true,
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Nivel de Acesso",
      dataIndex: "access_level",
      key: "access_level"
    },
    {
      title: "Ações",
      key: "acoes",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/admin/visualizar/${record.id}`}>Visualizar</Link>
          {/* <a onClick={() => handleDeletarEvento(record)}>Deletar</a> */}
        </Space>
      ),
    },
  ];

  async function loadUsers() {
    setCarregando(true);

    let mounted = true;

    await listUser().then((response) => {
      if (mounted) {
        setUsers(response.data);
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
        dataSource={users}
        loading={carregando}
      />
    </>
  );
}
