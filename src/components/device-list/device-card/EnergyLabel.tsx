import styled from "styled-components";

interface Props {
  rating: string;
}

export const EnergyLabel = ({ rating }: Props): React.JSX.Element => {
  return <LabelContainer>{rating}</LabelContainer>;
};

const LabelContainer = styled.div`
  display: inline-block;
  padding: 5px 8px;
  background-color: #009949;
  color: white;
  font-weight: bold;
  font-size: 13px;
  width: 50px;
  border-radius: 4px 0 0 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 0;
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    border-left: 10px solid #009949;
  }
`;
