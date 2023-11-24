interface IWordTitle {
    name?: string
}


function WordTitle({name}:IWordTitle){
    

    return (
        <div className="WordTitle">
            {name}
        </div>
    )
}

export default WordTitle