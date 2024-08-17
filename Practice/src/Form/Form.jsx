import { useState } from "react"

function Form() {
    const[user,setUser]=useState({
        name:"Ruban Kuamr",
        age:"20",
        gender:"male",
        isMarried:false

    })

    function change(e){
      const name =e.target.name;
      const value =e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setUser({...user,[name]:value})
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>NAME</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Married Status</td>
                <td>{user.isMarried ? "Married" : "Not Maried"}</td>
            </tr>
        </tbody>
    </table>
    <h1>Submit Your form</h1>
    <form >
        <input type="text" value={user.name} onChange={change} name="name" />
        <input type="text" value={user.age} onChange={change} name="age" />
        <label htmlFor="Male">Male</label>
        <input type="radio" id="Male" name="gender" value="Male" onChange={change} checked={user.gender} />
        <label htmlFor="Female">Female</label>
        <input type="radio" id="Female" name="gender" value="Female" onChange={change} checked={user.gender} />
        <label htmlFor="isMarried">IsMarried</label>
        <input type="checkbox" id="isMarried" name="isMarried" onChange={change} checked={user.isMarried} />
        
    </form> 
    </>
  )
}

export default Form