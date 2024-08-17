import './Usercard.css'
const userdata = [
    {
       title:"shinchan",
       location:"China",
       designation:"Front end Developer",
       skills:["Ui / ux","React","Framework","HTml","CSS"],
       online:true,
       pf:"Images/pf1.jfif",
    },
    {
        title:"Rohan",
        location:"India",
        designation:"Full Stack Developer",
        skills:["Ui / ux","React","Framework","HTml","CSS"],
        online:false,
        pf:"Images/pf2.jfif",
    },
    {
        title:"Rohan",
        location:"India",
        designation:"Full Stack Developer",
        skills:["Ui / ux","React","Framework","HTml","CSS"],
        online:true,
        pf:"Images/pf3.jfif",
    },
    {
        title:"Rohan",
        location:"India",
        designation:"Full Stack Developer",
        skills:["Ui / ux","React","Framework","HTml","CSS"],
        online:false,
        pf:"Images/pf4.jfif",
    },
    {
        title:"Rohan",
        location:"India",
        designation:"Full Stack Developer",
        skills:["Ui / ux","React","Framework","HTml","CSS"],
        online:true,
        pf:"Images/pf5.jfif",
    },
]

function Usercard() {
  return (
    <>
     {userdata.map((item)=>(
        <div className="container">
        <span className={item.online ? "pro online" : "pro offline"}>{item.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={item.pf} className='img' alt="user" />
        <h3>{item.title}</h3>
        <h3>{item.location}</h3>
        <p>{item.designation}</p>
        <div className='button'>
            <button className='primary'>message</button>
            <button className='primary outline'>Follow</button>
        </div>
        <div className='skill'>
            <h6>skills</h6>
            <ul>
                {item.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
     </div>
     ))}
    </>
  )
}

export default Usercard


