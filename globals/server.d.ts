/**
The map number of the map currently being played.
*/
declare const gamemap: number
/**
The TypeOfLevel of the map currently being played. See Constants > TypeOfLevel flags.
*/
declare const maptol: number
/**
The game's current \"state\". See Constants > Game states.
*/
declare const gamestate: number
/**
Returns true if playing in Ultimate mode, false if not.
*/
declare const ultimatemode: boolean
/**
Returns true if the map is in Mario mode, false if not.
*/
declare const mariomode: boolean
/**
Returns true if the map is in 2D mode, false if not.
*/
declare const twodlevel: boolean
/**
Returns true if the map is a Circuit map, false if not.
*/
declare const circuitmap: boolean
/**
Returns true if the timer was stopped, false if not.
*/
declare var stoppedclock: boolean
/**
Returns true if currently in a netgame, false if not.
*/
declare const netgame: boolean
/**
Returns true if currently playing a multiplayer game, false if not.
*/
declare const multiplayer: boolean
/**
Returns true if playing in Record Attack or NiGHTS Mode, false if not.
*/
declare const modeattacking: boolean
/**
Returns true if playing in two-player mode, false if not.
*/
declare const splitscreen: boolean
/**
Returns true if the game has been completed in the current savefile, false if not.
*/
declare const gamecomplete: boolean
/**
The current Marathon Mode flags. See Constants > Marathon Mode flags.
*/
declare const marathonmode: number
/**
Returns true if the game is being run with the command line parameter -debug, false if not.
*/
declare const devparm: boolean
/**
Returns true if the game has been modified and the modification does not have a custom gamedata file, false if not.
*/
declare const modifiedgame: boolean
/**
Returns true if a menu is currently active, false if not.
*/
declare const menuactive: boolean
/**
Returns true if the game is currently paused, false if not.
*/
declare const paused: boolean
/**
The number of Blue Team score have in Team Match and CTF.
*/
declare var bluescore: number
/**
The number of Red Team score have in Team Match and CTF.
*/
declare var redscore: number
/**
The time limit before a round ends.
*/
declare const timelimit: number
/**
The number of points required before a round can end.
*/
declare const pointlimit: number
/**
The map number of the first map in the Single Player campaign.
*/
declare const spstage_start: number
/**
The map number of the first map of Marathon Mode.
*/
declare const spmarathon_start: number
/**
The map number of the first Single Player Special Stage.
*/
declare const sstage_start: number
/**
The map number of the final Single Player Special Stage, including the unlockable Black Hole Zone. This will always be equal to sstage_start + 7.
*/
declare const sstage_end: number
/**
The map number of the first Coop Special Stage.
*/
declare const smpstage_start: number
/**
The map number of the final Coop Special Stage. This will always be equal to smpstage_start + 6.
*/
declare const smpstage_end: number
/**
The map number used as the background for the title screen.
*/
declare const titlemap: number
/**
Returns true if a titlemap is currently active, false if not.
*/
declare const titlemapinaction: boolean
/**
The map number to warp to immediately when starting the game.
*/
declare const bootmap: number
/**
The map number of the tutorial map.
*/
declare const tutorialmap: number
/**
Returns true if playing in tutorial mode, false if not.
*/
declare const tutorialmode: boolean
/**
The skin color of the Red Team in Team Match and CTF.
*/
declare var skincolor_redteam: number
/**
The skin color of the Blue Team in Team Match and CTF.
*/
declare var skincolor_blueteam: number
/**
The skin color of the Red Team thrown ring in Team Match and CTF.
*/
declare var skincolor_redring: number
/**
The skin color of the Blue Team thrown ring in Team Match and CTF.
*/
declare var skincolor_bluering: number
/**
How long the Invincibility power-up lasts for.
*/
declare const invulntics: number
/**
How long the Super Sneakers power-up lasts for.
*/
declare const sneakertics: number
/**
How long a player flashes and is invincible after taking damage.
*/
declare const flashingtics: number
/**
How long Tails can fly before getting tired.
*/
declare const tailsflytics: number
/**
How long the player can stay underwater before drowning.
*/
declare const underwatertics: number
/**
How long the player can survive in a space countdown before suffocating
*/
declare const spacetimetics: number
/**
How long the extra life music plays.
*/
declare const extralifetics: number
/**
How long it takes for a NiGHTS link to fade out.
*/
declare const nightslinktics: number
/**
How long the game stays at a Game Over screen before switching to the continue screen or the title screen.
*/
declare const gameovertics: number
/**
How long the ammo removal warning will be displayed when shooting a weapon ring without regular rings in Match and related gametypes.
*/
declare const ammoremovaltics: number
/**
The current gametype being played. See Constants > Gametypes.
*/
declare const gametype: number
/**
The rules of the current gametype being played as a set of GTR_* flags. See Game modes > Custom gametypes.
*/
declare const gametyperules: number
/**
The amount of time that has passed in the current level since it has been loaded, measured in tics. In most gametypes, this is normally equal to the time displayed on the HUD (when converted to tics). However, in Race and Competition modes, leveltime includes the 4-second pre-timer, meaning that leveltime will be 4*TICRATE tics ahead of the HUD's displayed time once the latter has started running. Note that leveltime will continue to increase after the level is finished, even after the HUD time has stopped, until the tally screen appears. The actual time displayed on the player's HUD is set by player.realtime (see player_t).
*/
declare const leveltime: number
/**
Time of how long the special stage can last for, in tics. Default is 90*TICRATE (90 seconds).
*/
declare const sstimer: number
/**
The current weather type set globally.
*/
declare const globalweather: number
/**
The current sky set globally.
*/
declare const globallevelskynum: number
/**
The server's host player.
*/
declare const server: player_t
/**
This variable stores which Chaos Emeralds have been obtained in the current Single Player or Co-op session, as a set of EMERALDn flags. See Chaos Emerald > Technical information.
*/
declare var emeralds: number
/**
The number of Special Stage Tokens collected in the current level.
*/
declare var token: number
/**
The current global gravity value. The default value is FRACUNIT/2.
*/
declare var gravity: number