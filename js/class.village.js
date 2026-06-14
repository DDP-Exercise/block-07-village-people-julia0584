"use strict";

import Citizen from "./class.citizen.js";
import NobleCitizen from "./class.nobleCitizen.js";
import Building from "./class.building.js";
import NobleBuilding from "./class.nobleBuilding.js";

/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */

export default class Village{
    constructor(name) {
        this.name = name;
        this.buildings = [];
        this.citizens = [];
    }

    addBuilding(name, capacity, noble = false) {
        this.buildings.push(noble ? new NobleBuilding(name, capacity) : new Building(name, capacity));
    }

    addCitizen(name, noble = false){
        let citizen = noble ? new NobleCitizen(name) : new Citizen(name);
        this.citizens.push(citizen);
        this.shelterTheWorthy(citizen);
    }

    shelterCitizen(citizen){
        for(const buildings of this.buildings){
            if(buildings.addResident(citizen)){
                return;
            }
        }
    }

    shelterTheWorthy(){
        for(const citizen of this.citizens){
            if(citizen.home == null){
                this.shelterCitizen(citizen);
            }
        }
    }

    printCitizenDirectory(){
        // for all builings list residents
        for(const building of this.buildings){
            building.listAllResidents();
        }
        this.listAllHomeless();
    }

    listAllHomeless(){
        console.log("%c Homeless people of "+this.name+":", "background-color. #a00; color: white");
        for(const citizen of this.citizens){
            if(citizen.home == null){
                console.log(String(citizen));
            }
        }
    }
}