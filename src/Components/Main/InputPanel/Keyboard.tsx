import { useContext } from "react"
import { DictionaryContext } from "../../../context/dictionaryContext"
import KeyButton from "./KeyButton";
import KeyBoardAll from "./KeyBoardAll";


function Keyboard(){

    const {dictionaryExample} = useContext(DictionaryContext);
    
    
    return (
        <div className="Keyboard">
            <KeyBoardAll/>
            {dictionaryExample.map((element:string) => 
                <KeyButton value={element} key={element}/>
            )}
        </div>
    )
}

export default Keyboard