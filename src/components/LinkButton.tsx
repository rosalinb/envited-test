import styled from "styled-components";
import RenivtedColors from "../config/colors";
import { Link } from "react-router-dom";

interface Props {
  value: string;
  icon?: any;
  to: string;
  width?: string;
}

export default function LinkButton(props: Props) {
  return (
    <StyledButton to={props.to} style={{ width: props.width }}>
      {props.icon}
      {props.value}
    </StyledButton>
  );
}

export const StyledButton = styled(Link)`
  height: 55px;
  background: linear-gradient(
    90deg,
    ${RenivtedColors.gradientFirstStop} 24.2%,
    ${RenivtedColors.gradientSecondStop} 120.46%
  );
  border-radius: 10px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
