import Break from "./Break"
import Header from "./Header"
import InputPanel from "./InputPanel/InputPanel"
import Keyboard from "./InputPanel/Keyboard"
import ResultBody from "./ResultBody/ResultBody"

function MainPage(){
    return (
        <>
        <Header/>
        <Break/>
        <InputPanel/>
        <Keyboard/>
        <ResultBody/>
      </>
    )
}

export default MainPage