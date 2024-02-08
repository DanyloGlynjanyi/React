import {UserForm} from "./UserForm";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {Users} from "./Users";

const UserContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))

    }, [])

    return (
        <div style={{width: '50%'}}>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};