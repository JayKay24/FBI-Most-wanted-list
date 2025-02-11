const ETL_Config = {
  MAX_ITEMS_TO_STORE: 100,
  MAX_FETCHES_TO_FBI_API: 2, // should be 5 if we want to store 100 profiles at most, default pagination is 20 items
  DB_HAS_ENOUGH_PROFILES: true
};

module.exports = {
  ETL_Config
};
