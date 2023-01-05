declare class player_t extends UserData
{/**
 * Returns true if the player is valid (i.e., still exists), false if not.
 */
	readonly valid: boolean
/**
 * The player's name.
 */
	readonly name: string
/**
 * Points to the mobj_t data representing the player Object.

Note: By default, player.mo is a pre-determined Object of the type MT_PLAYER. It is possible to change player.mo to a different Object of any type, but not to nil. However, it is not recommended to use a different Object type than MT_PLAYER – the sprites for the player's character will still appear when walking, running, etc. regardless of the Object's type, and the player may also not behave properly when using particular special map effects if they are not using an MT_PLAYER Object.

If the player is currently a spectator, player.mo will return nil.
 */
	mo: mobj_t
/**
 * Points to the mobj_t data representing the player Object. However unlike player.mo, it won't return nil if the player is a spectator
 */
	realmo: mobj_t
/**
 * Points to the player's button information, i.e., what buttons are currently being pressed. Properties of this can be modified freely, but player.cmd itself cannot be assigned a new value.
 */
	readonly cmd: ticcmd_t
/**
 * The player's current player state (either living, dead or respawned).
 */
	playerstate: number
/**
 * The scale of the third-person camera's distance from the player. This is normally set from the relevant value of a character's S_SKIN.
 */
	camerascale: fixed_t
/**
 * The scale of this player's Shield orbs. This is normally set from the relevant value of a character's S_SKIN.
 */
	shieldscale: fixed_t
/**
 * The player's absolute viewing height (or viewing Z position) used by the first-person camera. The game will automatically update this variable every tic; the exact calculation used depends on the player's gravity direction:
Normal gravity: player.mo.z + player.viewheight + (bobbing displacement)
Reverse gravity: player.mo.z + player.mo.height - player.viewheight + (bobbing displacement)

In both cases, (bobbing displacement) is a displacement value calculated using player.bob, which causes the player's view to appear to "bob" up and down as they walk. It is only added if the player is on the ground and using the first-person camera.

Note: If not modified by Lua, this value is only calculated by the game for local players, and thus isn't network safe. Use at your own risk.
 */
	viewz: fixed_t
/**
 * The player's relative viewing height used by the first-person camera. This is normally set to the value of the console variable viewheight (scaled to the player's current scale), though sometimes it may be reduced for effects such as landing on the ground – in these cases, player.deltaviewheight is used to gradually return player.viewheight to its normal value.

Note: If not modified by Lua, this value is only calculated by the game for local players, and thus isn't network safe. Use at your own risk.
 */
	viewheight: fixed_t
/**
 * The value to re-adjust player.viewheight by the next tic when it has moved away from the normal height (e.g., when landing on the ground, the viewheight dips a bit then rises back up – both the lowering and rising is done by player.deltaviewheight).

Note: If not modified by Lua, this value is only calculated by the game for local players, and thus isn't network safe. Use at your own risk.
 */
	deltaviewheight: fixed_t
/**
 * The current range of the player's "bobbing" displacement used by the first-person camera, relative to the base viewing height. The value of this variable normally depends on the player's current speed:
player.bob = (FixedMul(player.rmomx,player.rmomx)­ + FixedMul(player.rmomy­,player.rmomy­))/4


The actual bobbing displacement calculated for player.viewz oscillates between -(player.bob/2) and +(player.bob/2). The maximum value for player.bob itself is 16*FRACUNIT.

Note: If not modified by Lua, this value is only calculated by the game for local players, and thus isn't network safe. Use at your own risk.
 */
	bob: fixed_t
/**
 * The angle at which to roll the player's view — 0 is default, and positive angles roll the view clockwise. This is usually a purely cosmetic effect, but players in NiGHTS mode will have their controls adjusted to the rolled view as well.
 */
	viewrollangle: angle_t
/**
 * The player's current vertical viewing angle; player.aiming = 0 would be facing directly forward, player.aiming > 0 would face upwards, and player.aiming < 0 would face downwards. If player.pflags has the flag PF_FLIPCAM, the value of player.aiming will be flipped whenever the player is given reverse gravity or reverts back to normal gravity.

Note: This value is limited to a maximum of ANGLE_90 -1 in either direction; however, the Software renderer limits what is seen in-game to ANGLE_90 - ANG10.
 */
	aiming: angle_t
/**
 * The absolute angle at which the player will be drawn. 0 is East, ANGLE_90 is North, ANGLE_180 is West, and ANGLE_270 is South. This is usually purely a visual effect, but has some gameplay implications, such as affecting the direction of Amy's heart projectiles.
 */
	drawangle: angle_t
/**
 * The amount of rings the player possesses.
 */
	rings: INT16
/**
 * The amount of spheres the player possesses.
 */
	spheres: INT16
/**
 * The player's "pity" hit counter for Match/CTF modes; normally when player.pity reaches 3 or above, this will spawn a Pity Shield around the player and player.pity will be reset to 0.
 */
	pity: SINT8
/**
 * The weapon the player currently has selected to be fired (use WEP_* constants)
 */
	currentweapon: INT32
/**
 * Contains all the weapons the player is currently able to use, stored as flags (use RW_* constants)
 */
	ringweapons: INT32
/**
 * The amount of ammo being removed from the player's current weapon in Ringslinger modes. This is used in combination with ammoremovaltimer and ammoremovalweapon to display the ammo removal penalty text on the HUD.
 */
	ammoremoval: UINT16
/**
 * The amount of tics to display the ammo removal penalty text on the HUD.
 */
	ammoremovaltimer: tic_t
/**
 * The weapon on which to display the ammo removal penalty text on the HUD.
 */
	ammoremovalweapon: INT32
/**
 * A table containing the current values for all powers for the player, where powername is an integer expected to be one of the pw_* constants. The table itself cannot be directly reassigned, but entries in it can be accessed or modified. Use of the values depends on the power selected – see the A_CustomPower article for more information on each power.

Example usages of this variable:

player.powers[pw_super] = 0
player.powers[pw_invulnerability] = 20*TICRATE
player.powers[pw_shield] = ($1 & ~SH_NOSTACK)|SH_WHIRLWIND

 */
	powers: Array<UINT16>
/**
 * Contains the internal player flags currently applied to the player, e.g., PF_JUMPED for when the player is currently jumping.
 */
	pflags: number
/**
 * The player's current animation – in the source code, this variable is frequently used as a shortcut in place of explicitly checking a range of states for each player animation (e.g., PA_WALK covers a state S_PLAY_WALK). This can also be modified to allow for custom states to act as if they were the animation for certain extra effects to work with them. Do note that player.panim is corrected every time the player's state is changed.
 */
	panim: number
/**
 * Amount of time the player is set to the palette set by player.flashpal. P_FlashPal can be used to set this along with player.flashpal.
 */
	flashcount: UINT16
/**
 * Sets the palette number displayed on the screen for the player. player.flashcount also has to be set for this to have any affect when modified. P_FlashPal can be used to set this along with player.flashcount.
 */
	flashpal: UINT16
/**
 * The player's current skin number. In multiplayer, it is the player's chosen skin selected in the Player Setup menu or through the console variable skin.

It is important to note that player.skin is not the actual skin displayed in-game (which would be player.mo.skin), but a backup skin variable for the game to reference for drawing the lives display and the player's icon on the multiplayer scoreboard.

Use R_SetPlayerSkin to set this to a different value. However, in almost every case, it's better to use player.mo.skin.

	To do
Verify this is accurate.
 */
	readonly skin: INT32
/**
 * The player's "normal" skin color (SKINCOLOR_* constants are to be used). In Single Player, this is basically a copy of the prefcolor set for the player's character; in multiplayer, it is the player's chosen skin color selected in the Player Setup menu or through the console variable color.

It is important to note that player.skincolor is not the actual skin color displayed in-game (which would be player.mo.color), but a backup skin color variable for player.mo.color to reference – this is useful for when the player has turned Super or collected a power-up that changes their skin color (e.g., the Fire Flower, or Mario mode's invincibility), where player.skincolor can then be used to restore the player's "normal" skin color when they are no longer Super or have lost the power-up.

For instance, when the player has collected a Fire Flower powerup, player.mo.color is changed to SKINCOLOR_WHITE, while player.skincolor remains the original skin color the player had before. Afterwards, if the player lost this power-up, player.mo.color is re-set to the value of player.skincolor, restoring the player's original skin color.
 */
	skincolor: number
/**
 * The player's current score. In most cases, this should be modified using P_AddPlayerScore to account for limits, extra life bonuses, Team Match team scores and NiGHTS mode.
 */
	score: UINT32
/**
 * A counter for the player's dashmode ability. By default this counter is incremented by 1 each tic, until it exceeds 3*TICRATE at which point the player will enter into their dashmode state. This variable can be used to check if player is using the ability set by their skin flags SF_DASHMODE (see S_SKIN).

For example: if player.dashmode > 3*TICRATE - This would check if the player is in dashmode.
 */
	dashmode: tic_t
/**
 * The thrust speed currently charged up for the player's spindash. Normally, this has a value of zero; while the Spin key control is being held down, however, it will slowly increase its value. During the latter phase, player.mindash and player.maxdash are the minimum and maximum values that player.dashspeed can possibly have. When the Spin key is released, player.dashspeed becomes the final speed the player's spindash is released at; after this occurs, player.dashspeed itself is reset to zero.
 */
	dashspeed: fixed_t
/**
 * The player's current normalspeed value for the character skin used. This is a copy of the skin's actual normalspeed value from the S_SKIN (multiplied by FRACUNIT) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	normalspeed: fixed_t
/**
 * The player's current runspeed value for the character skin used. This is a copy of the skin's actual runspeed value from the S_SKIN (multiplied by FRACUNIT) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	runspeed: fixed_t
/**
 * The player's current thrustfactor value for the character skin used. This is a copy of the skin's actual thrustfactor value from the S_SKIN and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	thrustfactor: UINT8
/**
 * The player's current accelstart value for the character skin used. This is a copy of the skin's actual accelstart value from the S_SKIN and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	accelstart: UINT8
/**
 * The player's current acceleration value for the character skin used. This is a copy of the skin's actual acceleration value from the S_SKIN and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	acceleration: UINT8
/**
 * The player's current ability value for the character skin used (CA_* constants should be used). This is a copy of the skin's actual ability value from the S_SKIN and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	charability: UINT8
/**
 * The player's current ability2 value for the character skin used (CA2_* constants should be used). This is a copy of the skin's actual ability2 value from the S_SKIN and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	charability2: UINT8
/**
 * The player's current flags value for the character skin used (SF_* constants should be used, combined together as flags). This is a copy of the skin's actual flags value from the S_SKIN and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	charflags: UINT32
/**
 * The player's current thokitem value for the character skin used. This is a copy of the skin's actual thokitem value from the S_SKIN (unless it was set to -1, which will default to MT_THOK) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	thokitem: number
/**
 * The player's current spinitem value for the character skin used. This is a copy of the skin's actual spinitem value from the S_SKIN (unless it was set to -1, which will default to MT_THOK) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	spinitem: number
/**
 * The player's current revitem value for the character skin used. This is a copy of the skin's actual revitem value from the S_SKIN (unless it was set to -1, which will default to MT_THOK) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	revitem: number
/**
 * The Object type of this player's followitem.
 */
	followitem: number
/**
 * This serves as a pointer to the actual object being used as the player's followitem.
 */
	followmobj: mobj_t
/**
 * The player's current actionspd value for the character skin used. This is a copy of the skin's actual actionspd value from the S_SKIN (multiplied by FRACUNIT) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	actionspd: fixed_t
/**
 * The player's current mindash value for the character skin used. This is a copy of the skin's actual mindash value from the S_SKIN (multiplied by FRACUNIT) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	mindash: fixed_t
/**
 * The player's current maxdash value for the character skin used. This is a copy of the skin's actual maxdash value from the S_SKIN (multiplied by FRACUNIT) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	maxdash: fixed_t
/**
 * The player's current jumpfactor value for the character skin used. This is a copy of the skin's actual jumpfactor value from the S_SKIN (multiplied by FRACUNIT) and can be modified freely, keeping in mind it will be reset whenever the skin is switched.
 */
	jumpfactor: fixed_t
/**
 * The standing height for this player's skin, at default scale. Use the P_GetPlayerHeight function to get the player's height at their current scale.
 */
	height: fixed_t
/**
 * The spinning height for this player's skin, at default scale. Use the P_GetPlayerSpinHeight function to get the player's height at their current scale.
 */
	spinheight: fixed_t
/**
 * The player's current lives count.
 */
	lives: SINT8
/**
 * The player's current continues count.
 */
	continues: SINT8
/**
 * The ring extra life bonus counter, used to check how many extra lives have been given from collecting 100 rings so that it can stop rewarding them after a certain amount (set by MaxXtraLife in the MainCfg block).
 */
	xtralife: SINT8
/**
 * Used in NiGHTS special stages to signify whether the player has collected a continue or not from the current map. This is used as a boolean despite being defined as an integer.
 */
	gotcontinue: UINT8
/**
 * The absolute "real" speed the player is currently moving at in any direction. This is calculated using player.rmomx and player.rmomy normally – however, when playing as NiGHTS Super Sonic this is handled completely differently. Modifying this will not change the player's actual speed (modify player.mo.momx and player.mo.momy to do this).
 */
	speed: fixed_t
/**
 * Used by some abilities (Float, Slow fall and Air drill) to set what state in using an ability during a jump the player is in:
CA_FLOAT: 0 = ability not used yet; 1 = jump button held; 2 = ability has already been used.
CA_SLOWFALL: 0 = ability not used yet; 1 = jump button held.
CA_AIRDRILL: Increases when spin button is held to speed up falling down during use of the ability.
 */
	secondjump: UINT8
/**
 * Used by CA_FLY/CA_SWIM abilities (the non-multiability versions) to boost the player up for as long as player.fly1 is not 0.
 */
	fly1: UINT8
/**
 * The player's combo bonus counter. Goes up by one every time an enemy is hurt, the higher this gets the greater the score bonus for destroying enemies given. Normally resets to 0 when the player is touching the ground (unless invincibility is being used) or climbing a wall.
 */
	scoreadd: UINT8
/**
 * The player's glide timer, the amount of time the player has been gliding for. Used to gradually speed up the horizontal gliding thrust over time.
 */
	glidetime: tic_t
/**
 * Used by the climbing ability to determine what state of climbing the player is currently in:
player.climbing == 0: not climbing
player.climbing == 1: climbing
player.climbing > 1: the player thrusts in the direction they are facing to press against the wall, and player.climbing decreases until it reaches 1
 */
	climbing: UINT8
/**
 * The player's death timer, the amount of time the player has been dead for. Used to automatically trigger effects after some time such as respawning, switching to the continue screen, changing back to the map's usual music, or just ending the game.
 */
	deadtimer: INT32
/**
 * The player's "exiting" timer, or the amount of time left in tics until the level automatically ends. By default player.exiting is set to 0, to mark that the player is not currently "exiting" the level. When it is set to a non-zero value, the following effects occur:
The player becomes invincible but unable to move.
The camera moves to a larger distance away from the player (except when playing as NiGHTS Super Sonic).
If playing as NiGHTS Super Sonic in a NiGHTS level, the player will rise up towards the ceiling and rotate constantly.
Lastly, player.exiting itself will automatically decrease over time until it reaches the value 2, after which the level will automatically be finished.

In multiplayer, however, the last of these effects differ depending on the value of playersforexit – if set to all, all living players are required to be in an "exiting" state (i.e., they must all have a non-zero player.exiting value) before the level can end; if set to one, the level will automatically finish for everyone regardless.

For reference, P_DoPlayerExit by default sets player.exiting to a value of (14*TICRATE)/5 + 1 (99 tics, or about 2.8 seconds). If the gametype is Race or Competition and all players have finished, a value of 3*TICRATE (105 tics, or 3 seconds) is given instead.
 */
	exiting: tic_t
/**
 * The player's homing timer, for CA_HOMINGTHOK. This will decrease until it reaches 0. For as long as player.homing is > 0 the player will be able to home in on a set target enemy, but once player.homing reaches 0 this will stop.
 */
	homing: UINT8
/**
 * The player's skidding timer, for when the player skids to slow down or land from gliding. This will decrease until it reaches 0. For as long as player.skidtime is > 0 the skidding sound is played and skid particles will be spawned behind the player, and for regular skidding this will freeze the state to one of the walking states, but once player.skidtime reaches 0 this will stop.
 */
	skidtime: tic_t
/**
 * The player's "conveyor" momx, i.e., the x-momentum from conveyor belts, wind, or currents.
 */
	cmomx: fixed_t
/**
 * The player's "conveyor" momy, i.e., the y-momentum from conveyor belts, wind, or currents.
 */
	cmomy: fixed_t
/**
 * The player's "real" momx, i.e., the x-momentum from the player themselves (player.mo.momx - player.cmomx). Modifying this will not change the player's actual x-momentum (modify player.mo.momx to do this).
 */
	rmomx: fixed_t
/**
 * The player's "real" momy, i.e., the y-momentum from the player themselves (player.mo.momy - player.cmomy). Modifying this will not change the player's actual y-momentum (modify player.mo.momy to do this).
 */
	rmomy: fixed_t
/**
 * Competition mode counter for the number of monitors the player has broken.
 */
	numboxes: INT16
/**
 * Competition mode counter for the number of rings the player has collected in total during the level. (When rings are lost this is not affected)
 */
	totalring: INT16
/**
 * The "real" time displayed in the player's HUD. In most gametypes, there is normally no difference between the values of this and leveltime (i.e., player.realtime == leveltime). However, in Race and Competition modes, the 4-second pre-timer means this variable has to start at zero 4 seconds after the level has loaded (i.e., player.realtime == leveltime - 4*TICRATE instead).

Note that when the player has finished the level, player.realtime will stop increasing, marking the time the player finished the level at. This final value is then used by the game for awards or bonuses, depending on the game mode or gametype:

If in Single Player or Cooperative, it will then be used by the game to calculate the time bonus, if it is awarded in the level.
If in Race, it is compared with that of other players' to calculate the winners of the round.
If in Competition, it is compared with that of other players' to calculate who gets the point for the Time category.
If in Record Attack, it is saved as the time the replay finished at.
 */
	realtime: tic_t
/**
 * Used in Circuit Race maps to count the current number of laps the player has passed.
 */
	laps: UINT8
/**
 * Used in Team Match/CTF to determine which team the player is in:
0 = spectator
1 = red team
2 = blue team
 */
	ctfteam: INT32
/**
 * Used in CTF to determine which flag the player is carrying:
0 – no flags
1 (or GF_REDFLAG) – carrying the red flag
2 (or GF_BLUEFLAG) – carrying the blue flag
 */
	gotflag: UINT16
/**
 * The player's weapon delay timer; the player cannot shoot again until this has fallen back to 0. This is set whenever a player has fired a weapon to cap the player's firing rate.
 */
	weapondelay: INT32
/**
 * The player's flag/emerald toss delay timer; the player cannot toss or collect flags/emeralds again until this has fallen back to 0. This is set whenever a player tosses a flag or emeralds, to prevent the player from accidentally collecting them again as soon as they are thrown.
 */
	tossdelay: INT32
/**
 * The saved x-position for the last checkpoint the player has touched, to be used when the player respawns at the checkpoint after dying.
 */
	starpostx: INT16
/**
 * The saved y-position for the last checkpoint the player has touched, to be used when the player respawns at the checkpoint after dying.
 */
	starposty: INT16
/**
 * The saved z-position for the last checkpoint the player has touched, to be used when the player respawns at the checkpoint after dying.
 */
	starpostz: INT16
/**
 * The saved starpost number for the last checkpoint the player has touched. Used to prevent the player from skipping starposts in Circuit mode maps, as they need to touch every single starpost number in order before completing a lap.
 */
	starpostnum: INT32
/**
 * The saved level time for the last checkpoint the player has touched, to be used for resetting the level time to a particular time when the player respawns at a starpost after dying.
 */
	starposttime: tic_t
/**
 * The saved angle for the last checkpoint the player has touched, to be used when the player respawns at the checkpoint after dying.
 */
	starpostangle: angle_t
/**
 * The saved scale for the last checkpoint the player has touched, to be used when the player respawns at the checkpoint after dying.
 */
	starpostscale: fixed_t
/**
 * Used in NiGHTS mode for getting the current angle between the player and the axis the player is circling around.
 */
	angle_pos: angle_t
/**
 * Used in NiGHTS mode for getting the previous angle between the player and the axis the player is circling around.
 */
	old_angle_pos: angle_t
/**
 * Used in NiGHTS mode as a pointer to the first of 2 axis transfer points the player is travelling between.
 */
	axis1: mobj_t
/**
 * Used in NiGHTS mode as a pointer to the second of 2 axis transfer points the player is travelling between.
 */
	axis2: mobj_t
/**
 * The player's bumper timer, for when the player has just hit a NiGHTS Bumper. This will decrease until it reaches 0. This is used to prevent the player from continuously touching the same bumper, so the player can be sprung away from it.
 */
	bumpertime: tic_t
/**
 * Used in NiGHTS mode to determine the player's current horizontal flying angle (values will range from 0 to 359). This is also used by CA_AIRDRILL to determine the thrust angle, eventually pointing downwards for falling down.
 */
	flyangle: INT32
/**
 * Used in NiGHTS mode as a drilling timer, mainly for handling which drilling sound to use and when. This will decrease towards 0 whenever the player is drilling, but may not necessarily be at 0 when not drilling.
 */
	drilltimer: tic_t
/**
 * Used in NiGHTS mode to count the number of links the player has achieved in a chain, so that more points are awarded the longer the link chain is. This resets back to 0 if player.linktimer gets to 0 before the next link however.
 */
	linkcount: INT32
/**
 * Used in NiGHTS mode as the link timer; the player must touch another hoop, ring or wing logo before player.linktimer reaches 0, otherwise the whole link chain will be broken.
 */
	linktimer: tic_t
/**
 * Used in NiGHTS mode to determine the player's current vertical flying angle (values will range from 0 to 359). This also determines which set of states the player uses for flying or drilling.
 */
	anotherflyangle: INT32
/**
 * Used in NiGHTS mode as the timer before the player returns back to normal gameplay from NiGHTS gameplay. This will decrease until it reaches 0.
 */
	nightstime: tic_t
/**
 * Used in NiGHTS mode for the drilling meter, the amount of drilling power the player has left. For as long as this value isn't 0 the player will still be able to drill when NiGHTS Super Sonic.
 */
	drillmeter: INT32
/**
 * Used in NiGHTS mode as the drilling delay timer. This will decrease until it reaches 0. This is used to prevent the player from drilling again immediately after the player has stopped drilling.
 */
	drilldelay: tic_t
/**
 * Used in NiGHTS mode to determine whether the player is in "bonus time" mode or not. This will be false normally, but will be true after the player has destroyed the capsule, allowing the player to be rewarded with more points for links before finishing the mare/level.
 */
	bonustime: boolean
/**
 * Used in NiGHTS mode as a pointer to the current mare's Ideya Capture.
 */
	capsule: mobj_t
/**
 * Used in NiGHTS mode as a pointer to the current mare's Ideya Drone.
 */
	drone: mobj_t
/**
 * When the player transforms into NiGHTS, this variable stores the player Object's pre-transformation scale. When the player falls back into 3D mode, if the player Object's scale isn't already equal to this value, the player Object's destscale is set to this value.
 */
	oldscale: fixed_t
/**
 * Used in NiGHTS mode to determine the current mare the player is in.
 */
	mare: UINT8
/**
 * TODO
 */
	marelap: UINT8
/**
 * TODO
 */
	marebonuslap: UINT8
/**
 * Used in NiGHTS mode to save the level time the current mare the player is in started.
 */
	marebegunat: tic_t
/**
 * Used in NiGHTS mode to save the starting time for player.nightstime in the current mare. This will be reset for each next mare the player plays through.
 */
	startedtime: tic_t
/**
 * Used in NiGHTS mode to save the finishing time for player.nightstime for the mare just completed by the player.
 */
	finishedtime: tic_t
/**
 * Used in NiGHTS mode to save the finishing ring count for the for the mare just completed by the player.
 */
	finishedrings: INT16
/**
 * Used in NiGHTS mode to store the player's score in the current mare. In most cases, this should be modified using P_AddPlayerScore to account for limits and continue bonuses.
 */
	marescore: UINT32
/**
 * Used in NiGHTS mode to store the player's score from the previous mare.
 */
	lastmarescore: UINT32
/**
 * TODO
 */
	totalmarescore: UINT32
/**
 * Used in NiGHTS mode to store the previous mare's number.
 */
	lastmare: UINT8
/**
 * TODO
 */
	lastmarelap: UINT8
/**
 * TODO
 */
	lastmarebonuslap: UINT8
/**
 * TODO
 */
	totalmarelap: UINT8
/**
 * TODO
 */
	totalmarebonuslap: UINT8
/**
 * Used in NiGHTS mode to store the highest link count obtained by the player.
 */
	maxlink: INT32
/**
 * Used in NiGHTS mode as a timer before displayed text disappears from the screen. This will decrease until it reaches 0. This is also used to gradually fade away the text on the screen during the last half-second.
 */
	texttimer: UINT8
/**
 * Used in NiGHTS mode to determine the text displayed on the screen, for as long as player.texttimer has not reached 0:
0 = No text
1 = Bonus time start text: "GET TO THE GOAL!" "SCORE MULTIPLIER START!"; also displays "TIME: (finishing time)" "BONUS: (time left * 100)"
2 = "GET (capsule health) RING(S)"; in special stages "SPHERE(S)" replaces "RING(S)"
3 = "GET (capsule health) MORE RING(S)"; in special stages "SPHERE(S)" replaces "RING(S)"
4 = Ending bonuses: "RINGS: (rings)" "BONUS: (rings * 50)" "(score)"; in special stages "ORBS" replaces "RINGS"; in NiGHTS attack mode "* NEW RECORD *" may also be displayed if a new record was obtained.
 */
	textvar: UINT8
/**
 * Used to store the number of the sidedef a character with CA_GLIDEANDCLIMB is currently climbing on. If not currently climbing this is set to -1.
 */
	lastsidehit: INT16
/**
 * Used to store the number of the linedef a character with CA_GLIDEANDCLIMB is currently climbing on. If not currently climbing this is set to -1.
 */
	lastlinehit: INT16
/**
 * The player's ring loss timer, used for determining how far spilled rings will be flung depending on how many times within a given period the player has been hit. This will decrease until it reaches 0, but whenever the player's rings are spilled this is increased by 10*TICRATE each time.
 */
	losstime: tic_t
/**
 * The counter for the number of times the player has been hurt by something; used for the Guard Bonus at the end of boss levels.
 */
	timeshit: UINT8
/**
 * When the player is in a sector with either the Wind/Current or Conveyor Belt specials, player.onconveyor will be set to 2 or 4 respectively. player.onconveyor is then used to determine when and whether to set player.cmomx and player.cmomy to 0 or not.
 */
	onconveyor: INT32
/**
 * Pointer to the player's current alternate view camera Object, this will be the viewpoint of the player for as long as player.awayviewtics has not reached 0.
 */
	awayviewmobj: mobj_t
/**
 * The player's alternate view camera timer. This will decrease until it reaches 0. Otherwise when player.awayviewtics is set, player.awayviewmobj is the viewpoint of the player. if player.awayviewmobj is not already set when player.awayviewtics is set, this will auto-set player.awayviewmobj to the player itself (player.mo).
 */
	awayviewtics: INT32
/**
 * The player's alternate view camera vertical aiming angle. Similar to player.aiming except this applies to the alternative view point rather than the actual player's camera for when the camera switches back.
 */
	awayviewaiming: angle_t
/**
 * Returns true if the player is a spectator, otherwise this will return false.
 */
	spectator: boolean
/**
 * TODO
 */
	outofcoop: boolean
/**
 * Determines whether the player is a bot or not:
0 – The player is a normal player
1 – The player is a bot player currently using bot AI
2 – The player is a bot player currently controlled by Player 2 controls
 */
	readonly bot: UINT8
/**
 * The amount of time the player has been in-game, and even counts up when the game is paused.
 */
	jointime: tic_t
/**
 * The amount of time the user has been disconnected, or zero if the user is currently connected.
 */
	quittime: tic_t
/**
 * The amount to add to the FOV in the OpenGL renderer. This is automatically corrected every tic so you will need to set this continually for any real effect.

Note: If not modified by Lua, this value is only calculated by the game locally if the OpenGL renderer is being used and gr_fovchange is turned on (otherwise, it is set to zero), and thus isn't network safe. Use at your own risk.
 */
	fovadd: fixed_t
}