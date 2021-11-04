import React, { useState, useContext } from "react";
import { Form, Input, Modal, Button, Select } from "antd";
import { UserContext } from "../../contexts/UserContext";
import { createUser } from "../../hooks/useUser";
import toast from "react-hot-toast";
import { Toaster } from "../Toaster";
import "./FormCreateUserComponent.scss";

export function FormCreateUserComponent() {
    const { Option } = Select;
    const [modalVisivel, setModalVisivel] = useState(false);
    const { users, setUsers } = useContext(UserContext);
    const [form] = Form.useForm();

    const handleExibirModal = () => {
        setModalVisivel(true);
    };

    const handleModalCancel = () => {
        setModalVisivel(false);
    };

    const handleModalOk = () => {
        form.submit();
    };

    const handleAddUser = async (data) => {

        const { name, email, password, access_level } = data;

        await createUser({ name, email, password, access_level })
            .then((response) => {
                if (response.success) {
                    const evento = response.data;

                    setUsers([...users, evento]);
                    setModalVisivel(false);

                    form.resetFields();

                    toast.success("Usuário cadastrado com sucesso!");
                }
            })
            .catch(() => {
                toast.error("Erro ao cadastrar o Usuário!");
            });
    };

    return (
        <div>
            <Toaster />

            <Button type="primary" onClick={handleExibirModal}>
                Adicionar Usuário
            </Button>

            <Modal
                title="Adicionar Novo Usuário"
                visible={modalVisivel}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleAddUser}
                    size="large"
                    id="form-evento"
                >
                    <Form.Item
                        name="name"
                        required
                        rules={[{ required: true, message: "Preencha o campo" }]}
                    >
                        <Input placeholder="Nome" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        required
                        rules={[{ required: true, message: "Preencha o campo" }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        required
                        rules={[{ required: true, message: "Preencha o campo" }]}
                    >
                          <Input.Password placeholder="Senha" />
                    </Form.Item>

                    <Form.Item
                        name="access_level"
                        required
                        rules={[{ required: true, message: "Preencha o campo" }]}
                    >
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Selecione um nivel de acesso"
                            optionFilterProp="children"
                        >
                            <Option value="coordenador">Coordenador</Option>
                            <Option value="colaborador">Colaborador</Option>
                            <Option value="cliente">Cliente</Option>
                        </Select>
                    </Form.Item>


                </Form>
            </Modal>
        </div>
    );
}
