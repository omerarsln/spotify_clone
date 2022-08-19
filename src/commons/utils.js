export const request = async (url) => {
  try {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (e) {
    console.log("FETCH ERROR: " + e);
  }
};
