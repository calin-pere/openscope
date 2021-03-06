/**
* Symbol that divides each direct segment
*
* @enum DIRECT_SEGMENT_DIVIDER
* @type {string}
* @final
*/
export const DIRECT_SEGMENT_DIVIDER = '..';

/**
* Symbol that prepends a fixname indicating the aircraft should enter
* a holding pattern once it arrives at the fix.
*
* @enum HOLD_SEGMENT_SYMBOL
* @type {string}
* @final
*/
export const HOLD_SEGMENT_SYMBOL = '@';

/**
* Symbol that divides each route segment
*
* @enum PROCEDURE_SEGMENT_DIVIDER
* @type {string}
* @final
*/
export const PROCEDURE_SEGMENT_DIVIDER = '.';

/**
* A procedure segment has, at most, three parts (ex: `BETHL.GRNPA1.KLAS`)
*
* @enum ROUTE_SEGMENT_MAX_LENGTH
* @type {number}
* @final
*/
export const ROUTE_SEGMENT_MAX_LENGTH = 3;

/**
 * Symbols that prepends a three digit number, indicating that the created waypoint
 * should simply be to follow the given heading until told to proceed to next waypoint
 *
 * @enum VECTOR_SEGMENT_SYMBOL
 * @type {String}
 * @final
 */
export const VECTOR_SEGMENT_SYMBOL = '#';
