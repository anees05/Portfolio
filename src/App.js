import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: "none", color: "white" }} to="/Portfolio">Portfolio</Link>} scroll>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            {/* <Link to="/Contact">Contact</Link> */}
          </Navigation>
        </Header>
        <Drawer title="Portfolio">
          <Navigation>
            <Link to="/Portfolio">Home</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            {/* <Link to="/Contact">Contact</Link> */}
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
