import React from 'react'

function Task2 () {
    const isLoggedIn = false;
  

    if(isLoggedIn){
        return <h2>Welcome to user!</h2>
    }
    else{
        return <h2> please loggin...</h2>

    }


}
export default Task2
