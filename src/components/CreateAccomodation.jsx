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
import { v4 as uuidv4 } from "uuid";

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

const CreateHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const CreateTitle = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #854bff;
`;
const CreateBody = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormController = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;
const FormLabel = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #8f8f8f;
  margin-bottom: 6px;
`;
const FormInput = styled.input`
  outline: none;
  min-width: 693px;
  flex: 1;
  height: 49px;
  background: #fcfcfc;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  padding: 1rem;
  ${tablet({
    minWidth: "100%",
  })};

  &::placeholder {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #d5d5d5;
  }
`;
const FormTextarea = styled.textarea`
width: 693px;
height: 153px;#FCFCFC;
border: 1px solid #F9F9F9;
border-radius: 5px;
padding: 1rem;
outline: none;
${tablet({
  width: "100%",
})};
`;
const FormSubLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #a8a8a8;
`;
const FormButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 693px;
  height: 39px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #854bff;
  border-radius: 5px;
  margin-top: 48px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  ${tablet({
    width: "100%",
  })};
`;

const FormImageClick = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const FormImage = styled.input``;

const CreateAccomodation = ({ onClose, titleCreate, editID }) => {
  const [accomodation, setAccomodation] = useState({});
  const [key, setKey] = useState("");
  //form submission
  const [userUid, setUserUid] = useState(null);
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [renewal, setRenewal] = useState("");
  const [file, setFile] = useState(null);
  const [authState, setAuthState] = useState("");

  const types = ["image/png", "image/jpeg"];
  //progress status

  //form submit status
  const [submit, setSubmit] = useState("");

  const { url, progress } = useStorage(file);

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
  // Write edit logic here
  // Get Single Accomodation here
  useEffect(() => {
    const getSingleAccomodation = async () => {
      if (userUid) {
        await database
          .ref()
          .child("accomodations")
          .child(userUid)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              let returnArr = [];
              const test = [editID];
              snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
              });
              setAccomodation(returnArr.filter((m) => test.includes(m.id)));
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    getSingleAccomodation();
  }, [userUid]);

  useEffect(() => {
    const getKeyValue = async () => {
      await database.ref("accomodations/" + userUid).on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          setKey(childKey.toString());
          console.log(childKey.toString());
        });
      });
    };
    getKeyValue();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editID) {
      // Edit logic
      const updateAccomodation = {};

      var postData = {
        title,
        address,
        price,
        renewal,
        description,
        features,
        image: url,
      };

      await database.ref().child(`accomodations/${userUid}/${key}`);

      var updates = {};
      updates[`accomodations/${userUid}/${key}`] = {
        postData,
        ...accomodation[0],
      };

      await database.ref().update(updates);

      toast("You have successfully edited this accomodation", {
        type: "success",
      });
    } else {
      if (
        (title === "" || address === "" || price === "" || renewal === "",
        description === "",
        features === "",
        url === null)
      ) {
        toast("All fields are required!", { type: "error" });
      } else {
        const createAccomodationData = {
          id: uuidv4(),
          title,
          address,
          price,
          renewal,
          description,
          features,
          image: url,
        };
        await database
          .ref("accomodations/" + userUid)
          .push()
          .set(createAccomodationData);
        toast("You have successfully created a new accomodation", {
          type: "success",
        });
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <CreateHead>
        <CreateTitle>{titleCreate}</CreateTitle>
        <Close
          onClick={() => onClose()}
          style={{ color: "#000", cursor: "pointer" }}
        />
      </CreateHead>
      <CreateBody>
        <Form>
          <FormController>
            <FormLabel>Title</FormLabel>
            <FormInput
              placeholder={
                editID ? accomodation[0]?.title : "e.g Single room at damico"
              }
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={editID && accomodation[0]?.title}
            />
          </FormController>

          <FormController>
            <FormLabel>Address</FormLabel>
            <FormInput
              placeholder={
                editID ? accomodation[0]?.address : "e.g Single room at damico"
              }
              type="text"
              onChange={(e) =>
                setAddress(editID ? accomodation[0]?.address : e.target.value)
              }
              defaultValue={editID && accomodation[0]?.address}
            />
          </FormController>

          <FormController>
            <FormLabel>Price</FormLabel>
            <FormInput
              placeholder={
                editID ? accomodation[0]?.price : "e.g Single room at damico"
              }
              type="text"
              onChange={(e) =>
                setPrice(editID ? accomodation[0]?.price : e.target.value)
              }
              defaultValue={editID && accomodation[0]?.price}
            />
          </FormController>

          <FormController>
            <FormLabel>Renewal Period</FormLabel>
            <FormInput
              placeholder={
                editID ? accomodation[0]?.renewal : "e.g Single room at damico"
              }
              type="text"
              onChange={(e) =>
                setRenewal(editID ? accomodation[0]?.renewal : e.target.value)
              }
              defaultValue={editID && accomodation[0]?.renewal}
            />
          </FormController>

          <FormController>
            <FormLabel>Description</FormLabel>
            <FormTextarea
              placeholder={
                editID
                  ? accomodation[0]?.description
                  : "e.g Single room at damico"
              }
              type="text"
              onChange={(e) =>
                setDescription(
                  editID ? accomodation[0]?.description : e.target.value
                )
              }
              defaultValue={editID && accomodation[0]?.description}
            />
          </FormController>

          <FormController>
            <FormLabel>Features</FormLabel>
            <FormSubLabel>
              Separate multiple features by a comma e.g (Electricity, Parking
              Space, Running Water){" "}
            </FormSubLabel>
            <FormInput
              placeholder={
                editID ? accomodation[0]?.features : "e.g Single room at damico"
              }
              type="text"
              defaultValue={editID && accomodation[0]?.features}
              onChange={(e) =>
                setFeatures(editID ? accomodation[0]?.features : e.target.value)
              }
            />
          </FormController>

          <FormController>
            <FormLabel>Images</FormLabel>
            <FormInput
              placeholder={
                file
                  ? file.name
                  : url
                  ? "File has successfully been uploaded"
                  : null
              }
              type="text"
              disabled={true}
              defaultValue={editID && accomodation[0]?.image}
            />
            <FormImageClick>
              <label style={{ cursor: "pointer", fontSize: "14px" }} for="fusk">
                + Add Photo
              </label>
              <FormImage
                style={{ display: "none" }}
                id="fusk"
                type="file"
                className="custom-file-input"
                onChange={(e) => {
                  let selected = e.target.files[0];
                  if (selected && types.includes(selected.type)) {
                    setFile(selected);
                  } else {
                    setFile(null);
                    toast(
                      "Oops! You can only select an image with the type 'png' or 'jpeg'",
                      { type: "error" }
                    );
                  }
                }}
              />
            </FormImageClick>
            {file && <ProgressBar file={file} setFile={setFile} />}
          </FormController>

          <FormButton type="submit" onClick={handleSubmit}>
            {titleCreate}
          </FormButton>
        </Form>
      </CreateBody>
    </>
  );
};

export default CreateAccomodation;
