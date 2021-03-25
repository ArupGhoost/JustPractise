import React, { createContext }  from 'react'
import ApiPract2 from './ApiPract2'


const FirstName = createContext();
const Fmembers = createContext()
 const LastName = createContext()


function ApiPract() {

   
    
    
    return (
        <>
           <FirstName.Provider value={'Ghost Bhadia kebe har manibuni'}>
           <Fmembers.Provider value ={'Dhiska, Mummy, chinki, ene'}>
              <LastName.Provider value={'Ghost Is Arup'}>

        <ApiPract2 />
        </LastName.Provider>
        </Fmembers.Provider>
        </FirstName.Provider>
        
        </>
    )
}

export  default ApiPract;
export  {FirstName, LastName, Fmembers};