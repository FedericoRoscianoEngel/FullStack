import { useState, useEffect } from 'react'
import List from './components/List'
import Filter from './components/Filter'
import CountriesService from './services/CountriesServices'
import Notification from './components/Notification'
import Detail from './components/Detail'
import Weather from './components/Wheather'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Countries app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}

const App = () => {

  const [countries, setCountries] = useState(null)
  const [message, setMessage] = useState(null)
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    CountriesService.getAll().then(initialCountries => {
      setCountries(initialCountries)
      console.log('initialCountries', initialCountries)
    })
  }, [])

  useEffect(() => {
    setSelectedCountry(null)
  }, [filter])

  // no renderizar nada si notes aún es null
  if (!countries) {
    return null
  }

  const countriesToShow =
    filter === ''
      ? countries
      : countries.filter(country =>
        country.name.common
          .toLowerCase()
          .includes(filter.toLowerCase())
      )


  const showCountry = (cca3) => {
    const country = countries.find(c => c.cca3 === cca3)
    if (country) {
      setMessage({
        text: `Country ${country.name.common} selected`,
        type: 'success'
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
    if (country) {
      setSelectedCountry(country)
    }
  }

  return (
    <div>
      <h2>Countries</h2>
      <Notification message={message} />
      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      {countriesToShow.length > 10 && filter ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <List
          countries={countriesToShow}
          showCountry={showCountry}
        />
      )}

      {countriesToShow.length === 1 && (
        <>
          <Detail country={countriesToShow[0]} />
          <Weather country={countriesToShow[0]} />
        </>
      )}

      {selectedCountry && countriesToShow.length > 1 && (
        <>
          <Detail country={selectedCountry} />
          <Weather country={selectedCountry} />
        </>
      )}

      <Footer />

    </div>
  )
}



export default App