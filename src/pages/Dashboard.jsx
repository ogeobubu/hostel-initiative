import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Manage from "./Manage";
import Account from "./Account";
import firebase from "firebase";
import DashboardHome from "./DashboardHome";
import { Routes, Route, useNavigate } from "react-router-dom";
import { database } from "../config";
import { dispatchUser } from "../redux/userSlice";
import { dispatchAccomodations } from "../redux/accomodationsSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState("");
  const navigate = useNavigate();
  const [userUid, setUserUid] = useState(null);
  const [profilesCheck, setProfilesCheck] = useState(null);
  //snapshots
  const [profiles, setProfiles] = useState([]);
  //spinner
  const [loading, setLoading] = useState(true);

  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        setAuthState(false);
      } else {
        setAuthState(true);
        setUserUid(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    database.ref("users/" + userUid).on("value", (snapshot) => {});
  }, [userUid]);

  useEffect(() => {
    const getUser = async () => {
      if (userUid) {
        await database
          .ref()
          .child("users")
          .child(userUid)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              dispatch(dispatchUser(snapshot.val()));
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    getUser();
  }, [userUid, dispatch]);

  useEffect(() => {
    const getAccomodationsForSpecificUser = async () => {
      if (userUid) {
        await database
          .ref(`accomodations/${userUid}`)
          .on("value", (snapshot) => {
            if (snapshot.exists()) {
              let returnArr = [];

              snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                returnArr.push(item);
              });
              console.log(returnArr);
              dispatch(dispatchAccomodations(returnArr));
            } else {
              console.log("No data available");
            }
          });
      }
    };
    getAccomodationsForSpecificUser();
  }, [userUid, dispatch]);

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
