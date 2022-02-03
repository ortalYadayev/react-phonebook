import personsService from "../services/persons";

const Button = ({ text, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;
