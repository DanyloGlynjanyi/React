import {useEffect, useState} from "react";

import {launchService} from "../../../services/launchService";
import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'
const Launches = () => {
    const [launches, setLaunches] = useState([])


    useEffect(() => {
        launchService.getAll().then(({data}) => {
            let filtered = data.filter(value => value.launch_year !== "2020");
            setLaunches(filtered)
        })
    }, [])
    return (
        <div className={css.launch}>
            {launches.map(launch => <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};