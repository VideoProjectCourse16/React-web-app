import React, {useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { users } from "../../mock/mock_user";
import { UserInfo } from "../../models/user";
import { getMe } from "../../services/auth";




const User=()=>{
    const [user, setUser] = useState<UserInfo>()

    const getUser = () => setUser(users.filter(({username}) => username == "Logan")[0])
    /*const getUser = async() => {
        const us = await getMe()
        setUser(us.data)
    }*/

    useEffect(()=>{
        getUser()
    },[user])

    return(<>
        <h1 className="text-center">Area Personale</h1>
        {/* <div className="container-fluid">
            {   user && 
                <>
                    <h3>surname: {user.surname}</h3>
                    <h3>nome: {user.name}</h3>
                    <h3>username: {user.username}</h3>
                </>
            }
        </div> */
        <div className="container-fluid d-flex justify-content-center mt-5">
            {
                user && 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                        <Card.Body>
                            <Card.Title><h2 className="text-center">{user.username}</h2></Card.Title>
                            <Card.Text>
                                <h3>Nome: {user.name}</h3>
                                <h3>Cognome: {user.surname}</h3>
                                <h3>Username: {user.username}</h3>
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