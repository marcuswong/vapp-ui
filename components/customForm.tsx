import React from 'react';
import { Button, Form, Input, InputNumber, notification } from 'antd';
const base_url = process.env.NEXT_PUBLIC_API_URL;


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const CustomForm = () => {


    const [api, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();

    const showSuccessMsg = () => {
    
    };

    const showErrorMsg = () => {
        
      };
    
    const onFinish = (values: any) => {
        fetch(base_url+'/vocab/create', {
            method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            api.info({
                message: `Notification`,
                description: "Submitted successfully",
                placement: "bottomRight"
              });
              form.resetFields();
          })
          .catch((error) => {
            api.info({ 
                message: `Notification`,
                description: "Form submit failed",
                placement: "bottomRight"
              });
          });
    };

    return (
        <>
+      {contextHolder}
        <Form className="form" {...layout} name="nest-messages"   form={form} onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['title']}
                label="Title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['desccription']}
                label="Description">
                <Input />
            </Form.Item>
       
            <Form.Item name={['remark']} label="Remark">
                <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </>
    );
};

export default CustomForm;