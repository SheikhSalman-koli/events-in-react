import { useState } from "react"

export default  function Counter(){

    const [gonona,setGonona] = useState(0)

    const handleAddition =()=>{
        const newCount = gonona + 5
        setGonona(newCount)
    }

 const counterStyle = {
    border: '2px solid green',
 }

    return(
        <div style={counterStyle}>
            <h3>count: {gonona}</h3>
            <button onClick={handleAddition}>Add</button>
        </div>
    )
}