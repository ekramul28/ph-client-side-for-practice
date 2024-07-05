import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar2 from "./SideBar2";

const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar2></SideBar2>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
