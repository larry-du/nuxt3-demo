const graphQl = $fetch.create({
  baseURL: "https://msvc.msi.com/graphq",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "da2-3d2ezly5xngofpbmuz6wqvjzf4",
  },
});

// graphQl.interceptors.request.use(
//   (config) => {
//     return {
//       ...config,
//       headers: {
//         ...config.headers,
//         Authorization: token,
//       },
//     };
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

async function graphQlPost(url, updateData, params = {}) {
  try {
    const res = await graphQl(
      url,
      { method: "POST", body: { ...updateData } },
      { ...params },
    );
    // const res = await graphQl.post(url, { ...updateData }, { ...params });
    if (res.data?.errors) {
      const [error] = res.data.errors;
      throw new Error(error.message);
    } else {
      return res;
    }
  } catch (error) {
    throw new Error(error);
  }
}

export { graphQlPost };
