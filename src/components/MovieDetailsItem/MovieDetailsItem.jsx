export const MovieDetailsItem = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  console.log(movieDetails);
  console.log(genres);
  console.log(poster_path);
  const BASE_URL = 'http://image.tmdb.org/t/p/w500/';
  return (
    <div>
      <img src={BASE_URL + poster_path} alt={title} />
      <h2>{title}</h2>
      <p>Use Score: {Number(vote_average) * 10} %</p>
      <p>Overview</p>
      <p>{overview}</p>
      <p>Genres</p>
      <ul>
        {/* {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))} */}
      </ul>
    </div>
  );
};
