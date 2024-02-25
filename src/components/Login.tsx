import React from 'react';
import { Form, Input, Button } from 'antd';


// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: process.env.FB_API_KEY,
//   authDomain: process.env.FB_AUTH_DOMAIN,
//   projectId: process.env.FB_PROJECT_ID,
//   storageBucket: process.env.FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
//   appId: process.env.FB_APP_ID,
//   measurementId: process.env.FB_MEASUREMENT_ID
// };
// const app = initializeApp(firebaseConfig);

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      initialValues={{ remember: true }}
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
