    import { useState } from "react"

export default function Batsman (){
    const [runs , setRuns] = useState(0)
    const [sixes , setSixes] = useState(0)
    const [fours , setFour] = useState(0)
    const addSingle =()=>{
        const updateruns = runs + 1
        setRuns(updateruns)
    }

    const addFour =()=>{
        const updateRuns = runs + 4
        const countFour = fours + 1
        setFour(countFour)
        setRuns(updateRuns)
    }

    const addSix =()=>{
        const updateRuns = runs + 6
        const countSixes = sixes + 1
        setSixes(countSixes)
        setRuns(updateRuns)
    }
    return(
        <div>
            <p>player: Salman</p>
            {
                runs > 50 && <h4>congratulations! you passed 50 and now your Score is{runs}</h4>
            }
            <h3>Score: {runs}</h3>
            <div> <span style={{marginRight:'10px'}}>six: {sixes}</span>
             <span>four: {fours}</span></div>
            <button onClick={addSingle}>single</button>
            <button onClick={addFour}>four</button>
            <button onClick={addSix}>six</button>
        </div>
    )
}