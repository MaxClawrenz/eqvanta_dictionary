import { Link } from "react-router-dom"

interface IWord {
    name: string,
    id: string
}

function Word({name, id}:IWord){
    return (
        <Link className="wordLink" to={`/_wt/word/${id}`}>
            <div className="Word">{name}</div>
        </Link>
    )
}

export default Word