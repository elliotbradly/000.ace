
import { EarthModel } from "../earth.model";
import EarthBit from "../fce/earth.bit";
import State from "../../99.core/state";

export const initEarth = (cpy: EarthModel, bal: EarthBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-earth", dat: { src: 'genesis' } } });

    return cpy;
};


export const openEarth = (cpy: EarthModel, bal: EarthBit, ste: State) => {

    if ( cpy.opened == true ){
        bal.slv({ ertBit: { idx: "open-earth", dat: { val: cpy.opened } } });
        return cpy
    }

    cpy.opened = true
    
    bal.slv({ ertBit: { idx: "open-earth", dat: {  val: cpy.opened } } });
    
    return cpy;
};

export const updateEarth = (cpy: EarthModel, bal: EarthBit, ste: State) => {
    
    bal.slv({ ertBit: { idx: "update-earth", dat: { src: 'updated' } } });

    return cpy;
};



