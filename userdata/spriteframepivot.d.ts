declare class spriteframepivot_t extends UserData
{/**
 * The X coordinate of the pivot from where to rotate this frame.
 */
	x: INT32
/**
 * The Y coordinate of the pivot from where to rotate this frame.
 */
	y: INT32
/**
 * The axis to rotate this frame in, for which ROTAXIS_X represents the roll axis, ROTAXIS_Y the pitch axis, and ROTAXIS_Z the yaw. This is set to ROTAXIS_X in all frames by default.
 */
	rotaxis: number
}