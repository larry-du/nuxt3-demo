const graphQl = $fetch.create({
  baseURL: "https://msvc.msi.com/graphq",
  headers: {
    Accept: "application/json",
    "x-api-key": "da2-3d2ezly5xngofpbmuz6wqvjzf4",
  },
});

async function graphQlPost(url, updateData) {
  try {
    const res = await graphQl(url, { method: "POST", body: { ...updateData } });
    if (!res.data.errors) {
      return res;
    } else {
      const [error] = res.data.errors;
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error);
  }
}

export { graphQlPost };
