import styled from "styled-components";
import Button from "../components/Button";
import deleteBtn from "../assets/fluent_delete-48-filled (1).png";
import { Menu } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openNav } from "../redux/navSlice";
import WindowSize from "../hooks/windowSize";

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

const AccomodationList = styled.div`
  display: flex;
  flex-direction: column;
`;
const AccomodationItem = styled.div`
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
const Left = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 179%;
  color: #3a3b7b;
`;
const Center = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #7a7a7a;
`;
const Right = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #7c7c7c;
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
const Search = () => {
  return (
    <>
      <SearchInput type="text" placeholder="Search" />
    </>
  );
};

const Manage = () => {
  const size = WindowSize();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openNav());
  };
  return (
    <Section>
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
        <CreateButton>Create New</CreateButton>
      </Head>

      <Search />

      <AccomodationList>
        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>

        <AccomodationItem>
          <Left>Single Room at Damico</Left>
          <Center>12, Harakiri, Damico Estate, Ile-ife</Center>
          <Right>NGN80,000</Right>
          <RightEnd>
            <EditButton>Edit</EditButton>
            <DeleteButton>
              <img src={deleteBtn} alt="delete" />
            </DeleteButton>
          </RightEnd>
        </AccomodationItem>
      </AccomodationList>

      <LoadMoreButton>Load More</LoadMoreButton>
    </Section>
  );
};

export default Manage;
