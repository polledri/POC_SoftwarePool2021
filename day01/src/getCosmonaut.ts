import data from './cosmonaut.json';
import { Cosmonaut, Country, Mission } from './type';
import { createCosmonaut } from './createCosmonaut';

export function getCosmonaut() : Cosmonaut {
    const { name, mission, country } = data;
    return createCosmonaut(name, mission as Mission, country as Country);
}
