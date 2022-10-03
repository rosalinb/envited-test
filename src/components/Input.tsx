import RenivtedColors from "../config/colors";

interface Props {
  labelName: string;
  placeholder?: string;
  type?: string;
}

export default function Input(props: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "350px",
        marginBottom: 15,
      }}
    >
      <label style={{ fontSize: 14, color: RenivtedColors.primaryTextColor }}>
        {props.labelName}
      </label>
      <input
        style={{
          borderRadius: 7,
          outline: "none",
          border: `1px solid ${RenivtedColors.primaryTextColor}`,
          padding: "7px 10px",
        }}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
