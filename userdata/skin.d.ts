declare class skin_t extends UserData
{/**
 * Returns true if the skin is valid (i.e., it exists), false if not.
 */
	readonly valid: boolean
/**
 * Returns the internal name string for the skin set by the S_SKIN (e.g., skins["sonic"].name would return "sonic").
 */
	readonly name: string
/**
 * Unusable by Lua – not yet implemented
 */
	#spritedef: unknown
/**
 * Unusable by Lua – not network safe, may differ between clients due to music wads
 */
	#wadnum: unknown
/**
 * Returns the flags given to the skin by the S_SKIN.
 */
	readonly flags: number
/**
 * Returns the displayed name string for the skin set by the S_SKIN (e.g., skins["sonic"].realname would return "Sonic").
 */
	readonly realname: string
/**
 * Returns the HUD name string for the skin set by the S_SKIN (e.g., skins["knuckles"].hudname would return "K.T.E").
 */
	readonly hudname: string
/**
 * Returns the primary ability number for the skin set by the S_SKIN. (see CA_* constants)
 */
	readonly ability: UINT8
/**
 * Returns the secondary ability number for the skin set by the S_SKIN. (see CA2_* constants)
 */
	readonly ability2: UINT8
/**
 * Returns the thok item Object type for the skin set by the S_SKIN. (note that this can be -1, which is expected to be changed to MT_THOK by default; otherwise, see MT_* constants)
 */
	readonly thokitem: INT32
/**
 * Returns the spin item Object type for the skin set by the S_SKIN. (note that this can be -1, which is expected to be changed to MT_THOK by default; otherwise, see MT_* constants)
 */
	readonly spinitem: INT32
/**
 * Returns the rev item Object type for the skin set by the S_SKIN. (note that this can be -1, which is expected to be changed to MT_THOK by default; otherwise, see MT_* constants)
 */
	readonly revitem: INT32
/**
 * Returns the follow item Object type for the skin set by the S_SKIN (see MT_* constants).
 */
	readonly followitem: INT32
/**
 * Returns the ability speed for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly actionspd: fixed_t
/**
 * Returns the minimum spindashing speed for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly mindash: fixed_t
/**
 * Returns the maximum spindashing speed for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly maxdash: fixed_t
/**
 * Returns the maximum movement speed for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly normalspeed: fixed_t
/**
 * Returns the speed to switch to running animations for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly runspeed: fixed_t
/**
 * Returns the thrust factor value for the skin set by the S_SKIN.
 */
	readonly thrustfactor: UINT8
/**
 * Returns the starting acceleration value for the skin set by the S_SKIN.
 */
	readonly accelstart: UINT8
/**
 * Returns the acceleration value for the skin set by the S_SKIN.
 */
	readonly acceleration: UINT8
/**
 * Returns the jump thrust factor for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly jumpfactor: fixed_t
/**
 * Returns the radius value of a hitbox for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly radius: fixed_t
/**
 * Returns the height value of a hitbox for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly height: fixed_t
/**
 * Returns the spinheight of a hitbox for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly spinheight: fixed_t
/**
 * Returns the scale of a shield's sprite size for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly shieldscale: fixed_t
/**
 * Returns the scale of the camera's position for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly camerascale: fixed_t
/**
 * Returns the starting palette color # for the changeable 16-color range for the skin set by the S_SKIN (startcolor).
 */
	readonly starttranscolor: UINT8
/**
 * Returns the default skincolor for use in Single player for the skin set by the S_SKIN. (see SKINCOLOR_* constants).
 */
	readonly prefcolor: UINT8
/**
 * Returns the skincolor for the signpost background for the skin set by the S_SKIN. (see SKINCOLOR_* constants).
 */
	readonly prefoppositecolor: UINT16
/**
 * Returns the default skincolor for a character's Super form for the skin set by the S_SKIN. (see SKINCOLOR_* constants).
 */
	readonly supercolor: UINT16
/**
 * Returns the relative scale to display sprites at for the skin set by the S_SKIN (this will be the S_SKIN's value multiplied by FRACUNIT).
 */
	readonly highresscale: fixed_t
/**
 * Returns the value for the continue screen animation speed for the skin set by the S_SKIN.
 */
	readonly contspeed: UINT8
/**
 * Returns the value for the inital angle on the continue screen for the skin set by the S_SKIN.
 */
	readonly contangle: UINT8
/**
 * Returns the value for the unlockable entry required to access and play a character for the skin set by the S_SKIN.
 */
	readonly availability: UINT8
/**
 * A table containing all of the corresponding sound numbers for all skinsound slots for the skin, where SKSNAME is an integer that is expected to be one of the SKS* constants. For example, skins["sonic"].soundsid[SKSTHOK] returns sfx_thok, the default sound for the SKSTHOK skinsound slot; for custom characters who may have a custom sound set for any of the skin sounds, this returns the sound number for the custom sound instead.
 */
	readonly soundsid: Array<number>
}