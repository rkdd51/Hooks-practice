import React from 'react'

const UseState =()=> {

    const myBioData = [
        {name: 'rahul', id:0, age:23},
        {name:'Shubham',id:1, age:25},
        {name:'Dhairya',id:2, age:23}
    ]



const [myArray, setmyArray] = React.useState(myBioData)

const clearArray =()=> {
    setmyArray([]);
}


    return (
        <div>

        {/* {
            myArray.map((currentElement)=<h1 key={currentElement.id}>Name: {currentElement.name} & Age: {currentElement.age}</h1>)
        } */}
        <h1>Yea upar wali line sahi nahi ho rahi</h1>
        <button className="btn" onClick={clearArray}>Clear</button>
        
            
        </div>
    )
    
}


export default UseState
