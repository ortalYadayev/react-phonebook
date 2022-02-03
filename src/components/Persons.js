import React from 'react'
import Button from "./Button";
import personsService from '../services/persons'

const Persons = ({ persons, setPersons }) => {
    return (
        <div>
            {persons.map((person, index) =>
                <div key={index}>
                    <p>{person.name} {person.number}</p>
                    <Button text="delete" handleClick={deletePerson(person)} />
                </div>
            )}
        </div>
    )

    function deletePerson(deletedPerson) {
         return () => {
             if (!window.confirm(`Delete ${deletedPerson.name}?`)) {
                 return;
             }

            personsService
                .remove(deletedPerson.id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== deletedPerson.id))
                })
        }
    }
}

export default Persons