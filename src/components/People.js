import React from 'react'
import Button from "./Button";
import peopleService from '../services/people'

const People = ({ people, setPeople }) => {
    return (
        <div>
            {people.map((person, index) =>
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

            peopleService
                .remove(deletedPerson.id)
                .then(() => {
                    setPeople(people.filter(person => person.id !== deletedPerson.id))
                })
        }
    }
}

export default People