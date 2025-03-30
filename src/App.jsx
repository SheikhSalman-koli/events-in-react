
import './App.css'
import Counter from './counter'
import Batsman from './score'
function App() {
  
function handleClick(){
  return alert('i am aclicked')
}

const handleClick3 =()=>{
  alert('click 3')
}

const handleAddNum =(num)=>{
    const newnum = num+10
    alert(newnum)
}
  return (
    <>     
      <h2>React Core Concept</h2>
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick2(){
        alert('click 2')
      }}>Click me2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={()=> alert('hi')}>Click me 4</button>
      <button onClick={()=>handleAddNum(6)}>Click me 5</button>   
    </>
  )
}

export default App
