declare class sector_t extends UserData
{/**
 * Returns true if the sector is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The absolute height of the sector's floor in the map.
 */
	floorheight: fixed_t
/**
 * The absolute height of the sector's ceiling in the map.
 */
	ceilingheight: fixed_t
/**
 * The name of the sector's floor flat.
 */
	floorpic: string
/**
 * The name of the sector's ceiling flat.
 */
	ceilingpic: string
/**
 * The brightness level of the sector. This should be a value between 0 and 255.
 */
	lightlevel: INT16
/**
 * The total of the sector's sector special values in all 4 sections given to the sector (section1 + section2<<4 + section3<<8 + section4<<12). Use GetSecSpecial(sector.special, n) to get the sector special set in a particular section n.
 */
	special: INT16
/**
 * The tag of the sector. Due to the way this is set up, all tags from 32768 to 65535 (seen when using map editors) are in fact -32768 to -1, although either can be used for assigning a new tag value (it will be automatically converted to the latter version anyway). Changing the value of sector.tag will have the same effect as changing it with Linedef type 409 or Linedef type 410.
 */
	tag: INT16
/**
 * To be used in an iterator function, e.g., for mobj in sector.thinglist(). This iterates through all the Objects within the sector, returning a mobj_t variable for use within the loop's contents.
 */
	readonly thinglist: LuaFunction
/**
 * The control sector for a sector's Fake Floor/Ceiling Planes linedef special, if one exists.
 */
	readonly heightsec: sector_t
/**
 * The control sector for a sector's camera clipping heights, if one exists – this is set by combining the Special Sector Properties linedef special with the Intangible to the Camera sector special in the linedef's front sector.
 */
	readonly camsec: sector_t
/**
 * A table storing all the sector's linedefs.
 */
	readonly lines: Array<line_t>
/**
 * To be used in an iterator function, e.g., for rover in sector.ffloors(). This iterates through all the FOFs within the sector, returning a ffloor_t variable for use within the loop's contents.
 */
	readonly ffloors: LuaFunction
/**
 * The sector's floor slope. This is nil if no floor slope is set.
 */
	readonly f_slope: pslope_t
/**
 * The sector's ceiling slope. This is nil if no ceiling slope is set.
 */
	readonly c_slope: pslope_t
}