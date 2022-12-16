declare class vertex_t
{/**
 * Returns true if the vertex is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * The absolute X coordinate of the vertex in the map.
 */
	readonly x: fixed_t
/**
 * The absolute Y coordinate of the vertex in the map.
 */
	readonly y: fixed_t
/**
 * Used as an absolute Z coordinate in some special cases, but for all Lua purposes this is unused.
 */
	readonly z: fixed_t
}