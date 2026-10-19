class NewsApi {
  constructor({ url, q, apiKey, from, to, pageSize }) {
    this.apiKey = apiKey;
    this.url = url;
    this.q = q;
    this.from = from;
    this.to = to;
    this.pageSize = pageSize;
  }

  async getNews(keyword) {
    const response = await fetch(
      `${this.url}/everything?q=${keyword}&from=${this.from}&to=${this.to}&sortBy=popularity&pageSize=${this.pageSize}&apiKey=${this.apiKey}`
    );
    const data = await response.json();
    /*  console.log(data);
    console.log(data.articles); */
    return data.articles;
  }
}

const newsApi = new NewsApi({
  url: "https://newsapi.org/v2/",
  apiKey: "4b7f9049ad724fa2bb750be971cff9f5",
  from: "2026-10-05",
  to: "2026-10-14",
  pageSize: 100,
});

export default newsApi;
