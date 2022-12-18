/**
 * Outputs text in the console. Each output string will be separated into different lines.

Certain ASCII characters will have special effects when printed out to the console by this function. These can either be given using decimal (\nnn) or hexadecimal codes (\xnn or \xnnnn). For example, \130 and \x82 will both cause text following the code to turn yellow. See Lua > Special characters for a list of these.
 */
declare function print(output: string, ...output2: string[]): nil
/**
 * Outputs text in the chat window (or the console if it cannot be output in the chat window). Each output string will be separated into different lines. If sound is set to true (defaults to false), a sound will be played when sent.

Certain ASCII characters will have special effects when printed out to the chat window or console by this function. These can either be given using decimal (\nnn) or hexadecimal codes (\xnn or \xnnnn).For example, \130 and \x82 will both cause text following the code to turn yellow. See Lua > Special characters for a list of these.
 */
declare function chatprint(output: string, sound: boolean): nil
/**
 * Outputs text in the chat window (or the console if it cannot be output in the chat window). Unlike chatprint, the text will only be output for the player supplied in player. Each output string will be separated into different lines. If sound is set to true (defaults to false), a sound will be played when sent.

Certain ASCII characters will have special effects when printed out to the chat window or console by this function. These can either be given using decimal (\nnn) or hexadecimal codes (\xnn or \xnnnn). For example, \130 and \x82 will both cause text following the code to turn yellow. See Lua > Special characters for a list of these.
 */
declare function chatprintf(player: player_t, output: string, sound: boolean): nil
/**
 * Automatically initializes a new named resource based on the name given, declaring the name for the next freeslot available for the appropriate resource type. (e.g.: "MT_NEWOBJECT" will add a new Object type). (See Freeslot for more information.) This function will return the integer representing each resource successfully allocated; unsuccessful allocations will not be returned (e.g. one failed freeslot allocation out of a list of four will only return the successful three).

Example: freeslot("MT_NEWOBJECT", "S_NEWSTATE") will return MT_NEWOBJECT, S_NEWSTATE.

Note: Resources that begin with MT_ (Object type), S_ (state), or SPR_ must be in all capital letters, while sfx_ resources must be all lowercase.
 */
declare function freeslot(resource: FreeslotName, ...resource2: FreeslotName[]): int
type FreeslotName = `MT_${Uppercase<string>}` | `S_${Uppercase<string>}` | `SPR_${Uppercase<string>}` | `sfx_${Lowercase<string>}`
declare type HookMap = {
	"IntermissionThinker": (this: void,) => void
	"KeyDown": (this: void,keyevent: keyevent_t) => boolean | nil | void
	"KeyUp": (this: void,keyevent: keyevent_t) => boolean | nil | void
	"LinedefExecute": (this: void,line: line_t,mobj: mobj_t,sector: sector_t) => void
	"MapChange": (this: void,mapnum: int) => void
	"MapLoad": (this: void,mapnum: int) => void
	"ThinkFrame": (this: void,) => void
	"PreThinkFrame": (this: void,) => void
	"PostThinkFrame": (this: void,) => void
	"GameQuit": (this: void,) => void
	"BotAI": (this: void,player: mobj_t,bot: mobj_t) => LuaMultiReturn<[boolean,boolean,boolean,boolean,boolean,boolean,boolean,boolean]> | {forward: boolean,backward: boolean, left: boolean,right: boolean,strafeleft: boolean,straferight: boolean,jump: boolean,spin: boolean}
	"BotTiccmd": (this: void,bot: player_t,cmd: ticcmd_t) => boolean | nil | void
	"BotRespawn": (this: void,player: player_t,bot: mobj_t) => boolean | nil | void
	"HurtMsg": (this: void,player: player_t,inflictor: mobj_t,source: mobj_t) => boolean | nil | void
	"NetVars": (this: void,network: <Arg>(sync: Arg) => Arg) => void
	"PlayerJoin": (this: void,playernum: int) => void
	"PlayerMsg": (this: void,source: player_t,type: int,target: player_t,msg: string) => boolean | nil | void
	"PlayerQuit": (this: void,player: player_t,reason: int) => void
	"TeamSwitch": (this: void,player: player_t,team: int,fromspectators: boolean,autobalance: boolean,scramble: boolean) => boolean | nil | void
	"ViewpointSwitch": (this: void,player: player_t,nextviewedplayer: player_t,forced: boolean) => boolean | nil | void
	"SeenPlayer": (this: void,player: player_t,seenplayer: player_t) => boolean | nil | void
	"AbilitySpecial": (this: void,player: player_t) => boolean | nil | void
	"JumpSpecial": (this: void,player: player_t) => boolean | nil | void
	"JumpSpinSpecial": (this: void,player: player_t) => boolean | nil | void
	"SpinSpecial": (this: void,player: player_t) => boolean | nil | void
	"BossDeath": (this: void,mobj: mobj_t) => boolean | nil | void
	"BossThinker": (this: void,mobj: mobj_t) => boolean | nil | void
	"FollowMobj": (this: void,player: player_t,followmobj: mobj_t) => boolean | nil | void
	"MapThingSpawn": (this: void,mobj: mobj_t,mapthing: mapheader_t) => boolean | nil | void
	"MobjCollide": (this: void,thing: mobj_t,tmthing: mobj_t) => boolean | nil | void
	"MobjLineCollide": (this: void,mobj: mobj_t,line: line_t) => boolean | nil | void
	"MobjDamage": (this: void,target: mobj_t,inflictor: mobj_t,source: mobj_t,damage: int,damagetype: int) => boolean | nil | void
	"MobjDeath": (this: void,target: mobj_t,inflictor: mobj_t,source: mobj_t,damagetype: int) => boolean | nil | void
	"MobjFuse": (this: void,mobj: mobj_t) => boolean | nil | void
	"MobjMoveBlocked": (this: void,mobj: mobj_t,thing: mobj_t,line: line_t) => boolean | nil | void
	"MobjMoveCollide": (this: void,tmthing: mobj_t,thing: mobj_t) => boolean | nil | void
	"MobjRemoved": (this: void,mobj: mobj_t) => boolean | nil | void
	"MobjSpawn": (this: void,mobj: mobj_t) => boolean | nil | void
	"MobjThinker": (this: void,mobj_t: mobj_t) => boolean | nil | void
	"PlayerThink": (this: void,player: player_t) => void
	"PlayerCanDamage": (this: void,player: player_t,mobj: mobj_t) => boolean | nil | void
	"PlayerSpawn": (this: void,player: player_t) => void
	"PlayerCmd": (this: void,player: player_t,cmd: ticcmd_t) => void
	"PlayerHeight": (this: void,player: player_t) => fixed_t
	"PlayerCanEnterSpinGaps": (this: void,player: player_t) => boolean | nil | void
	
}
/**
 * Binds a function to a hook (i.e., the function will be run when a particular event happens). See Lua/Hooks for more information on using this function.
 */
