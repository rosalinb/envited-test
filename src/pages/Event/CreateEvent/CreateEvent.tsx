import * as Styled from "./styled";
import landing_page from "../../assets/landing_page.svg";
import { GiPartyPopper } from "react-icons/gi";
import LinkButton from "../../../components/LinkButton";
import Input from "../../../components/Input";

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <form>
          <Styled.Header>Create Event</Styled.Header>

          <Input labelName="Event Name" placeholder="Enter event name"></Input>
          <Input labelName="Host Name" placeholder="Enter host name"></Input>
          <Input
            labelName="Start Time"
            placeholder="Enter event start time"
            type="datetime-local"
          ></Input>
          <Input
            labelName="End Time"
            placeholder="Enter event end time"
            type="datetime-local"
          ></Input>
          <Input labelName="Location" placeholder="Enter location"></Input>

          <span style={{ marginRight: 10 }}>Upload photo</span>

          <input type="file"></input>
          <div style={{ marginTop: 50 }}>
            <LinkButton to="/event" value="Next"></LinkButton>
          </div>
        </form>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
