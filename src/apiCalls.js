const fetchData = (id="") => {
  const fetched = fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.status === 404) {
        throw new Error("404: Not Found")
      } else if (response.status === 500) {
        throw new Error("500: Server is having issues")
      }
      return response.json()
    })
    return fetched
}

export { fetchData }
