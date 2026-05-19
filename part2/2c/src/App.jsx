import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import List from './components/List'
import Filter from './components/Filter'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  const [filter, setFilter] = useState('')

  const personsToShow =
    filter === ''
      ? persons
      : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )

  const addPerson = (person) => {
    setPersons(persons.concat(person))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        setFilter={setFilter}
      />

      <h2>Numbers</h2>

      <PersonalForm
        addPerson={addPerson}
        persons={persons} />

      <List persons={personsToShow} />

    </div>
  )
}

export default App