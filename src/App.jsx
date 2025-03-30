
import { Suspense } from 'react';
import './App.css';
import Counter from './counter';
import Batsman from './score';
import User from './user';
import Friends from './friends'
import AllAlbum from './albums'
{/*
    *const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    *
    */}

{/*
    *const friendsFetch =async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data
}
    *
    */}
const fetchAlbum =async()=>{
   const res =await fetch('https://jsonplaceholder.typicode.com/albums')
   const data = res.json()
   return data
}

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
{/*
    *const friendPromise = friendsFetch()
    *
    */}
    const albumPromose = fetchAlbum()

  return (
    <>     
      <h2>React Core Concept</h2>
    {/*
    *  <Suspense fallback={<h4>your friend is comming...</h4>}>
       <Friends friendPromise={friendPromise}></Friends>
      </Suspense>
    *
    */}
    
      {/*
    * <Suspense fallback={<h3>loading...</h3>}>
        <User fetchUser= {fetchUser}></User>
      </Suspense>
    *
    */}

    <Suspense>
        <AllAlbum albumPromose={albumPromose}></AllAlbum>
    </Suspense>
    
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
