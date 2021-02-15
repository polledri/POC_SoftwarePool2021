import { describe, it, expect } from '@jest/globals';
import { Cosmonaut, Country, Mission } from '../src/type';
import { createCosmonaut } from '../src/createCosmonaut'

describe('Test createCosmonaut', () => {
    it('comosnaut OK', () => {
        const name: string = 'Cheepsz';
        const mission: Mission = Mission.MOON;
        const country: Country = Country.FR;
        const cosmo: Cosmonaut = {name, mission, country};
        expect(createCosmonaut('Cheepsz', Mission.MOON, Country.FR)).toStrictEqual(cosmo);
    });
});
