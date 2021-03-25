import React, { useContext } from 'react'
// import ApiPract4 from './ApiPract4'
import { FirstName ,LastName, Fmembers} from './ApiPract'

function ApiPract3() {

    const fname = useContext(FirstName);
    const lname= useContext(LastName)
    const mname = useContext(Fmembers)

    return (
          
        <>
             <h1>
                 {fname}
             </h1>
             <h2>{mname}</h2>
             <h1>{lname}</h1>
        </>
    )
}

export default ApiPract3
