import React, { useState } from 'react';


const Home : React.FC =() =>{
    const [text, setText] =useState<string> ('');
    const[todoText, setTodoText]= useState<string> ('');



return (

    <>
    <div className='mb-4'>
   <input type = 'text' placeholder="Text"/>
   <input type = 'text' placeholder ="Text"/>
   <button
        // onClick={handleSubmit}
        // className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>

    </div>
    
    
    </>
)

};


export default Home;
