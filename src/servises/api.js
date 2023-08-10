import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all/day';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzhhYjBlYjNmYjE0YzA0ODc2YzI1YmIxNDI0M2NiZCIsInN1YiI6IjY0ZDE2MzYyNmQ0Yzk3MDBlYzU4YjNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkZrfHNayLG0He9kinamYKtKq9Py8-TCiR3q_k01mNs';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.params = {
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get();
  console.log(data.results);

  return data.results;
};
