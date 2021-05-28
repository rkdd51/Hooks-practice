

// Alawys write Hooks inside a function or a Component.
// Component name should be Pascal case {first letter should be uppercase}.
// We can directly import or write it using React.hooksName.
// Don't call hook inside loops,conditions or nested function.

import React from 'react'

const RulesHooks = () => {
    const [myName, setmyName] = React.useState('Rahul dubey')

   function nameChnge(){
       setmyName('Jyoti dubey')
   }
    
    return (
        <div>

        <h1>This is {myName}</h1>
        <button onClick={nameChnge}>Submit</button>
            
        </div>
    )
}

export default RulesHooks
