function useWebSiteFont(currentSite = "eps") {
  const allFonts = {
    eps: "@/assets/sass/_fontA.sass",
    evse: "@/assets/sass/_fontB.sass",
  };
  return allFonts[currentSite];
}

export default useWebSiteFont;
