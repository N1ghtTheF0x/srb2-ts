declare class ffloor_t
{/**
 * Returns true if the FOF is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The absolute Z position of the FOF's top surface in the map. Modifying this will also modify the ceiling height of the FOF's control sector at the same time.
 */
	topheight: fixed_t
/**
 * The name of the FOF's top surface flat. Modifying this will also modify the ceiling flat of the FOF's control sector at the same time.
 */
	toppic: string
/**
 * The brightness level of the FOF. This should be a value between 0 and 255. Modifying this will also modify the brightness level of the FOF's control sector at the same time.
 */
	toplightlevel: INT16
/**
 * The absolute Z position of the FOF's bottom surface in the map. Modifying this will also modify the floor height of the FOF's control sector at the same time.
 */
	bottomheight: fixed_t
/**
 * The name of the FOF's bottom surface flat. Modifying this will also modify the floor flat of the FOF's control sector at the same time.
 */
	bottompic: string
/**
 * The FOF's top slope. This is nil if no top slope is set.
 */
	readonly t_slope: pslope_t
/**
 * The FOF's bottom slope. This is nil if no bottom slope is set.
 */
	readonly b_slope: pslope_t
/**
 * The FOF's control sector.
 */
	readonly sector: sector_t
/**
 * The FOF's flags.
 */
	flags: number
/**
 * The FOF's control linedef.
 */
	readonly master: line_t
/**
 * The target sector the FOF is located in.
 */
	readonly target: sector_t
/**
 * The next FOF in the target sector's FOF list. This is nil if the FOF is the last in the list.
 */
	readonly next: ffloor_t
/**
 * The previous FOF in the target sector's FOF list. This is nil if the FOF is the first in the list.
 */
	readonly prev: ffloor_t
/**
 * The FOF's alpha/translucency value. This should be a value between 1 and 256.
 */
	alpha: INT32
}