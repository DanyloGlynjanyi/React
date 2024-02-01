const RamCharachters = ({info}) => {
    const {id, name, status, species, gender, image} = info;
    return (
        <div>
            <h2>id:{id}</h2>
            <h2>name:{name}</h2>
            <h3>status:{status}</h3>
            <h4>{species}</h4>
            <h4>gender:{gender}</h4>
            <img src={image} alt={name}/>
        </div>
    );
}

export {RamCharachters};