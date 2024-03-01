export const useAllowCountry = (allowCountry = [], currentCountry) => {
  return allowCountry.includes(currentCountry);
};
