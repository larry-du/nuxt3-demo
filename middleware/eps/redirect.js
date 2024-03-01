export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter();
  const isAllowCountry = useAllowCountry(
    useEPSGlobalStore().getEpsAllowCountry,
    to.params.country,
  );
  if (!isAllowCountry) {
    abortNavigation();
    router.push({ name: "slug" });
  }
});
