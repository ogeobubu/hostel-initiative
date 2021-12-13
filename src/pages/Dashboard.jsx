import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Manage from "./Manage";
import Account from "./Account";
import firebase from "firebase";
import DashboardHome from "./DashboardHome";
import { Routes, Route, useNavigate } from "react-router-dom";

const Section = styled.section`
  background: #fcfcfc;

  overflow-x: hidden;
`;

const Flex = styled.div`
  display: flex;
`;
const Right = styled.div`
  width: 100%;
`;

const Dashboard = () => {
  const [authState, setAuthState] = useState("");
  const navigate = useNavigate();
  console.log(authState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        setAuthState("Logged-out");
      } else {
        setAuthState("Logged-in");
      }
    });
  }, []);

  useEffect(() => {
    const getUser = firebase.auth().currentUser;
    if (getUser !== null) {
      getUser.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
    console.log(getUser);
  }, []);

  if (authState === "Logged-out") {
    return navigate("/");
  } else {
    return (
      <Section>
        <Flex>
          <Sidebar />
          <Right>
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </Right>
        </Flex>
      </Section>
    );
  }
};

export default Dashboard;
