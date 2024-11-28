const API_KEY = 'dc7c6e9c'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const data = await response.json()
    const movies = data.Search
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }))
  } catch (error) {
    throw new Error(`Error searching movies: ${error}`)
  }
}

