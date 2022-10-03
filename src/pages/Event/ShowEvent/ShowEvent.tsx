import * as Styled from "./styled";
import BirthDayCake from "../../../assets/birthday_cake.png";
import { FaCalendarAlt, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import RenivtedColors from "../../../config/colors";

export default function ShowEvent() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LeftSection>
          <Styled.Header>Birthday Bash</Styled.Header>

          <Styled.SubHeader>
            Hosted by <b>Elysia</b>
          </Styled.SubHeader>

          <Styled.EventWrapper>
            <Styled.EventRow>
              <Styled.EventRowMiddleSection>
                <Styled.IconBorder>
                  <FaCalendarAlt color="#8456EC"></FaCalendarAlt>
                </Styled.IconBorder>
                <div>
                  <div>18 August 6:00PM</div>
                  <div>to 19 August 1:00PM UTC +10</div>
                </div>
              </Styled.EventRowMiddleSection>
              <FaChevronRight></FaChevronRight>
            </Styled.EventRow>

            <Styled.EventRow>
              <Styled.EventRowMiddleSection>
                <Styled.IconBorder>
                  <FaMapMarkerAlt color="#8456EC"></FaMapMarkerAlt>
                </Styled.IconBorder>

                <div>
                  <div>Street name</div>
                  <div>Suburb, State, Postcode</div>
                </div>
              </Styled.EventRowMiddleSection>
              <FaChevronRight></FaChevronRight>
            </Styled.EventRow>
          </Styled.EventWrapper>
        </Styled.LeftSection>

        <section>
          <Styled.BgImage
            src={BirthDayCake}
            alt="Landing page"
            // style={{ width: 400 }}
          ></Styled.BgImage>
        </section>
      </Styled.Wrapper>
    </Styled.Container>
  );
}
