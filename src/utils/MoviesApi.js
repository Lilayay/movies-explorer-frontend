import { BASE_URL } from './constants';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  async _statusCheck(res) {
    const result = await res.json();
    return res.ok ? result : Promise.reject(res);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => this._statusCheck(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: BASE_URL,
});

export default moviesApi;