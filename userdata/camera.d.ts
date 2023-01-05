declare class camera_t extends UserData
{/**
 * Returns true if the third-person camera is enabled, false if not.
 */
	chase: boolean
/**
 * The vertical viewing angle of the camera.
 */
	aiming: angle_t
/**
 * The camera's absolute X position in the map.
 */
	readonly x: fixed_t
/**
 * The camera's absolute Y position in the map.
 */
	readonly y: fixed_t
/**
 * The camera's absolute Z position in the map.
 */
	z: fixed_t
/**
 * The absolute angle the camera is facing. 0 is East, ANGLE_90 is North, ANGLE_180 is West, and ANGLE_270 is South.
 */
	angle: angle_t
/**
 * The subsector the camera is currently in. To obtain the sector the camera is in, use camera.subsector.sector.
 */
	readonly subsector: subsector_t
/**
 * The absolute "floor" position for the camera, i.e., the height that it considers to be the floor. This can be different from the floor height of the sector the camera is in, for example if it is above a solid FOF.
 */
	readonly floorz: fixed_t
/**
 * The absolute "ceiling" position for the camera, i.e., the height that it considers to be the ceiling. This can be different from the ceiling height of the sector the camera is in, for example if it is below a solid FOF.
 */
	readonly ceilingz: fixed_t
/**
 * The current radius of the camera. By default this is 20*FRACUNIT, but it will automatically scale along with the corresponding player's scale.
 */
	radius: fixed_t
/**
 * The current height of the camera. By default this is 16*FRACUNIT, but it will automatically scale along with the corresponding player's scale.
 */
	height: fixed_t
/**
 * The camera's current X-axis momentum. Positive values shift the camera to the East, negative values to the West.
 */
	momx: fixed_t
/**
 * The camera's current Y-axis momentum. Positive values shift the camera to the North, negative values to the South.
 */
	momy: fixed_t
/**
 * The camera's current Z-axis momentum. Positive values shift the camera upwards, negative values downwards.
 */
	momz: fixed_t
}