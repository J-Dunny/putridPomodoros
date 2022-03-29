const fetchData = (id="") => {
  const fetched = fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    return fetched
}

export { fetchData }
