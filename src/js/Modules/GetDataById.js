const getBeachesById = async (queryId) => {
  let response = await fetch("res/Data/beaches.json");
  let data = await response.json();

  const beachDetail = data.find((beach) => {
    if (beach.id == queryId) {
      return beach;
    }
  });

  return beachDetail;
};

const getFestivalsById = async (queryId) => {
  let response = await fetch("res/Data/festivals.json");
  let data = await response.json();

  const festivalDetail = data.find((festival) => {
    if (festival.id == queryId) {
      return festival;
    }
  });

  return festivalDetail;
};

export { getBeachesById, getFestivalsById };
