import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import peopleService from './services/people'
import People from "./components/People";

const App = () => {
    const [people, setPeople] = useState([])

    const hook = () => {
        peopleService
            .getAll()
            .then(init => {
                setPeople(init)
            })
    }

    useEffect(hook, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter people={people} setPeople={setPeople} />
            <h2>Add a new Person</h2>
            <PersonForm people={people} setPeople={setPeople} />
            <h2>Numbers</h2>
            <People people={people} setPeople={setPeople} />
        </div>
    );
}

export default App