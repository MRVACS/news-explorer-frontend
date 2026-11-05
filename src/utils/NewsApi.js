import { NEWS_API_URL, PAGE_SIZE, DAYS_RANGE } from "./Constants";

class NewsApi {
  constructor({ url, apiKey, from, to, pageSize }) {
    this.apiKey = apiKey;
    this.url = url;
    this.from = from;
    this.to = to;
    this.pageSize = pageSize;
  }

  async getNews(keyword) {
    const params = new URLSearchParams({
      q: keyword,
      from: this.from,
      to: this.to,
      sortBy: "popularity",
      pageSize: this.pageSize,
      apiKey: this.apiKey,
    });
    /* const response = await fetch(
      `${this.url}everything?q=${keyword}&from=${this.from}&to=${this.to}&sortBy=popularity&pageSize=${this.pageSize}&apiKey=${this.apiKey}`
    ); */
    const response = await fetch(`${this.url}everything?${params}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();
    return data.articles;
  }
}

const toDate = new Date();
const fromDate = new Date();
fromDate.setDate(toDate.getDate() - DAYS_RANGE);

const newsApi = new NewsApi({
  url: NEWS_API_URL,
  apiKey: import.meta.env.VITE_NEWS_API_KEY,
  from: fromDate.toISOString().split("T")[0],
  to: toDate.toISOString().split("T")[0],
  pageSize: PAGE_SIZE,
});

export default newsApi;
