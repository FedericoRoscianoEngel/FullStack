import { useState } from 'react'
const PersonalForm = ({ addPerson, persons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const addName = (event) => {
        event.preventDefault()

        const existe = persons.some(person => person.name === newName);

        if (existe) {

            alert(`${newName} ya está en la lista`);
            return;

        } else {

            event.preventDefault()
            const personObject = {
                name: newName,
                number: newNumber,
                important: Math.random() < 0.5,
                id: persons.length + 1,
            }

            addPerson(personObject)
            setNewName('')
            setNewNumber('')

        }

    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return <form onSubmit={addName}>
        <div>
            name:
            <input
                value={newName}
                onChange={handleNameChange}
            />
        </div>
        <div>
            Telephone:
            <input
                value={newNumber}
                onChange={handleNumberChange}
            />
        </div>
        <div>
            <button type="submit">add</button>

            <div>debug: {newName}</div>
        </div>
    </form>


}

export default PersonalForm
