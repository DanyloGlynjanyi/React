import {CommentsContainer} from "./components/ComentsCont/CommentsContainer";
import {UserContainer} from "./components/UserCont/UserContainer";

const App = () => {
    return (
        <div style={{display: 'flex'}}>
            <CommentsContainer/>
            <UserContainer/>
        </div>
    );
};

export {App};