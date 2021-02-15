import { Cosmonaut, Country, Mission } from './type';

export function createCosmonaut(name: string, mission: Mission, country: Country) : Cosmonaut {
    return { name, mission, country };
}

console.log(createCosmonaut('Cheepsz', Mission.MOON, Country.FR));
