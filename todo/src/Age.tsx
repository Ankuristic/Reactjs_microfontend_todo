import React, {ChangeEvent,useState} from 'react';


const Age: React.FC =() =>{
    const [text, setText] =useState<string> ('');
    const [button , setbutton] = useState<number>()
    const [ datep, setdatepicker] = useState<string>('')

    const handleSubmit = () =>{

        const birthDate =  new Date (datep);
        console.log('hello' + birthDate)
        const currentDate  =  new Date ();
       console.log( 'hello8' + currentDate)
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const month = currentDate.getMonth() - birthDate.getMonth();
        console.log(month);
        console.log('ankurism'+ age)
        console.log(age)
        // setbutton(age.toString())
    }

    const datepicker = (event:ChangeEvent<HTMLInputElement>) =>{

        console.log('date picker')
        setdatepicker(event.target.value)

    }




    return (

        <>

<div>
                <h4>AGE CALCULATOR</h4>
                <h2>Enter your date of birth:</h2>
                <input type="date" placeholder="date" onChange={datepicker} />
                <button onClick={handleSubmit} className="bg-lime-400 text-white py-2 px-4 rounded">Submit</button>
                <p>Your age is {text} years old</p>
            </div>
        
        
        </>
    )
}

export default Age;
