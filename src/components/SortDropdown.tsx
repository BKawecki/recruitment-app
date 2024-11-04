import { Select } from "antd";
import styled from "styled-components";

type SelectOptions = {
  label: string;
  value: string;
};

interface Props {
  sortOptions: SelectOptions[];
  label?: string;
  setSortOption: (value: string) => void;
}

export const SortDropdown = ({
  sortOptions,
  label,
  setSortOption,
}: Props): React.JSX.Element => {
  const handleSortChange = (value: string) => {
    setSortOption(value || "");
  };

  return (
    <StyledSortDropdown>
      <StyledLabel>{label}</StyledLabel>
      <Select
        allowClear
        onChange={handleSortChange}
        options={sortOptions}
        placeholder="Pokaż wszystkie"
      />
    </StyledSortDropdown>
  );
};

// const StyledSelect = styled(Select)`
//   width: 100%;
// `;

const StyledSortDropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  flex: 1;
  max-width: 249px;
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
