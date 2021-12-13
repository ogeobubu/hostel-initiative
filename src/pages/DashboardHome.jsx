import { Menu } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openNav } from "../redux/navSlice";
import WindowSize from "../hooks/windowSize";

const DashboadHome = () => {
  const size = WindowSize();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openNav());
  };
  return (
    <>
      {size.width < 1045 && (
        <Menu
          style={{
            cursor: "pointer",
            fontSize: "2rem",
            marginRight: "1rem",
          }}
          onClick={handleClick}
        />
      )}
      Dashboard Home
    </>
  );
};

export default DashboadHome;
