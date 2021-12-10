import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Manage from "./Manage";
import { Routes, Route } from "react-router-dom";

const Section = styled.section`
  background: #e5e5e5;
`;

const Flex = styled.div`
  display: flex;
`;
const Right = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  return (
    <Section>
      <Flex>
        <Sidebar />
        <Right>
          <Routes>
            <Route path="/" element={<Manage />} />
          </Routes>
        </Right>
      </Flex>
    </Section>
  );
};

export default Dashboard;
