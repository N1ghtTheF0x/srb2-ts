declare class line_t extends UserData
{/**
 * Returns true if the linedef is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * Points to the first of the two vertices the linedef is connected to.
 */
	readonly v1: vertex_t
/**
 * Points to the second of the two vertices the linedef is connected to.
 */
	readonly v2: vertex_t
/**
 * Pre-calculated distance between the linedef's two vertex X coordinates (line.v2.x-line.v1.x).
 */
	readonly dx: fixed_t
/**
 * Pre-calculated distance between the linedef's two vertex Y coordinates (line.v2.y-line.v1.y).
 */
	readonly dy: fixed_t
/**
 * Contains the linedef flags for the linedef (see ML_* constants).
 */
	readonly flags: INT16
/**
 * The linedef's linedef type number.
 */
	readonly special: INT16
/**
 * The tag number set for the linedef. Due to the way this is set up, all tags from 32768 to 65535 (seen when using map editors) are in fact -32768 to -1, although either can be used for assigning a new tag value (it will be automatically converted to the latter version anyway).
 */
	readonly tag: INT16
/**
 * This is a small table containing the sidedef numbers for both the front sidedef (line.sidenum[0]) and the back sidedef if one exists (line.sidenum[1]). To get the sidedef userdata for these, use sides[line.sidenum[i]], i being either 0 (front) or 1 (back). To check if either sidedef is valid, use line.sidenum[i].valid, which will return either true or false.
 */
	readonly sidenum: Array<UINT16>
/**
 * Points to the linedef's front sidedef (same as sides[line.sidenum[0]]).
 */
	readonly frontside: side_t
/**
 * Points to the linedef's back sidedef, if it exists (same as sides[line.sidenum[1]]); this will return nil if not.
 */
	readonly backside: side_t
/**
 * A string representing the linedef's orientation in the map:
"horizontal": directly horizontal (line.dy is 0)
"vertical": directly vertical (line.dx is 0)
"positive": gradient is positive (line.dy/line.dx > 0)
"negative": gradient is negative (line.dy/line.dx < 0)
 */
	readonly slopetype: string
/**
 * Points to the linedef's front sector.
 */
	readonly frontsector: sector_t
/**
 * Points to the linedef's back sector, if it exists.
 */
	readonly backsector: sector_t
/**
 * A variable used internally by functions that search for linedefs by tag.
 */
	readonly firsttag: INT16
/**
 * A variable used internally by functions that search for linedefs by tag.
 */
	readonly nexttag: INT16
/**
 * Concatenation of all front and back texture name strings, for linedef types that require text in any of them.
 */
	readonly text: string
/**
 * 
 */
	readonly callcount: INT16
}