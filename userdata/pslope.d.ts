declare class pslope_t extends UserData
{/**
 * Returns true if the slope is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The slope's origin vector.

For sector-based slopes, the origin's X/Y position is placed a fixed horizontal distance (known as the "extent" internally) away from the middle point of the linedef that defines the slope, at an angle of xydistance. The Z position is set as the un-sloped height of the floor or ceiling plane the slope is created for.

Currently, the only way to modify this variable is by assigning to it a custom table with x, y and z fields, such as below:

slope.o = {"x" = 1*FRACUNIT, "y" = 2*FRACUNIT, "z" = 3*FRACUNIT} -- change the origin's position to (1, 2, 3)


If SL_DYNAMIC is set in the slope's flags, the origin's Z position (slope.o.z) will be automatically corrected accordingly with the sector heights or vertices used to create the slope. This means that slope.o.z cannot be modified by Lua unless the flag is set.
 */
	o: vector3_t
/**
 * The slope's 2D (X,Y) direction vector. Used to determine distance from the origin in 2D mapspace. The values are normalised, i.e.: they are equivalent to a thrust of FRACUNIT, though in the opposite direction to the angle xydirection.
 */
	readonly d: vector2_t
/**
 * The rate at which Z changes based on distance from the origin.

For sector-based slopes, this is calculated as the un-sloped height of the sector plane on the other side of the linedef that defines the slope's plane, minus the un-sloped height of the slope's own plane, and divided by the slope's "extent" value (see o for explanation). (i.e.: zdelta = (plane2-plane1)/ extent)

If SL_DYNAMIC is set in the slope's flags, this value will be automatically corrected accordingly with the sector heights or vertices used to create the slope. This means that this value cannot be modified by Lua unless the flag is set. Otherwise, modifying this value will also automatically update zangle and normal accordingly.
 */
	zdelta: fixed_t
/**
 * The normal vector of the slope's plane.

If SL_DYNAMIC is set in the slope's flags, this value will be automatically corrected accordingly with the sector heights or vertices used to create the slope.
 */
	readonly normal: vector3_t
/**
 * The vertical angle of the slope's plane, going up from the ground (i.e. a "flat" slope plane would have a zangle of 0).

If SL_DYNAMIC is set in the slope's flags, this value will be automatically corrected accordingly with the sector heights or vertices used to create the slope. This means that this value cannot be modified by Lua unless the flag is set. Otherwise, modifying this value will also automatically update zdelta and normal accordingly.

ANGLE_90 and ANGLE_270 are not accepted as values for this variable; the game will print an error message if you attempt to assign them to it.
 */
	zangle: angle_t
/**
 * The horizontal angle of the slope's plane.

Modifying this value will also automatically update d and normal accordingly.
 */
	xydirection: angle_t
/**
 * The slope's flags (see SL_* constants).
 */
	readonly flags: UINT8
}