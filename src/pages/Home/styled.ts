import styled from 'styled-components';
import RenivtedColors from "../../config/colors";

export const Container = styled.main`
    background-color: ${RenivtedColors.landingPageBackground};
    height: 100vh;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    width: 70vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Header = styled.h1`
    text-align: right;
    color: ${RenivtedColors.primaryTextColor};
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
    margin: 0px;
`;

export const HeaderText = styled.span`
    background: linear-gradient(90deg, ${RenivtedColors.gradientFirstStop} 24.2%, ${RenivtedColors.gradientSecondStop} 120.46%);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;


export const SubHeader = styled.p`
    text-align: right;
    color: ${RenivtedColors.secondaryTextColor};
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 28px;
`;

