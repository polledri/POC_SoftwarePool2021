/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
/* eslint-disable no-restricted-syntax */

import axios from 'axios';
import { Mission, Country, Cosmonaut } from './type';
import { createCosmonaut } from './createCosmonaut';

async function selectCosmonaut(mission1: Mission, country1: Country) : Promise<Array<Cosmonaut>> {
    const res = await axios.get<Cosmonaut[]>('http://localhost:7600/cosmo');
    const selected: Array<Cosmonaut> = [];
    for (const i in res.data) {
        if (res.data[i].mission === mission1 && res.data[i].country === country1) {
            const { name, mission, country } = res.data[i];
            selected.push(createCosmonaut(name, mission as Mission, country as Country));
        }
    }
    return selected;
}

selectCosmonaut(Mission.ISS, Country.FR).then((data) => {
    console.log(data);
});
