declare class ticcmd_t extends UserData
{/**
 * Value related to forwards/backwards buttons; positive values move the player forward, negative values move the player backwards. Ranges from -50 to 50.
 */
	forwardmove: SINT8
/**
 * Value related to strafe left/right buttons; positive values move the player right, negative values move the player left. Ranges from -50 to 50.
 */
	sidemove: SINT8
/**
 * Value related to turn left/right buttons; to use as angle_t this needs to be shifted up by 16 bits (cmd.angleturn<<16 or cmd.angleturn*65536).
 */
	angleturn: INT16
/**
 * Value related to look up/down buttons; to use as angle_t this needs to be shifted up by 16 bits (cmd.aiming<<16 or cmd.aiming*65536).
 */
	aiming: INT16
/**
 * Contains flags representing buttons currently pressed (BT_* constants should be used).
 */
	buttons: UINT16
}