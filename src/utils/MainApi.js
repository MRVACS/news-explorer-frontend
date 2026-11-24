import { USERS_API_URL } from './Constants';

class UsersApi {
  constructor({ url, header }) {
    this._url = url;
    this._header = header;
  }
  setToken(token) {
    this._header['Authorization'] = 'Bearer ' + token;
  }
  async getArticles() {
    return fetch(`${this._url}/articles/`, { headers: this._header })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(`Error: ${err.status}`);
      });
  }
  async getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._header,
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return Promise.reject(`Error: ${err.status}`);
      });
  }
  deleteArticle(targetArticleId) {
    return fetch(`${this._url}/articles/${targetArticleId}`, {
      method: 'DELETE',
      headers: this._header,
    });
  }

  saveArticle(article) {
    return fetch(`${this._url}/articles/`, {
      method: 'POST',
      headers: this._header,
      body: JSON.stringify({
        title: article.title,
        url: article.url,
      }),
    })
      .then((res) => {
        return res.json().then((data) => ({
          status: res.status,
          data,
        }));
      })
      .then(({ status, data }) => {
        if (status >= 400) {
          throw new Error(JSON.stringify(data));
        }

        return data;
      });
  }
}

const usersApi = new UsersApi({
  url: USERS_API_URL,
  header: {
    'Content-Type': 'application/json',
  },
});

export default usersApi;
