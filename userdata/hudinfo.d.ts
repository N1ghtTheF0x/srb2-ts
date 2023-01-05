declare class hudinfo_t extends UserData
{/**
 * X coordinate of the HUD item (from the left of the screen). Should be a value between 0 and 320.
 */
	x: INT32
/**
 * Y coordinate of the HUD item (from the top of the screen). Should be a value between 0 and 200.
 */
	y: INT32
/**
 * Video flags of the HUD item (use V_* constants). Note that some flags are always applied for certain HUD items in addition to those that you set here.
 */
	f: INT32
}