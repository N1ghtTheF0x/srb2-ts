declare class patch_t
{/**
 * Returns true if the patch is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The width of the patch, in fracunits/pixels.
 */
	readonly width: INT16
/**
 * The height of the patch, in fracunits/pixels.
 */
	readonly height: INT16
/**
 * The X offset of the patch (positive is left, negative is right), in fracunits/pixels.
 */
	readonly leftoffset: INT16
/**
 * The Y offset of the patch (positive is down, negative is up), in fracunits/pixels.
 */
	readonly topoffset: INT16
}