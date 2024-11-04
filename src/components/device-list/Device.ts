export interface Device {
  id: number;
  name: string;
  price: number;
  features: string[];
  energyClass: string;
  capacity: number;
  imgUrl: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  priceValidFrom: string;
  priceValidTo: string;
  popularity: number;
}
