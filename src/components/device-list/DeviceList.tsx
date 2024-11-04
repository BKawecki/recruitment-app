import styled from "styled-components";
import { Device } from "./Device";
import { DeviceCard } from "./device-card/DeviceCard";
import { SearchResults } from "./SearchResults";

interface Props {
  devices: Device[];
}

export const DeviceList = ({ devices }: Props): React.JSX.Element => {
  return (
    <>
      <SearchResults devices={devices} />
      <StyledDeviceList>
        {devices.map((device) => (
          <DeviceCard device={device} key={device.id} />
        ))}
      </StyledDeviceList>
    </>
  );
};

const StyledDeviceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1046px;
  margin: 0 auto;
`;
