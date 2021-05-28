import React from 'react'

const UseStateObject = () => {

    const [myObject, setmyObject] = React.useState({
     myName:'Rahul', myAge:23, Degree:'BE'
    });

    const changeObject = ()=>{
        setmyObject({...myObject ,myName:'Shubham', myAge:'66', Degree:'ME'});
    }

    // (... is called the spread operator which can be used to change data in an object if we dont use spread operator than we will have to write all the data seaprately to change them)

    
    
    return (
        <div>
        <h1>Name:{myObject.myName} Age:{myObject.myAge} Degree:{myObject.myAge}</h1>
        <button onClick={changeObject}>Update</button>
            
        </div>
    )
}

export default UseStateObject
