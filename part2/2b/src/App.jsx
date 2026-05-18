import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import List from './components/List'
import Filter from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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