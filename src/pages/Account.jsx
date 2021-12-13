import { useState } from "react";
import styled from "styled-components";
import myProfilePic from "../assets/myProfilePic.png";
import { Edit, Menu } from "@mui/icons-material";
import { aboutResponsive, tablet, mobile, largeTablet } from "../responsive.js";
import { useDispatch } from "react-redux";
import { openNav } from "../redux/navSlice";
import WindowSize from "../hooks/windowSize";

const Section = styled.section`
  padding: 2.0625rem 1.3125rem;
`;
const AccountHead = styled.div`
  background: linear-gradient(
    97.65deg,
    #3a3b7b -9.97%,
    #c13fff 17.71%,
    #854bff 66.42%
  );
`;
const AccountTitle = styled.h5`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 31px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 32px;
`;
const ProfileDetails = styled.div`
  display: flex;
  ${tablet({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })};
`;
const ProfilePictureContainer = styled.div`
  width: 268px;
  height: 280px;
  border: 5px solid #ffffff;
  border-radius: 5px;
  margin-right: 33px;
  ${tablet({
    marginBottom: "2rem",
  })};
`;
const ProfilePicture = styled.img`
  width: 100%;
  box-shadow: 0px 4px 19px rgba(72, 72, 72, 0.25);
`;
const ProfileInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  ${aboutResponsive({
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: 0,
  })};
`;
const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${tablet({
    marginBottom: "1rem",
  })};
`;
const ProfileInfoLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.58);
  margin-bottom: 6px;
`;
const ProfileInfo = styled.h6`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
const UpdateTitle = styled.h4`
  margin-bottom: 13px;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #854bff;
`;
const UpdateTextarea = styled.textarea`
  padding: 1rem;
  width: 780px;
  height: 132px;
  background: #fcfcfc;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  margin-bottom: 22px;
  border: none;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 171.5%;
  color: #828282;

  ${largeTablet({
    width: "100%",
  })};
`;
const UpdateButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const UpdateButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 189px;
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
const UpdateSection = styled.section`
  background: white;
`;
const TextareaButton = styled.div`
  width: fit-content;
  ${largeTablet({
    width: "100%",
  })};
`;
const ContactInfoSection = styled.div`
  background: #e5e5e5;
`;
const EditButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 126px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #854bff;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #854bff;
`;
const InputController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25.33px;

  ${mobile({
    flexDirection: "column",
    alignItems: "baseline",
    width: "100%",
  })};
`;
const InputLabel = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #ababab;
`;
const Input = styled.input`
  width: 412px;
  height: 50px;
  background: #ffffff;
  border: 2px solid #eeeeee;
  border-radius: 5px;
  outline: none;
  padding: 1rem;
  ${mobile({
    width: "100%",
  })};
`;
const InputEdit = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    width: "100%",
  })};
`;
const InputField = styled.div`
  width: 70%;
  ${largeTablet({
    width: "100%",
  })};
`;
const EditOne = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PasswordSection = styled.section`
  background: #fff;
`;
const InputControllerPass = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
`;

const Account = () => {
  const size = WindowSize();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openNav());
  };
  const [edit] = useState(false);
  return (
    <>
      <AccountHead>
        <Section>
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
          <AccountTitle>Account</AccountTitle>
          <ProfileDetails>
            <ProfilePictureContainer>
              <ProfilePicture src={myProfilePic} alt="profile" />
            </ProfilePictureContainer>
            <ProfileInfos>
              <ProfileInfoDiv>
                <ProfileInfoLabel>Full Name</ProfileInfoLabel>
                <ProfileInfo>Yomi Aderayo</ProfileInfo>
              </ProfileInfoDiv>

              <ProfileInfoDiv>
                <ProfileInfoLabel>Email Address</ProfileInfoLabel>
                <ProfileInfo>aderayomi23@gmail.com</ProfileInfo>
              </ProfileInfoDiv>

              <ProfileInfoDiv>
                <ProfileInfoLabel>Agency</ProfileInfoLabel>
                <ProfileInfo>The Vusra Homes</ProfileInfo>
              </ProfileInfoDiv>

              <ProfileInfoDiv>
                <ProfileInfoLabel>Phone Number</ProfileInfoLabel>
                <ProfileInfo>+2348120641646</ProfileInfo>
              </ProfileInfoDiv>

              <ProfileInfoDiv>
                <ProfileInfoLabel>Office Address</ProfileInfoLabel>
                <ProfileInfo>aderayomi23@gmail.com</ProfileInfo>
              </ProfileInfoDiv>
            </ProfileInfos>
          </ProfileDetails>
        </Section>
      </AccountHead>

      <UpdateSection>
        <Section>
          <UpdateTitle>Update Bio</UpdateTitle>
          <TextareaButton>
            <UpdateTextarea value="Agent for Heroku houses with the aim of housing as many ile-ife residents as possible. Like what you see, send me a message" />
            <UpdateButtonContainer>
              <UpdateButton>Save Changes</UpdateButton>
            </UpdateButtonContainer>
          </TextareaButton>
        </Section>
      </UpdateSection>

      <ContactInfoSection>
        <Section>
          <UpdateTitle>Contact Information</UpdateTitle>
          <InputField>
            <InputController>
              <InputLabel>Phone</InputLabel>
              <InputEdit>
                <Input value="+2348120641646" />
                <EditOne>
                  <Edit style={{ fontSize: "1rem" }} /> Edit
                </EditOne>
              </InputEdit>
              {edit && <EditButton>Save Changes</EditButton>}
            </InputController>

            <InputController>
              <InputLabel>WhatsApp</InputLabel>
              <InputEdit>
                <Input value="+2348120641646" />
                <EditOne>
                  <Edit style={{ fontSize: "1rem" }} /> Edit
                </EditOne>
              </InputEdit>
              {edit && <EditButton>Save Changes</EditButton>}
            </InputController>

            <InputController>
              <InputLabel>Email</InputLabel>
              <InputEdit>
                <Input value="aderayomi23@gmail.com" type="email" />
                <EditOne>
                  <Edit style={{ fontSize: "1rem" }} /> Edit
                </EditOne>
              </InputEdit>
              {edit && <EditButton>Save Changes</EditButton>}
            </InputController>
          </InputField>
        </Section>
      </ContactInfoSection>

      <PasswordSection>
        <Section>
          <UpdateTitle>Change Password</UpdateTitle>
          <InputControllerPass>
            <InputLabel>Current Password</InputLabel>
            <Input placeholder="***************" />
          </InputControllerPass>

          <InputControllerPass>
            <InputLabel>New Password</InputLabel>
            <Input placeholder="***************" />
          </InputControllerPass>

          <InputControllerPass>
            <InputLabel>Confirm Password</InputLabel>
            <Input placeholder="***************" />
          </InputControllerPass>

          <UpdateButton>Change Password</UpdateButton>
        </Section>
      </PasswordSection>
    </>
  );
};

export default Account;
