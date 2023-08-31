import React from "react";
import {Button} from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Home= () =>{
    const { user } = useUserAuth();
    const { logOut }=useUserAuth();
    const handleLogout = async()=>{
        try{
            await logOut();
        }
        catch(err){
            console.log(err.message);
        }
    }
    return(
        <>
         <div> Welcome Home</div>
         {user && user.email}
         <br></br>
         <Button variant="secondary" onClick={handleLogout}>Logout</Button>
        </>
    )
};                  

export default Home;