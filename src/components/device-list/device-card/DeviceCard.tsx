import { Card, Image } from "antd";
import { Device } from "../Device";
import styled from "styled-components";
import { DataItem } from "./DataItem";
import { EnergyLabel } from "./EnergyLabel";
import { Price } from "./Price";
import { CardButton } from "./CardButton";

interface Props {
  device: Device;
}

export const DeviceCard = ({ device }: Props): React.JSX.Element => {
  const dimensions = `${device.dimensions.depth} x ${device.dimensions.width} x ${device.dimensions.height}`;
  const features = `${device.features.join(", ")}`;
  const date = `${device.priceValidFrom} - ${device.priceValidTo}`;

  return (
    <StyledCard>
      <Image src={`src/assets/${device.imgUrl}`} alt={device.name} />
      <StyledTitle>{device.name}</StyledTitle>
      <DataItem label="Pojemność (kg):" value={device.capacity} />
      <DataItem label="Wymiary (GxSxW):" value={dimensions} />
      <DataItem label="Funkcje:" value={features} />
      <DataItem
        label="Klasa energetyczna"
        value={<EnergyLabel rating={device.energyClass} />}
        $margintop="10px"
        $marginbottom="10px"
        $alignrow="center"
      />
      <DataItem label="Cena obowiązuje:" value={date} $color="#767676" />
      <Price price={device.price} />
      <CardButton />
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 338px;
  background-color: #fff;
  border-radius: 20px;
`;

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #000;
  padding-bottom: 25px;
`;
