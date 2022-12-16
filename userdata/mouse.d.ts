declare class mouse_t
{/**
 * The change in position along the x-axis.
 */
	readonly dx: INT32
/**
 * The change in position along the y-axis.
 */
	readonly dy: INT32
/**
 * The change in position along the y-axis for use in mouse-looking.
 */
	readonly mlookdy: INT32
/**
 * The real change in position along the x-axis unadjusted for sensitivity settings.
 */
	readonly rdx: INT32
/**
 * The real change in position along the y-axis unadjusted for sensitivity settings.
 */
	readonly rdy: INT32
/**
 * Contains flags representing mouse buttons currently pressed (See MB_* constants).
 */
	readonly buttons: UINT16
}