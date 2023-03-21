const getBeaches = async () => {
  let response = await fetch("res/Data/beaches.json");
  let data = await response.json();

  return data;
};

const getFestivals = async () => {
  let response = await fetch("res/Data/festivals.json");
  let data = await response.json();

  return data;
};

const getFeedback = async () => {
  let response = await fetch("res/Data/feedback.json");
  let data = await response.json();

  return data;
};

export { getBeaches, getFestivals, getFeedback };
