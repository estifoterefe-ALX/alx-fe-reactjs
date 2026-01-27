const createSelectors = (store) => {
  store.use = {};

  for (const key of Object.keys(store.getState())) {
    store.use[key] = () => store((state) => state[key]);
  }

  return store;
};

export default createSelectors;
