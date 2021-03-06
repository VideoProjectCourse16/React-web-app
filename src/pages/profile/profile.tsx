import React, {useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { UserInfo } from "../../models/user";
import { getMe } from "../../services/auth";




const User=()=>{
    const [user, setUser] = useState<UserInfo>()

    const getUser = async () =>{
        const {data}= await getMe()  
        setUser(data) 
    }

    useEffect(()=>{
        getUser()
    },[])

    return(<>
        <h1 className="text-center">Area Personale</h1>
        {
        <div className="container-fluid d-flex justify-content-center mt-5">
            {
                user && 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Body>
                            <Card.Title><h2 className="text-center">{user.user.username}</h2></Card.Title>
                            <Card.Text>
                                <h3>Name: { user.user.name}</h3>
                                <h3>Surname: {user.user.surname}</h3>
                                <h3>Username: {user.user.username}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
            }
        </div>
        
        }
        </>
    )

}
export default User;