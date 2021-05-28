import React, {useState} from 'react'

const Basicforms = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);
      
    const submitForm= (e)=> {
        e.prevetDefault();

        
            
        
        const newEntry = {email: email, password: password};

        setAllEntry([...allEntry,newEntry])
        console.log(allEntry);

        setemail('');
        setpassword('');  
        

    }
    return (
        <>


        <form action="" onSubmit={submitForm} >
            <div>
                <lable htmlFor="email">Email</lable>
                <input type="text" name="email" autoComplete="off" value={email}
                    onChange={(e) =>setemail(e.target.value)}
                />
                
            </div>
            <br/>

            <div>
                <lable htmlFor="password">Password</lable>
                <input type="password" name="password" autoComplete="off" value={password}
                       onChange={(e) =>setpassword(e.target.value)}
                />
            </div>
            <br/>
            <button type="submit">Login</button>
        </form>
            
        </>
    )
}

export default Basicforms
