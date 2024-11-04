import styled from "styled-components";
import { Search } from "./Search";
import { FilterBar } from "./FilterBar";
import { DeviceList } from "./device-list/DeviceList";
import { useEffect, useState } from "react";
import devicesMock from "../assets/mocks/devicesMock";
import { filterAndSortDevices } from "./helpers/filterAndSortHelper";
import { CaretDownOutlined } from "@ant-design/icons";

export const MainComponent = (): React.JSX.Element => {
  const [filteredDevices, setFilteredDevices] = useState(devicesMock);
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState({
    function: "",
    energyClass: "",
    capacity: "",
    sortOption: "",
  });

  useEffect(() => {
    const devices = filterAndSortDevices(search, devicesMock, filters);
    setFilteredDevices(devices);
  }, [search, filters]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <StyledTitle>Wybierz urządzenie</StyledTitle>
      <StyledContainer>
        <Search onSearch={handleSearch} placeholder="Search..." />
        <FilterBar setFilterValues={(value) => setFilters(value)} />
        <DeviceList devices={filteredDevices} />
        <StyledAnchor href="#">
          Pokaż więcej <StyledIcon />
        </StyledAnchor>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  line-height: 56px;
  padding-bottom: 10px;
  width: 100%;
  background-color: #ffffff;
`;

const StyledAnchor = styled.a`
  color: #007aff;
  text-decoration: none;
  margin: 20px auto;
  display: flex;
  gap: 5px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
`;

const StyledIcon = styled(CaretDownOutlined)`
  color: #007aff;
  font-size: 10px;
`;
