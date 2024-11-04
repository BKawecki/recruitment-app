import styled from "styled-components";
import { Device } from "./Device";

interface Props {
  devices: Device[];
}

export const SearchResults = ({ devices }: Props): React.JSX.Element => {
  return (
    <StyledContainer>
      <p>Liczba wyników: {devices.length}</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 1046px;
  margin: 0 auto;
  padding-left: 16px;
`;
