declare class state_t extends UserData
{/**
 * SpriteName: Sprite prefix number used for the state.
 */
	sprite: number
/**
 * SpriteFrame: Frame number of the sprite used for the state; also contains full brightness/translucency information. (See tr_* and FF_* constants)
 */
	frame: UINT32
/**
 * Duration: Duration of the state, in tics. -1 is infinite, 0 is instantaneous.
 */
	tics: INT32
/**
 * Action: The action used by the state, run when an Object switches to the state. Can be set to a pre-existing action, or a custom one created using Lua, or be just nil if none is set. The return value is the function the action calls.
 */
	action: LuaFunction
/**
 * Var1: The Var1 value built-in to be used by state.action, when an Object first switches to the state.
 */
	var1: INT32
/**
 * Var2: The Var2 value built-in to be used by state.action, when an Object first switches to the state
 */
	var2: INT32
/**
 * Next: The next state number to go to after the state has finished being used. A state.nextstate of S_NULL will make the Object using the current state be removed from the map when about to switch to the new state.
 */
	nextstate: number
}