/**
 * Starts the given sound effect from origin, or plays the sound globally if origin is nil. If origin exists and has a skin applied, certain sounds may be replaced with custom sounds set for the skin. If in a Mario mode or Christmas NiGHTS level, certain sounds will automatically be swapped with different sounds for the given level type (these take priority over custom skin sounds).

If the third argument is set, the sound will only be played for that player. Otherwise, it will be heard by all players.
 */
declare function S_StartSound(origin: mobj_t, soundnum: int, player?: player_t): nil
/**
 * Starts the given sound effect at a specific volume from origin, or plays the sound globally if origin is nil. If origin exists and has a skin applied, certain sounds may be replaced with custom sounds set for the skin. Unlike S_StartSound, Mario mode and Christmas NiGHTS have no effect on the sound used.

Volume ranges from 0 to 255, inclusive.
 */
declare function S_StartSoundAtVolume(origin: mobj_t, soundnum: int, volume: UINT8, player?: player_t): nil
/**
 * Stops any sound that the given mobj is playing.
 */
declare function S_StopSound(mobj: mobj_t): nil
/**
 * Stops the sound soundnum that mobj may be playing.
 */
declare function S_StopSoundByID(mobj: mobj_t, soundnum: int): nil
/**
 * Alternative version: S_ChangeMusic(int musicslot, [boolean looping?, [player_t player, [int mflags, [int position, [int prefadems, [int fadeinms]]]]])

Changes the music to the specified music name or slot number. The music will loop unless looping? is specified and is false.

mflags can be used to set flags for the music:

If 0x4000 is added to the value, the music track will start from the beginning if you attempt to change the music to the same track, instead of having no effect.
If 0x8000 is added to the value, the music track will be reset when the current level is reloaded.

If the music format supports multiple tracks, you can supply the track number as well – if the new music's name was given, the track number must be added to mflags; if a slot number was given, the track number must be stored in the upper 16 bits (i.e., musicnum == slot number+(track number<<16)). This also means that the value given for mflags will be ignored.

Other features:

position determines the position in the music track to start playing from, measured as a time in milliseconds. If set to 0, the music track will be played from the beginning. Note: Has no effect with music formats supported by the Game Music Emu library.
prefadems determines the time in milliseconds to fade out of the current music track before changing to the new track. If set to 0, no fade out effect will be used.
fadeinms determines the time in milliseconds to fade into the new music track. If set to 0, no fade in effect will be used.

To set a time in seconds for position, prefadems or fadeinms, multiply the time in seconds by the constant MUSICRATE; e.g.: 2*MUSICRATE for 2 seconds.
 */
declare function S_ChangeMusic(musicname: string, looping?: boolean, player?: player_t, mflags?: int, position?: int, prefadems?: int, fadeinms?: int): nil
/**
 * Changes the speed of the music – the speed given must be a multiple of FRACUNIT, where FRACUNIT is the default music speed.

Note that this function only works with music formats supported by the Game Music Emu library. For other music formats, it has no effect.
 */
declare function S_SpeedMusic(musicspeed: fixed_t, player?: player_t): nil
/**
 * Stops all music from playing.
 */
declare function S_StopMusic(player?: player_t): nil
/**
 * Immediately sets the internal volume of the current music track, as a percentage of the user's configured game volume, where 0 is silent and 100 is full volume.

Returns true if the volume change was done for all players or the user's local player, returns false if not.
 */
declare function S_SetInternalMusicVolume(volume: int, player?: player_t): boolean
/**
 * Stops any current fade from running. The music will remain playing at the current internal volume.

Returns true if the fade was done for all players or the user's local player, returns false if not.
 */
