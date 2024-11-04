import { Button } from "antd";
import { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
  value: boolean;
}

export const CardButton = (): React.JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((selected) => !selected);
  };

  return (
    <StyledContainer>
      <StyledButton value={isSelected} onClick={handleClick}>
        {isSelected ? "WYBRANE" : "WYBIERZ"}
      </StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const StyledButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => (props.value ? "#1C1C1C" : "#1428a0")};
  color: #fff;
  width: 150px;
  height: 36px;
  border-radius: 24px;
  padding: 14px 40px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;
