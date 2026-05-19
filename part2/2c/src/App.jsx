import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import List from './components/List'
import Filter from './components/Filter'
import { useEffect } from 'react'
import PersonsService from './services/PersonsServices'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    PersonsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
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
    PersonsService
      .create(person)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })


  }

  const deletePerson = (id) => {
    PersonsService.remove(id)
      .then(() => {
        setPersons(prev =>
          prev.filter(p => p.id !== id)
        )
      })
  }

  const updatePerson = (id, updatedPersonMod) => {
    PersonsService
      .update(id, updatedPersonMod)
      .then(returnedPerson => {
        setPersons(
          persons.map(person =>
            person.id !== id
              ? person
              : returnedPerson
          )
        )
      })
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
        updatePerson={updatePerson}
        persons={persons} />

      <List
        persons={personsToShow}
        deletePerson={deletePerson}
      />

    </div>
  )
}

export default App