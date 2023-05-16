

import{useState} from "react"

export default function App() {
  const[id,setId] = useState("");
  const[name,setName] = useState("");
  const[age,setAge] = useState("");
  const [emp,setEmp] = useState([{
    id:"1",name:"RRD",age:"24"
  }])

  const handleAdd = () =>{
   setEmp([...emp,{id:id,name:name,age:age}])
   setAge("");setId("");setName("");
  }
  const delIndival = (id) =>{
       setEmp(emp.filter(e=>e.id!==id))
  }
  const handleAll = () =>{
    setEmp([]);
  }
  return (
    <div className="App">
      <input type="number" placeholder="ENTER ID..." value={id} onChange={e=>setId(e.target.value)}/><br/>
      <input type="text" placeholder="ENTER NAME..." value={name} onChange={e=>setName(e.target.value)}/><br/>
      <input type="text" placeholder="ENTER AGE..." value={age} onChange={e=>setAge(e.target.value)}/><br/>
      <br/>
      <button onClick={handleAdd}>ADD</button>
      <br/>
      <button onClick={handleAll}>DELETE ALL</button>
      <br/>
      {emp.map(e=>(
        <div>
          {e.id}{e.name} {e.age}<button onClick={() =>{delIndival(e.id)}}>X</button>
        </div>
      ))}
    </div>
  );
}