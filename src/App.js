import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])

    const hook = () => {
        personService
            .getAll()
            .then(init => {
                setPersons(init)
            })
    }

    useEffect(hook, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} setPersons={setPersons} />
            <h2>Add a new Person</h2>
            <PersonForm persons={persons} setPersons={setPersons} />
            <h2>Numbers</h2>
            <Persons persons={persons} setPersons={setPersons} />
        </div>
    );
}

export default App