import { Device } from "../device-list/Device";

interface Filters {
  function: string;
  energyClass: string;
  capacity: string;
  sortOption: string;
}

export const filterAndSortDevices = (
  search: string,
  devices: Device[],
  filters: Filters
): Device[] => {
  const filteredDevices = [...devices];
  return filteredDevices
    .filter((device) => {
      return (
        (!filters.function || device.features.includes(filters.function)) &&
        (!filters.energyClass || device.energyClass === filters.energyClass) &&
        (!filters.capacity || device.capacity === Number(filters.capacity)) &&
        (!search || device.name.toLowerCase().includes(search.toLowerCase()))
      );
    })
    .sort((a, b) => {
      if (filters.sortOption === "price") {
        return (a.price || 0) - (b.price || 0);
      } else if (filters.sortOption === "popularity") {
        return b.popularity - a.popularity;
      } else if (filters.sortOption === "capacity") {
        return a.capacity - b.capacity;
      }
      return 0;
    });
};
