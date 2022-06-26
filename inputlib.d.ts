/** @noSelf **/
declare namespace input
{
    export function gameControlDown(gc: int): boolean
    export function gameControl2Down(gc: int): boolean
    export function gameControlToKeyNum(gc: int): LuaMultiReturn<[int,int]>
    export function gameControl2ToKeyNum(gc: int): LuaMultiReturn<[int,int]>
    export function joyAxis(axissel: int): int
    export function joy2Axis(axissel: int): int
    export function keyNumToName(keynum: int): string
    export function keyNameToNum(keyname: string): int
    export function keyNumPrintable(keynum: string): boolean
    export function shiftKeyNum(keynum: string): int
    export function getMouseGrab(): boolean
    export function setMouseGrab(grab: boolean): nil
    export function getCursorPosition(): LuaMultiReturn<[int,int]>
}

declare const gamekeydown: boolean[]