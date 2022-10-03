import styled from 'styled-components';
import RenivtedColors from "../../../config/colors";

export const Container = styled.main`
    height: 100vh;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    width: 60vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 150px;

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        width: 100vw;
        padding-top: 0px;
    }

`;

export const BgImage = styled.img`
    width: 400px;

    @media only screen and (max-width: 600px) {
        width: 100%
    }

`;

export const LeftSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media only screen and (max-width: 600px) {
        margin-left: 20px;
        margin-top: 10px;
    }
`;

export const EventWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 50px;
    height: 100px;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 600px) {
        margin-left: 0px;
        margin-top: 10px;
    }
`;

export const EventRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const EventRowMiddleSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px
`;

export const IconBorder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 1px;

    /* width: 56px;
    height: 56px; */

    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

export const Header = styled.h1`
    text-align: right;
    color: ${RenivtedColors.primaryTextColor};
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 55px;
    margin: 0px;

    @media only screen and (max-width: 600px) {
        font-size: 38px;

    }
`;

export const SubHeader = styled.p`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #828282;
    margin-top: 5px;
`;

