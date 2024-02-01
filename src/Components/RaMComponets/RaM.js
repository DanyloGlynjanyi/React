const RaM = () => {
    const RamCharacherts = ({info}) => {
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
    const Characters = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        }, {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }];
    return (
        <div>
            {Characters.map(info => <RamCharacherts key={info.id} info={info}/>)}
        </div>
    );
};

export {RaM};