"use strict";

import Building from "./class.building.js";


/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */

export default class NobleBuilding extends Building{
    constructor(name, capacity) {
        super(name, capacity);
    }

    addResident(citizen) {
        if(citizen.noble === false) {
            return false;
        }
        else{
            return super.addResident(citizen);
        }
    }
}