declare function S_StopFadingMusic(player?: player_t): boolean
/**
 * Alternative version: S_FadeMusic(int target_volume, int ms, [int source_volume, [player_t player]])

Fades the current music track from source volume to target volume, 0-100%. If source_volume is not specified, the source volume is the current internal volume. ms is the length of the fade, measured in milliseconds. To set a time in seconds, multiply the time in seconds by the constant MUSICRATE; e.g.: 2*MUSICRATE for 2 seconds.

Returns true if the fade was done for all players or the user's local player, returns false if not.
 */
declare function S_FadeMusic(target_volume: int, ms: int, player?: player_t): boolean
/**
 * Fades the current music track from current internal volume to 0%, then stop the music. ms is the length of the fade, measured in milliseconds. To set a time in seconds, multiply the time in seconds by the constant MUSICRATE; e.g.: 2*MUSICRATE for 2 seconds.

Returns true if the fade was done for all players or the user's local player, returns false if not.
 */
declare function S_FadeOutStopMusic(ms: int, player?: player_t): boolean
/**
 * Returns true if a sound effect with mobj as the origin is being played, false if not.


Example:

if S_OriginPlaying(players[0].mo) -- is a sound being played from the player's mobj?
	print("beep!") -- beep if yes
end


Note: This function only checks sounds being played for the local client, and thus isn't network safe. Use at your own risk.
 */
declare function S_OriginPlaying(origin: mobj_t): boolean
/**
 * Returns true if a sound effect with the given ID is being played, false if not.

Example:

if S_IdPlaying(sfx_thok) -- is a thok sound being played at all?
	print("beep!") -- beep if yes
end


Note: This function only checks sounds being played for the local client, and thus isn't network safe. Use at your own risk.
 */
declare function S_IdPlaying(soundnum: int): boolean
/**
 * Returns true if a sound effect with the given ID and mobj as the origin is being played, false if not.

Example:

if S_SoundPlaying(players[0].mo, sfx_thok) -- is a thok sound being played from the player's mobj?
	print("beep!") -- beep if yes
end


Note: This function only checks sounds being played for the local client, and thus isn't network safe. Use at your own risk.
 */
declare function S_SoundPlaying(origin: mobj_t, soundnum: int): boolean
/**
 * If the user has sound captions enabled, this will display the caption caption for the duration specified by lifespan in a similar manner to the captions displayed for Super Sneakers and Invincibility. If player is specified, this will only be displayed for that player.
 */
declare function S_StartMusicCaption(caption: string, lifespan: tic_t, player?: player_t): nil
/**
 * Returns the length of the currently playing music, in milliseconds.

Note: This function only checks the music being played for the local client, and thus isn't network safe. Use at your own risk.
 */
declare function S_GetMusicLength(): int
/**
 * Returns the position of the currently playing music, in milliseconds.

Note: This function only checks the music being played for the local client, and thus isn't network safe. Use at your own risk.
 */
declare function S_GetMusicPosition(): int
/**
 * Sets the position of the currently playing music, in milliseconds. Returns false if no music is playing or a MIDI is currently playing (and therefore the position could not be set), and returns true otherwise. Note that this may still return true in some instances where the position could not be set.
	To do
Verify this is accurate.
 */
declare function S_SetMusicPosition(position: int): boolean
/**
 * 	To do
Everything :3
 */
declare function S_MusicType(): unknown
/**
 * 	To do
Everything :3
 */
declare function S_MusicPlaying(): unknown
/**
 * 	To do
Everything :3
 */
declare function S_MusicPaused(): unknown
/**
 * Returns the current music playing as a string.
 */
declare function S_MusicName(): string
/**
 * Returns true if name music exists in any WAD file loaded, returns false if not.
 */
declare function S_MusicExists(name: string): boolean
/**
 * 	To do
Everything :3
 */
declare function S_SetMusicLoopPoint(): unknown
/**
 * 	To do
Everything :3
 */
declare function S_GetMusicLoopPoint(): unknown
/**
 * 	To do
Everything :3
 */
declare function S_PauseMusic(): unknown
/**
 * 	To do
Everything :3
 */
declare function S_ResumeMusic(): unknown