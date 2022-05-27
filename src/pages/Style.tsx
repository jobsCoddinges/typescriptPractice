import styled from "styled-components";

interface BoxColor {
  color: string;
  borderColor: string;
}

interface StyleColor {
  color: string;
  text?: string;
}

interface checkCircle {
  color: string;
  borderColor?: string;
  text?: string;
}
const Box = styled.div<BoxColor>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
`;
const Circle = ({ color, borderColor, text }: checkCircle) => {
  return (
    <Box color={color} borderColor={borderColor ?? "black"}>
      {text}
    </Box>
  );
};
const Style = ({ color }: StyleColor) => {
  return (
    <div>
      <Circle color={color} borderColor="orange" text={"Hi"}></Circle>
      <Circle color="teal"></Circle>
    </div>
  );
};

export default Style;
