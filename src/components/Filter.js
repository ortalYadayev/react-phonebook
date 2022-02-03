import React, {useState} from 'react'

const Filter = (props) => {
    const [newSearch, setNewSearch] = useState('')

    const searchPerson = (event) => {
        event.preventDefault()
        const peopleToShow = newSearch.length === 0
            ? props.people
            : props.people.filter(person => person.name === newSearch)

        props.setPeople(() => peopleToShow)
        setNewSearch('')
    }

    const handleSearch = (event) => {
        setNewSearch(event.target.value)
    }

    return (
        <div>
            <form onSubmit={searchPerson}>
                filter shown with
                <input type="text" value={newSearch} onChange={handleSearch} />
                <div>
                    <button type="submit">search</button>
                </div>
            </form>
        </div>
    )
}

export default Filter