import {useNavigate} from "react-router-dom";
import {useChapter} from "../../../hooks";
import css from './Episode.module.css'
const Episode = ({episode}) => {
    const {id, name, air_date, episode: chapter, characters} = episode;


    const navigate = useNavigate();
    const {setChapter} = useChapter()
    const toCharacters = () => {
        const id = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setChapter(chapter)
        navigate(`/characters/${id}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>chapter:{chapter}</div>
            <div>date :{air_date}</div> 
        </div>
    )
};

export {Episode};