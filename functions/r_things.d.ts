/**
 * Returns the text character's frame number.

Example: R_Char2Frame("A") will return 0.
 */
declare function R_Char2Frame(char: string): int
/**
 * Returns the frame number's text character as both a string and its ASCII value.

Example: R_Frame2Char(0) will return "A",65.
 */
declare function R_Frame2Char(frame: int): LuaMultiReturn<[string,int]>
/**
 * Sets the player's skin. skin can be either a skin number or a skin name string.
 */
declare function R_SetPlayerSkin(player: player_t, skin: int | string): nil
/**
 * Checks if skin is legal to switch to and returns true if so. Accounts for factors such as map forcecharacter and multiplayer forceskin.
 */
declare function R_SkinUsable(player: player_t, skin: int | string): boolean