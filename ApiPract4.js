import React from 'react'
import { FirstName, LastName } from './ApiPract'

function ApiPract4() {
    return (
        <>
        <FirstName.Consumer> 
        
        {(fname) => {
           return(
               <LastName.Consumer>
                   {(lname) => {
                       return (
                           <>
                           <h1>{fname}</h1>
                           <h1>{lname}</h1>
                           </>
                       )
                   }
                   }
               </LastName.Consumer>
           )
        }
                         
        }
        
         </FirstName.Consumer>
           
        </>
    )
}

export default ApiPract4
