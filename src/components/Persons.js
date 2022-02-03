import React from 'react'
import Button from "./Button";
import personsService from '../services/persons'

const Persons = ({ persons, setPersons }) => {
    return (
        <div>
            {persons.map((person, index) =>
                <div key={index}>
                    <p>{person.name} {person.number}</p>
                    <Button text="delete" handleClick={deletePerson(person.id)} />
                </div>
            )}
        </div>
    )

    function deletePerson(id) {
         return () => {
             if (!window.confirm("Do you really want to leave?")) {
                 return;
             }

            personsService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }
}

export default Persons