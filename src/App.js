import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product";
import Market from "./pages/Market";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import { auth, database } from "./config";
import { dispatchAllAccomodations } from "./redux/accomodationsSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllAccomodations = async () => {
      await database.ref(`accomodations`).on("value", (snapshot) => {
        if (snapshot.exists()) {
          let returnArr = [];

          snapshot.forEach((childSnapshot) => {
            let item = childSnapshot.val();
            returnArr.push(item);
          });
          console.log(returnArr);
          dispatch(dispatchAllAccomodations(returnArr));
        } else {
          console.log("No data available");
        }
      });
    };
    getAllAccomodations();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/market" element={<Market />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
