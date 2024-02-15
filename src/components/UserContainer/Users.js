import {User} from "./User";
import {useLoaderData} from "react-router-dom";
import css from "./user.module.css"

const Users = () => {
    const {data: users} = useLoaderData()
    return (
        <div className={css.User}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {
    Users
};