/**
The current weather type set locally.
*/
declare const curWeather: number
/**
The current sky set locally.
*/
declare const levelskynum: number
/**
The name of the main music track currently used for playback, if there is no active jingle track being played back. This is by default the music set by current map's level header, but it will be modified when the console command tunes is used, or linedef type 413 is executed in the map. Note: if a jingle track is active, this does not change to the name of the currently playing jingle music track. S_ChangeMusic also does not modify this variable.
*/
declare var mapmusname: string
/**
The flags set for the main music track currently used for playback, if there is no active jingle track being played back:
The lowest 12 bits (bits 0–11) are the subtrack number; this can be retrieved by checking mapmusflags & 0x0FFF
If the 14th bit (mapmusflags & 0x4000) is set, the music track will start from the beginning if you attempt to change the music to the same track, instead of having no effect
If the 15th bit (mapmusflags & 0x8000) is set, the music track will be reset when the current level is reloaded.

Note: if a jingle track is active, this does not change to the flags set for the currently playing jingle track. S_ChangeMusic also does not modify this variable.
*/
declare var mapmusflags: number
/**
Position in which the music starts at.
*/
declare const mapmusposition: number
/**
The local player.
*/
declare const consoleplayer: player_t
/**
The player visible on screen.
*/
declare var displayplayer: player_t
/**
The secondary player, when splitscreen mode is active.
*/
declare const secondarydisplayplayer: player_t
/**
Returns true if the game is hosting a server, false if not.
*/
declare const isserver: boolean
/**
Returns true if the game is a dedicated server, false if not.
*/
declare const isdedicatedserver: boolean
/**
The primary camera in-game.
*/
declare const camera: camera_t
/**
The secondary camera in-game, only on splitscreen.
*/
declare const camera2: camera_t
/**
The first player's mouse.
*/
declare const mouse: mouse_t
/**
The second player's mouse.
*/
declare const mouse2: mouse_t