declare class side_t
{/**
 * Returns true if the sidedef is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The sidedef's X texture offset (negative is to the left, positive is to the right).
 */
	textureoffset: fixed_t
/**
 * The sidedef's Y texture offset (negative is downwards, positive is upwards).
 */
	rowoffset: fixed_t
/**
 * The sidedef's upper texture number. This is 0 if no valid texture is set. See List of textures by number for the numbers of SRB2's textures.
 */
	toptexture: INT32
/**
 * The sidedef's lower texture number. This is 0 if no valid texture is set. See List of textures by number for the numbers of SRB2's textures.
 */
	bottomtexture: INT32
/**
 * The sidedef's middle texture number. This is 0 if no valid texture is set. See List of textures by number for the numbers of SRB2's textures.
 */
	midtexture: INT32
/**
 * Points to the sector the sidedef is facing.
 */
	readonly sector: sector_t
/**
 * The linedef type special of the linedef the sidedef belongs to.
 */
	readonly special: INT16
/**
 * The number of times to repeat the sidedef's middle texture.
 */
	repeatcnt: INT16
/**
 * Concatenation of the upper, middle and lower texture name strings, for linedef types that require text in any of them.
 */
	readonly text: string
}