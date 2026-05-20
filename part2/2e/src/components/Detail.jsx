const Detail = ({ country }) => {
  return <li>
    <h3>{country.name.common}</h3>

    <ul>
      <li>Capital: {country.capital}</li>
      <li>Population: {country.population}</li>
      <li>Area: {country.area} km²</li>
    </ul>

    <h3>Languages</h3>

    <ul>
      {Object.entries(country.languages).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>

    <br />

    <ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </ul>

  </li >
}

export default Detail
