import styled from "styled-components";
import Button from "./Button";
import hero from "../assets/hero.png";
import { aboutResponsive, tablet, mobile } from "../responsive.js";

const HeroSection = styled.section`
  overflow-x: hidden;
`;
const Container = styled.div`
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
  height: 70vh;
  align-items: center;
  ${aboutResponsive({
    padding: "2rem 4rem",
  })};
  ${tablet({
    padding: "2rem",
  })};
`;
const Left = styled.div`
  width: 42%;
  ${aboutResponsive({
    position: "absolute",
    zIndex: 3,
  })};
  ${tablet({
    width: "61%",
  })}
`;
const Text = styled.h1`
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 153.5%;
  color: #3a3b7b;
  ${mobile({
    fontSize: "35px",
  })};
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  width: 630px;
  height: 100%;
  ${aboutResponsive({
    width: "100%",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Flex = styled.div`
  display: flex;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Left>
          <Text>Connecting you with the right accomodation in Ile-ife</Text>
          <Flex>
            <Button text="Go to Marketplace" />
            <Button text="Learn More" outline="true" responsive="true" />
          </Flex>
        </Left>
        <Right>
          <Image src={hero} alt="hero" />
        </Right>
      </Container>
    </HeroSection>
  );
};

export default Hero;