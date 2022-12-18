/**
 * @noSelf
 * These are functions included in SRB2's input library. They relate to client-side input events and are all prefixed with input. The keynum or keyname arguments required for some of these functions are obtainable from keyevent_t variables provided by KeyUp or KeyDown hooks.
 */
declare namespace input
{
    /**
     * Returns whether the game control gc (a GC_* constant) is currently pressed for the first player. 
     */
    export function gameControlDown(gc: int): boolean
    /**
     * Returns whether the game control gc (a GC_* constant) is currently pressed for the second player. 
     */
    export function gameControl2Down(gc: int): boolean
    /**
     * Returns the numbers of the keys bound to the game control gc (a GC_* constant) for the first player. 
     */
    export function gameControlToKeyNum(gc: int): LuaMultiReturn<[int,int]>
    /**
     * Returns the numbers of the keys bound to the game control gc (a GC_* constant) for the second player. 
     */
    export function gameControl2ToKeyNum(gc: int): LuaMultiReturn<[int,int]>
    /**
     * Returns the first player's joystick's position on the axis specified by axissel (a JA_* constant). 
     */
    export function joyAxis(axissel: int): int
    /**
     * Returns the second player's joystick's position on the axis specified by axissel (a JA_*) constant). 
     */
    export function joy2Axis(axissel: int): int
    /**
     * Returns the name of the key specified by the key number keynum. 
     */
    export function keyNumToName(keynum: int): string
    /**
     * Returns the number of the key specified by the key name keyname. 
     */
    export function keyNameToNum(keyname: string): int
    /**
     * Returns whether the key specified by the key number keynum corresponds to a printable character. 
     */
    export function keyNumPrintable(keynum: string): boolean
    /**
     * Returns the capitalized form of key number keynum. 
     */
    export function shiftKeyNum(keynum: string): int
    /**
     * Returns whether the first player's mouse is grabbed (locked and invisible) by the window. 
     */
    export function getMouseGrab(): boolean
    /**
     *  	Sets whether the first player's mouse is grabbed (locked and invisible) by the window. The mouse is automatically grabbed by the game in situations where it deems appropriate, so in order to keep the mouse ungrabbed this function may need to be called constantly. 
     */
    export function setMouseGrab(grab: boolean): nil
    /**
     * Returns the position of the cursor relative to the top-left corner of the window. 
     */
    export function getCursorPosition(): LuaMultiReturn<[int,int]>
}