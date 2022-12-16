/**
 * Converts the given map number to a map name in MAPXX format, where XX is the extended map number. If no map number is given, the current map's number will be used.

Example: G_BuildMapName(100) will return "MAPA0".
 */
declare function G_BuildMapName(map: int): string
/**
 * Returns the name and act number of map number map.

Example: G_BuildMapTitle(1) will return "Greenflower Zone 1".
 */
declare function G_BuildMapTitle(map: int): string
/**
 * Respawns the player whose player number is playernum. Avoid calling this function directly in Single Player; set the player's player.playerstate to PST_REBORN instead.
 */
declare function G_DoReborn(playernum: int): nil
/**
 * Checks if the required players to exit the level is reached. The requirement depends of playersforexit.
 */
declare function G_EnoughPlayersFinished(): boolean
/**
 * Alternative version:
G_SetCustomExitVars()

Changes the settings that will apply when the current level is exited, but does not actually exit the level. If a value for nextmap is given, it sets the map number the game will change to once the level ends. If skipstats is set to 1 (defaults to 0), the statistics screen will be skipped. If set to 2, it will additionally skip the level end cutscene, if applicable. Calling the function with no arguments will clear the custom settings.
 */
declare function G_SetCustomExitVars(nextmap: int, skipstats: int): nil
/**
 * Immediately exits the level.

If G_SetCustomExitVars was called beforehand, the level will exit using the custom settings set.
 */
declare function G_ExitLevel(): nil
/**
 * Returns true if the map with the given map number is a Special Stage; otherwise returns false. If no map number is given, the current map's number will be used.
 */
declare function G_IsSpecialStage(map: int): boolean
/**
 * Registers a custom gametype into the game. See Custom gametypes for more information on using this function.
 */
declare function G_AddGametype(t: table): nil
/**
 * Returns true if the current gametype uses lives (Single Player, Coop or Competition); otherwise returns false. If in Record Attack or a NiGHTS level, this returns false regardless of gametype.
 */
declare function G_GametypeUsesLives(): boolean
/**
 * Returns true if the current gametype uses the cooplives command, otherwise it returns false.
 */
declare function G_GametypeUsesCoopLives(): boolean
/**
 * Returns true if the current gametype uses the coopstarposts command, otherwise it returns false.
 */
declare function G_GametypeUsesCoopStarposts(): boolean
/**
 * Returns true if the current gametype has teams (Team Match or CTF); otherwise returns false.
 */
declare function G_GametypeHasTeams(): boolean
/**
 * Returns true if the current gametype supports spectators (Match, CTF or Tag); otherwise returns false.
 */
declare function G_GametypeHasSpectators(): boolean
/**
 * Returns true if the current gametype supports firing rings (Match, CTF or Tag) or if ringslinger is enabled; otherwise returns false.
 */
declare function G_RingSlingerGametype(): boolean
/**
 * Returns true if the current gametype is a "platformer" gametype (Single Player, Coop, Race or Competition); otherwise returns false.
 */
declare function G_PlatformGametype(): boolean
/**
 * Returns true if the current gametype is Tag or Hide and Seek; otherwise returns false.
 */
declare function G_TagGametype(): boolean
/**
 * 	To do
Rephrase? See merge request.

Adds a bot to the game. Note: Console commands (COM_BufInsertText) can't be executed as a bot at the moment.
 */
declare function G_AddPlayer(skin: int, color: int, name: string, bottype: int): player_t
/**
 * Removes the bot. (Cannot be applied to human players.)
 */
declare function G_RemovePlayer(playernum: int): nil
/**
 * Converts the given time in tics to hours.
 */
declare function G_TicsToHours(tics: int): int
/**
 * Converts the given time in tics to minutes. By default, this returns only values between 0 and 59, assuming the return value is used for timers with both "hours" and "minutes" displays (e.g., hours:minutes:seconds). If full? is given and set to true, then hours (or multiples of 60 minutes) will not be truncated, allowing for return values over 59. This latter case is used for timers without an "hours" display (e.g., minutes:seconds).
 */
declare function G_TicsToMinutes(tics: int, full?: boolean): int
/**
 * Converts the given time in tics to seconds. This returns only values between 0 and 59, assuming the return value is used for timers with both "minutes" and "seconds" displays (e.g., hours:minutes:seconds).
 */
declare function G_TicsToSeconds(tics: int): int
/**
 * Converts the given time in tics to centiseconds. This returns only values between 0 and 99, assuming the return value is used for timers with both "seconds" and "centiseconds" displays (e.g., minutes:seconds.centiseconds).
 */
declare function G_TicsToCentiseconds(tics: int): int
/**
 * Converts the given time in tics to milliseconds. This returns only values between 0 and 999.
 */
declare function G_TicsToMilliseconds(tics: int): int