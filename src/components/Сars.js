import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../services";
import {carActions} from "../redux";
import {Car} from "./Сar";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setCars(data)))
    }, [trigger, dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};