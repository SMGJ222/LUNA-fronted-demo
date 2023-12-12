const getURL = (name) => {
  return new URL(`/src/assets/${name}`, import.meta.url).href;
};

export default getURL;