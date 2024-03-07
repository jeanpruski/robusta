import GlobalLayout from "./components/GlobalLayout";
import Login from "./components/Login";
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#141414',
        height: '100vh',
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Login/>
        {/* <GlobalLayout/> */}

      </ConfigProvider>
    </div>
  );
}

export default App;
