class NewsApi {
  constructor({ url, apiKey, from, to, pageSize }) {
    this.apiKey = apiKey;
    this.url = url;
    this.from = from;
    this.to = to;
    this.pageSize = pageSize;
  }

  async getNews(keyword) {
    const response = await fetch(
      `${this.url}everything?q=${keyword}&from=${this.from}&to=${this.to}&sortBy=popularity&pageSize=${this.pageSize}&apiKey=${this.apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();
    /*  console.log(data);
    console.log(data.articles); */
    return data.articles;
  }
}

const toDate = new Date();
const fromDate = new Date();
fromDate.setDate(toDate.getDate() - 7);

const newsApi = new NewsApi({
  url: "https://newsapi.org/v2/",
  apiKey: import.meta.env.VITE_NEWS_API_KEY,
  from: fromDate.toISOString().split("T")[0],
  to: toDate.toISOString().split("T")[0],
  pageSize: 100,
});

export default newsApi;
