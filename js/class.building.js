"use strict";
/**
 * Create a Building class. Each Building should have
 * - a name
 * - a capacity
 * - an array of its resident
 *
 * Each Building should provide methods to
 * - addResident(citizen)
 *      - If there is still space in the building, add the citizen as resident.
 *        also mark this building as the citizens home.
 *      - If there is no space, check if someone has to makeSpaceFor(citizen) (= is there
 *        a resident in this building with a lower rank?)
 * - removeResident(citizen)
 *      - Kick a resident out of the building. Also delete the citizens home (null).
 *      - Attention: When you kick a resident, make sure there is no lower ranked
 *        resident remaining in the building.
 * - listAllResidents() for the Citizen Directory.
 */
