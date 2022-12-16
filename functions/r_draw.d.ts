/**
 * Returns the skin color number that is represented by name. If no color is found, returns SKINCOLOR_NONE.
 */
declare function R_GetColorByName(name: string): int
/**
 * Returns the super color number that is represented by name. If no color is found, returns SKINCOLOR_NONE.
 */
declare function R_GetSuperColorByName(name: string): int
/**
 * Returns the name of the input color.

The function will raise an error if an out of bounds number is entered.
 */
declare function R_GetNameByColor(color: int): string