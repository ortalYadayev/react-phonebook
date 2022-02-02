import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import instanceAxios from "./axios/axios";

const App = () => {
    const [persons, setPersons] = useState([])

    const hook = () => {
        instanceAxios
            .get('/persons')
            .then(response => {
                setPersons(response.data)
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
            <Persons persons={persons} />
        </div>
    );
}

export default App