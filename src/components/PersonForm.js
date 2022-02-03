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

        const nameExist = props.persons.some(person => person.name === newName)

        if(nameExist) {
            alert(`${newName} is already added to phonebook`)
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