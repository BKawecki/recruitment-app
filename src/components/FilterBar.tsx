import { useState } from "react";
import functionsMock from "../assets/mocks/functionsMock";
import { SortDropdown } from "./SortDropdown";
import energyClassMock from "../assets/mocks/energyClassMock";
import capacityMock from "../assets/mocks/capacityMock";
import sortOptionsMock from "../assets/mocks/sortOptionsMock";
import styled from "styled-components";

interface Props {
  setFilterValues: (values: {
    function: string;
    energyClass: string;
    capacity: string;
    sortOption: string;
  }) => void;
}

export const FilterBar = ({ setFilterValues }: Props): React.JSX.Element => {
  const [filterValues, setFilterValuesState] = useState({
    function: "",
    energyClass: "",
    capacity: "",
    sortOption: "",
  });

  const handleFilterChange = (value: string, filterType: string) => {
    const newFilterValues = { ...filterValues, [filterType]: value };
    setFilterValuesState(newFilterValues);
    setFilterValues(newFilterValues);
  };

  return (
    <StyledSort>
      <SortDropdown
        label="Sortuj po:"
        sortOptions={sortOptionsMock}
        setSortOption={(value) => handleFilterChange(value, "sortOption")}
      />
      <SortDropdown
        label="Funkcje:"
        sortOptions={functionsMock}
        setSortOption={(value) => handleFilterChange(value, "function")}
      />
      <SortDropdown
        label="Klasa energetyczna:"
        sortOptions={energyClassMock}
        setSortOption={(value) => handleFilterChange(value, "energyClass")}
      />
      <SortDropdown
        label="Pojemność:"
        sortOptions={capacityMock}
        setSortOption={(value) => handleFilterChange(value, "capacity")}
      />
    </StyledSort>
  );
};

const StyledSort = styled.div`
  width: 1032px;
  display: flex;
  gap: 18px;
  margin: 0 auto;
`;
