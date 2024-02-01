const Simpson = ({simpson}) => {
    const {id, name, surname, age, info, img} = simpson;

    return (
        <div>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>surname: {surname}</h2>
            <h2>age: {age}</h2>
            <p>info: {info}</p>
            <img src={img} alt={name}/>
        </div>
    );
};
export {Simpson};