declare class consvar_t
{/**
 * The name of the console variable, as it should be written in the console.
 */
	readonly name: string
/**
 * The default value set for the console variable, expressed as a string.
 */
	readonly defaultvalue: string
/**
 * Contains the flags set for the console variable (see CV_* constants).
 */
	readonly flags: INT32
/**
 * The current value set for the console variable, expressed as a number.
 */
	readonly value: INT32
/**
 * The current value set for the console variable, expressed as a string.
 */
	readonly string: string
/**
 * Returns whether the console variable has been changed by the player (true) or not (false).
 */
	readonly changed: boolean
}