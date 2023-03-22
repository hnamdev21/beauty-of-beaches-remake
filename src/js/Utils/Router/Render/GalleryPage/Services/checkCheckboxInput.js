import { getBeaches } from "../../../../../Modules/GetData.js";

const subData = [];
getBeaches().then((data) => data.forEach((beach) => subData.push(beach)));

const checkCheckboxInput = (value, opt) => {
  const filtered = [];
  switch (opt) {
    case "continents":
      subData.forEach((beach) => {
        if (beach.continents === value) {
          filtered.push(beach);
        }
      });
      break;

    case "zone":
      subData.forEach((beach) => {
        if (beach.zone === value) {
          filtered.push(beach);
        }
      });
      break;

    default:
      break;
  }

  return filtered;
};

export default checkCheckboxInput;
