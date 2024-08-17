import { useState } from "react"

function UserDetail() {
    
    // this is for single state
    const[user,setUser]=useState({"name":"Ram","age":"23"})

    // this is for each state value
    const[name,setName]= useState("Ruban");
    const[age,setAge]=useState("23");
    
    function changeName(){
        //  setName("RubanKumar");
        // name == "Ruban" ? setName("Rubankumar") : setName("Ruban");

        // for set of state we use spread operator
        setUser({...user,name:"RubanKumar"})
    }
    function changeAge(){
        //  setAge("25");
        // age == "23" ? setAge("25") : setAge("23");
        setUser({...user,age:"25"})
    }
    
    function cName(e){
        // METHOD 1
        // const newStateObj ={...user}
        // newStateObj.name=e.target.value
        // setUser(newStateObj)

        // METHOD 2
        setUser((change)=>{
            return{...change,name:e.target.value}
        });
    
         
    }
    function cAge(e){
      const newStateObj ={...user}
      newStateObj.age=e.target.value
      setUser(newStateObj)
    }

    // use single fuction for event handiling for tht we use name attribute in input field
    function cChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
    return (
      <>
       <div>UserDetail</div>
       <h1>{user.name}</h1>
       <h2>{user.age}</h2>
       <button onClick={changeName}>Update name</button>
       <button onClick={changeAge}>Update Age</button>

       {/* input form example with state */}
       <h1>{user.name} {user.age}</h1>
       <form>
          <input type="text" onChange={cChange}  value={user.name} name="name"/>
          <input type="text" onChange={cChange} value={user.age} name="age"/>
       </form>
      </>  

  )
}

export default UserDetail