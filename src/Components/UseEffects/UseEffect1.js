import React, {useState , useEffect} from 'react'

const UseEffect1 = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        if (count>=1) {
            
            document.title=`Chats (${count})`
        }else{
            document.title=`Chats`
        }
    },[count]);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Click</button>
        </div>
    )
}

export default UseEffect1

//                FROM GEEKS FOR GEEKS

// The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.

