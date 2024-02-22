const epsMeta = `
query getMeta {
    evseNews(id: 10) {
      id
      title
    }
    evseNewsList(page: 10, pageSize: 10) {
      id
      title
    }
  }
`;
export default epsMeta;
