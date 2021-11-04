import React, { useContext, useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Toaster } from "../components/Toaster";
import toast from "react-hot-toast";

import "./Login.scss";
import Logo from "../assets/img/marca.png";

export function Login() {
  const [form] = Form.useForm();
  const history = useHistory();
  const { signInWithEmail } = useContext(AuthContext);
  const [carregando, setCarregando] = useState(false);

  async function handleFormSubmit(data) {
    setCarregando(true);

    await signInWithEmail(data.email, data.password)
      .then(() => {
        history.push({ pathname: "/admin" });      

      }).catch(() => {
        toast.error("Usuário ou senha invalida.");
        form.resetFields();
      });

    setCarregando(false);
  }

  return (
    <div id="page-home">
      <Toaster />
      <Row justify="center" align="middle">
        <Col flex={1} className="aside">
          <aside></aside>
        </Col>
        <Col flex={1} className="main">
          <main>
            <div className="main-box">
              <img src={Logo} alt="Funesa" />

              <Form
                form={form}
                name="normal_login"
                className="login-form"
                size="large"
                layout="vertical"
                onFinish={handleFormSubmit}
              >
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Campo obrigatório!" }]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Campo obrigatório!" }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Senha"
                    type="password"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={carregando}
                    block
                  >
                    Entrar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </main>
        </Col>
      </Row>
    </div>
  );
}
