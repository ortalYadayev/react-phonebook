import React, {useState} from 'react'
import personsService from '../services/persons'

const Filter = (props) => {
    const [newName, setNewName] = useState('')
    const [newPhone, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newPhone,
        }

        const personExist = props.persons.filter(person => person.name === newName)

        if(personExist.length !== 0) {
            if (!window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
                setNewName('')
                setNewNumber('')
                return;
            }

            personsService
                .update(personExist[0].id, personObject)
                .then(returnedPerson => {
                    props.setPersons(props.persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        } else {
            personsService
                .create(personObject)
                .then(returnedPerson => {
                    props.setPersons(() => props.persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    const handlePersonChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input value={newName} onChange={handlePersonChange}/>
                </div>
                <div>
                    number:
                    <input value={newPhone} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Filter