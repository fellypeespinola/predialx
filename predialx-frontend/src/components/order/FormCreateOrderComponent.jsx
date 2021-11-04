import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import toast from "react-hot-toast";
import { createOrder } from "../../hooks/useOrder";
import { Toaster } from "../Toaster";

export function FormCreateOrderComponent() {
    const { TextArea } = Input;
    const [form] = Form.useForm();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            form.setFieldsValue({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    }, [])

    const handleAddOrder = async (data) => {

        const { description, latitude, longitude } = data;

        await createOrder({ description, latitude, longitude })
            .then((response) => {
                if (response.success) {

                    form.resetFields();

                    toast.success("OS cadastrada com sucesso!");
                }
            })
            .catch(() => {
                toast.error("Erro ao cadastrar a OS!");
            });
    };

    return (
        <div>
            <Toaster />

            <Form
                form={form}
                layout="vertical"
                onFinish={handleAddOrder}
                size="large"
                id="form-evento"
            >
                <Form.Item
                    name="description"
                    required
                    rules={[{ required: true, message: "Preencha o campo" }]}
                >
                    <TextArea rows={6} placeholder="Descrição" />
                </Form.Item>

                <Form.Item
                    name="latitude"
                >
                    <Input disabled placeholder="Latitude" />
                </Form.Item>

                <Form.Item
                    name="longitude"
                >
                    <Input disabled placeholder="Latitude" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
