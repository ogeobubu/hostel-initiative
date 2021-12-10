import Header from "../components/Header";
import styled from "styled-components";
import { aboutResponsive, tablet, mobile } from "../responsive";
import arrowRight from "../assets/rightArrow.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Section = styled.section``;

const Container = styled.div`
  padding: 2rem 6rem;
  display: flex;

  ${aboutResponsive({
    flexDirection: "column",
    padding: "2rem 4rem",
  })};

  ${tablet({
    padding: "2rem",
  })};
`;

const Left = styled.div`
  flex: 1;
  background: #854bff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({
    padding: "1.5rem",
  })};
`;
const Head = styled.h1`
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
  margin-bottom: 25px;
  margin-top: 92px;
  margin-left: 67px;
  width: 50%;

  ${mobile({
    marginLeft: 0,
    marginTop: "35px",
    width: "100%",
    fontSize: "35px",
  })};
`;
const Desc = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 87px;
  margin-left: 67px;
  width: 60%;

  ${mobile({
    marginLeft: 0,
    width: "100%",
  })};
`;
const Span = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
  margin-left: 67px;
  ${mobile({
    marginLeft: 0,
    width: "100%",
  })};

  ${tablet({
    marginBottom: "2rem",
  })};
`;
const Right = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 47px rgba(207, 207, 207, 0.29);
  border-radius: 20px;
  flex: 1;

  ${tablet({
    marginTop: "1rem",
  })};
`;
const RightContainer = styled.div`
  padding: 56px 62px;

  ${mobile({
    padding: "2rem 1.5rem",
  })};
`;

const Form = styled.form``;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormController = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Label = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #8f8f8f;
  margin-bottom: 9px;
`;
const Input = styled.input`
  width: 447px;
  height: 49px;
  background: #fcfcfc;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  padding: 1rem;
  outline: none;

  &::placeholder {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #d5d5d5;
  }

  ${tablet({
    width: "100%",
  })};
`;
const Image = styled.img``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Signup = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Left>
            <Head>Agent Registration</Head>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
            <Span>
              Already an agent?{" "}
              <Link className="link" to="/signin">
                <b>Log in</b>
              </Link>
            </Span>
          </Left>
          <Right>
            <RightContainer>
              <Form>
                <FormGroup>
                  <FormController>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="e.g Oge Obubu" />
                  </FormController>

                  <FormController>
                    <Label>Agency Name</Label>
                    <Input type="text" placeholder="e.g Hotel Initiative" />
                  </FormController>

                  <FormController>
                    <Label>Email Address</Label>
                    <Input
                      type="email"
                      placeholder="e.g - hotelinitiative@gmail.com"
                    />
                  </FormController>

                  <FormController>
                    <Label>Phone Number</Label>
                    <Input type="text" placeholder="e.g - +2349012345678" />
                  </FormController>

                  <FormController>
                    <Label>Office Address</Label>
                    <Input
                      type="text"
                      placeholder="e.g - No. 32, Lagere, Ile-ife"
                    />
                  </FormController>

                  <FormController>
                    <Label>Password</Label>
                    <Input type="password" placeholder="***************" />
                  </FormController>
                </FormGroup>

                <ButtonContainer>
                  <Button text="Register" main="true" />
                </ButtonContainer>
              </Form>
            </RightContainer>
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default Signup;
