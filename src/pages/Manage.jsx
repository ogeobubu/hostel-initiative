import { useState, useEffect } from "react";
import styled from "styled-components";
import { Backdrop, Box, Modal, Fade } from "@mui/material";
import deleteBtn from "../assets/fluent_delete-48-filled (1).png";
import { Menu, Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openNav } from "../redux/navSlice";
import WindowSize from "../hooks/windowSize";
import { tablet, mobile } from "../responsive.js";
import ProgressBar from "../components/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStorage from "../hooks/useStorage";
import firebase from "firebase";
import { auth, database } from "../config";
import CreateAccomodation from "../components/CreateAccomodation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 3,
  overflowY: "auto",
  height: "100%",
  borderRadius: "10px",
};

const Section = styled.section`
  padding: 2.0625rem 1.3125rem;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #854bff;
`;

const SearchInput = styled.input`
  width: 675px;
  height: 43px;
  background: #ffffff;
  border: 2px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 1rem 2rem;
  outline: none;
  margin-top: 14px;
  margin-bottom: 29px;
`;
const RightEnd = styled.div`
  display: flex;
`;
const EditButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 65px;
  height: 26px;
  background: #ffffff;
  border: 1px solid #854bff;
  border-radius: 3px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #854bff;
  margin-right: 15px;
`;
const DeleteButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 36px;
  height: 26px;
  background: #ffeeee;
  border: 1px solid #fd4c61;
  border-radius: 3px;
`;
const LoadMoreButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 370px;
  height: 39px;
  background: #ffffff;
  border: 2px solid #dedede;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 8px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #929292;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    width: "100%",
  })};
`;
const CreateButton = styled.button`
  cursor: pointer;
  border: none;
  width: 124px;
  height: 39px;
  background: #854bff;
  border-radius: 5px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
const TitleMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TableDiv = styled.div`
  width: 900px;
  overflow-x: auto;
`;
const Table = styled.table`
  width: 100%;
`;
const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  padding: 1rem;
  margin-bottom: 11px;
`;
const Td = styled.td``;

const Search = () => {
  return (
    <>
      <SearchInput type="text" placeholder="Search" />
    </>
  );
};

const Manage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const size = WindowSize();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openNav());
  };
  return (
    <>
      <Section>
        <ToastContainer />

        <Head>
          <TitleMenu>
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
            <Title>Manage Accomodation</Title>
          </TitleMenu>
          <CreateButton onClick={handleOpen}>Create New</CreateButton>
        </Head>

        <Search />

        <TableDiv>
          <Table>
            <Tr>
              <Td>Single Room at Damico</Td>
              <Td>12, Harakiri, Damico Estate, Ile-ife</Td>
              <Td>NGN80,000</Td>
              <Td>
                <RightEnd>
                  <EditButton>Edit</EditButton>
                  <DeleteButton>
                    <img src={deleteBtn} alt="delete" />
                  </DeleteButton>
                </RightEnd>
              </Td>
            </Tr>

            <Tr>
              <Td>Single Room at Damico</Td>
              <Td>12, Harakiri, Damico Estate, Ile-ife</Td>
              <Td>NGN80,000</Td>
              <Td>
                <RightEnd>
                  <EditButton>Edit</EditButton>
                  <DeleteButton>
                    <img src={deleteBtn} alt="delete" />
                  </DeleteButton>
                </RightEnd>
              </Td>
            </Tr>

            <Tr>
              <Td>Single Room at Damico</Td>
              <Td>12, Harakiri, Damico Estate, Ile-ife</Td>
              <Td>NGN80,000</Td>
              <Td>
                <RightEnd>
                  <EditButton>Edit</EditButton>
                  <DeleteButton>
                    <img src={deleteBtn} alt="delete" />
                  </DeleteButton>
                </RightEnd>
              </Td>
            </Tr>

            <Tr>
              <Td>Single Room at Damico</Td>
              <Td>12, Harakiri, Damico Estate, Ile-ife</Td>
              <Td>NGN80,000</Td>
              <Td>
                <RightEnd>
                  <EditButton>Edit</EditButton>
                  <DeleteButton>
                    <img src={deleteBtn} alt="delete" />
                  </DeleteButton>
                </RightEnd>
              </Td>
            </Tr>
          </Table>
        </TableDiv>

        <LoadMoreButton>Load More</LoadMoreButton>
      </Section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              ...style,
              width: size.width > 800 ? 800 : size.width,
            }}
          >
            <CreateAccomodation
              titleCreate="Create Accomodation"
              onClose={handleClose}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Manage;
