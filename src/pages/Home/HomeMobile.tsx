import * as Styled from "./MobileStylee";
import landing_page from "../../assets/landing_page.svg";
import { GiPartyPopper } from "react-icons/gi";
import LinkButton from "../../components/LinkButton";
import Home from "./Home";

const isMobile = window.innerWidth <= 600;

export default function MobileHome() {
  if (!isMobile) {
    return <Home></Home>;
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Header>
          Imagine if <br></br> <Styled.HeaderText>Snapchat</Styled.HeaderText>{" "}
          <br></br> had events.
        </Styled.Header>

        <Styled.SubHeader>
          Easily host and share events with your friends across any social
          media.
        </Styled.SubHeader>

        <section>
          <img
            src={landing_page}
            alt="Landing page"
            // style={{ transform: "scale(0.7)" }}
            style={{ width: 250, marginBottom: 30 }}
          ></img>
        </section>

        <Styled.RightSection>
          {/* <Styled.Header>
            Imagine if <br></br> <Styled.HeaderText>Snapchat</Styled.HeaderText>{" "}
            <br></br> had events.
          </Styled.Header>

          <Styled.SubHeader>
            Easily host and share events with your friends <br></br> across any
            social media.
          </Styled.SubHeader> */}

          <LinkButton
            to="/create"
            icon={<GiPartyPopper></GiPartyPopper>}
            value="Create my event"
            width="320px"
          ></LinkButton>
        </Styled.RightSection>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
