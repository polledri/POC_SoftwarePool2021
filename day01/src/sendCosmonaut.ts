import axios, { AxiosResponse } from 'axios';
import { Mission, Country, Cosmonaut } from './type';
import { createCosmonaut } from './createCosmonaut';
import { selectCosmonaut } from './selectCosmonaut';

async function sendCosmonaut(name: string, mission: Mission, country: Country) : Promise<AxiosResponse<any>> {
    const cosmo: Cosmonaut = createCosmonaut(name, mission, country);
    console.log('cosmo');
    console.log(cosmo);
    const res = await axios.post('http://localhost:7600/cosmo', {
        name: 'camille',
        mission: 'MARS',
        country: 'France',
        suit: null,
    });
    console.log('res');
    console.log(res.data);
    return res;
}

selectCosmonaut(Mission.ISS, Country.CHN).then((data) => {
    console.log('data1');
    console.log(data);
});
sendCosmonaut('Cheepsz', Mission.ISS, Country.CHN).then((data) => {
    console.log(data.data);
});
selectCosmonaut(Mission.ISS, Country.CHN).then((data) => {
    console.log('data2');
    console.log(data);
});
selectCosmonaut(Mission.EARTH, Country.CHN).then((data) => {
    console.log('dataEARTH:');
    console.log(data);
});
