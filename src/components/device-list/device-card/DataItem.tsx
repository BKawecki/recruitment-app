import { Row } from "antd";
import styled from "styled-components";
interface Props {
  label: string;
  value: number | string | React.ReactNode;
  $margintop?: string;
  $marginbottom?: string;
  $alignrow?: string;
  $color?: string;
}
interface StyledRowProps {
  $margintop?: string;
  $marginbottom?: string;
}

interface LabelProps {
  $alignrow?: string;
}

interface ValueProps {
  $color?: string;
}

export const DataItem = ({
  label,
  value,
  $margintop,
  $marginbottom,
  $alignrow,
  $color,
}: Props): React.JSX.Element => {
  return (
    <StyledRow $margintop={$margintop} $marginbottom={$marginbottom}>
      <StyledLabel $alignrow={$alignrow}>{label}</StyledLabel>
      <StyledValue $color={$color}>{value}</StyledValue>
    </StyledRow>
  );
};
const StyledLabel = styled.div<LabelProps>`
  color: #767676;
  font-size: 12px;
  line-height: 18px;
  padding-right: 5px;
  align-self: ${(props) => props.$alignrow || "flex-start"};
`;
const StyledValue = styled.div<ValueProps>`
  font-size: 12px;
  line-height: 18px;
  color: #000;
  font-weight: 700;
  overflow-wrap: break-word;
  color: ${(props) => props.color || "#000"};
`;
const StyledRow = styled(Row)<StyledRowProps>`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin-top: ${(props) => props.$margintop || "0"};
  margin-bottom: ${(props) => props.$marginbottom || "0"};
`;