declare function addHook<HookName extends keyof HookMap>(hook: HookName, fn: HookMap[HookName], extra?: int | string): nil
/**
 * Only use this inside of an overridden A_ action. Calls the original version of the action.
 */
// declare function super(actor: mobj_t, var1: int, var2: int): nil
/**
 * Returns true if the player has been given administrative privileges by the server via the promote command, or has logged as an admin via a preset password; false if not. Note that the host themselves will not necessarily return true to this function, since their administrative powers are there by default.
 */
declare function IsPlayerAdmin(player: player_t): boolean
/**
 * Returns the userdata type of v as a string.

Possible strings that may be returned by this function:

"unknown"
"state_t"
"mobjinfo_t"
"sfxinfo_t"
"skincolor_t"
"skincolor_t.ramp"
"spriteinfo_t"
"spriteframepivot_t[]"
"spriteframepivot_t"
"taglist"
"mobj_t"
"mapthing_t"
"player_t"
"ticcmd_t"
"skin_t"
"player_t.powers"
"skin_t.soundsid"
"skin_t.sprites"
"skin_t.sprites[]"
"vertex_t"
"line_t"
"side_t"
"subsector_t"
"sector_t"
"ffloor_t"
"pslope_t"
"vector2_t"
"vector3_t"
"mapheader_t"
"polyobj_t"
"consvar_t"
"sector_t.lines"
"sector_t.taglist"
"line_t.sidenum"
"line_t.args"
"line_t.stringargs"
"mapthing_t.args"
"mapthing_t.stringargs"
"bbox"
"hudinfo_t"
"patch_t"
"colormap"
"camera_t"
"action"
"luabanks[]"
 */
declare function userdataType(v: any): string
/**
 * Reserves and then returns a luabanks array.

Luabanks is a method to save and load custom information in a savefile.
The indexes 0 through 15 in the luabanks array contains UINT32 integers, which are freely modifiable by the modder.

When reserved in an addon with custom gamedata, this array is automatically updated when a save file is loaded, and saved alongside the normal save information when the game writes the save to a file, akin to saving the emeralds collected in a save.

Trying to call this function in a hook or otherwise calling it more than once, including if another mod has already called it before, will result in an error. As such, only one luabanks mod can be loaded in at any one time.
 */
declare function reserveLuabanks(): UINT32[]
/**
 * 	To do
Rephrase. See merge request for original description.

Registers the metatable metatable.

Currently, tables passed through NetVars hooks or stored in custom player/mobj fields will not keep their metatable, because SRB2 does not keep track of them by default.

This issue can be solved by calling this function during script loading to have SRB2 register the given metatable, in such a way that the tables/userdata this metatable is attached to (via setmetatable()) will not lose their metatable when sent to a client connecting to the server.
 */
declare function registerMetatable(metatable: table): nil
/**
 * 	To do
Rephrase? See merge request.

Returns a modified value of SDL's high resolution counter.

This is used as a profiling timer function: Two values returned by this function can be substracted from each other to find out how much time (in microseconds) is between them. This can be used to measure the performance of Lua code, and as such shouldn't be used for anything else other than performance measurements.

Warning about OpenGL and HUD hooks: measuring Lua API calls that contain OpenGL API calls can give unreliable/confusing results because of the asynchronous nature of OpenGL. This applies to measuring HUD drawing functions in OpenGL mode.

Example:

-- Get the time before the code to be profiled
local first = getTimeMicros()

-- Run a slow function/block, like:
local nums = {}
for i = 1,10000 do
	nums[i] = 0 
	
	for j = 1,i do
		nums[j] = $ + 1
	end
end

-- Get the time after the code to be profiled
local second = getTimeMicros()

-- Substract the newest time against the oldest time
local result = second - first
-- This result will represent the time between [first] and [second], in microseconds

 */
declare function getTimeMicros(): int