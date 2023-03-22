import { getBeaches } from "../../../../../Modules/GetData.js";

const subData = [];
getBeaches().then((data) => data.forEach((beach) => subData.push(beach)));

const checkSearchInput = (value) => {
  const filtered = [];
  if (value !== "") {
    subData.forEach((beach) => {
      if (beach.name.toLowerCase().includes(value)) {
        filtered.push(beach);
      }
    });
  }

  return filtered;
};

export default checkSearchInput;
