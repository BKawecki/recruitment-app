import { Input } from "antd";
import styled from "styled-components";

interface Props {
  onSearch: (value: string) => void;
  placeholder: string;
}

export const Search = ({ onSearch, placeholder }: Props): React.JSX.Element => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledInput placeholder={placeholder} onChange={handleSearch} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledInput = styled(Input)`
  width: 249px;
  height: 36px;
  padding: 8px 12px;
  text-align: center;
  margin-top: 16px;
  border-radius: 0px;
`;
