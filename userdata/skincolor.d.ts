declare class skincolor_t extends UserData
{/**
 * The name of the skincolor. Used in the console and Player Setup menu. Names containing spaces must be put in quotes in the console.
 */
	name: string
/**
 * An array of 16 palette indices, which in whole represent the skincolor's color ramp.
 */
	ramp: Array<UINT8>
/**
 * The opposite skincolor. Used on the Goal Sign.
 */
	invcolor: UINT8
/**
 * The shade of the opposite skincolor, from 0 (lightest) to 15 (darkest). Used on the Goal Sign.
 */
	invshade: UINT8
/**
 * Color to use when coloring a player name in the chat. Accepts V_*MAP constants.
 */
	chatcolor: UINT16
/**
 * Skincolor accessibility. Determines whether the color can be accessed from the Player Setup menu or from the console.

Note: This attribute is read-only for default skincolors.
 */
	accessible: boolean
}