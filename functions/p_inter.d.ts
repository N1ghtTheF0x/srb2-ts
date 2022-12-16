/**
 * Removes any shield player may be carrying. This will not throw back the player nor play a sound.
 */
declare function P_RemoveShield(player: player_t): nil
/**
 * Inflicts damage on the target Object, causing it to lose a certain amount of health and use the state determined by target.info.painstate. However, if target has lost all health as a result of this function, P_KillMobj is called by this function instead. The return value of this function depends on whether target was damaged or not – if it was, this returns true; if not, this returns false.

inflictor and source determine where the damage came from: inflictor is the Object that dealt the damage, source is the source of the damage (or where inflictor came from). For instance, when a projectile fired by a player or enemy damages target, inflictor should be set the projectile itself, and source to the Object that fired the projectile. However, in situations where a player or enemy directly damages target, inflictor and source are usually both set to the same Object. If the damage comes from a level hazard such as damaging sector specials or crushers (or otherwise from nowhere at all), it is best to set both these arguments to nil.

damage determines the amount of damage to deal to target, or the number of health points removed from it. damagetype determines the damage type that will be dealt. Should the damage type have the death flag set, the target will be killed.

Note that, if not given, inflictor and source both default to nil, damage defaults to 1 and damagetype to 0. The hooks ShouldDamage and MobjDamage can be used modify or replace some of the effects of this function.

A list of damage types can be found here.
 */
declare function P_DamageMobj(target: mobj_t, inflictor?: mobj_t, source?: mobj_t, damage?: int, damagetype?: int): boolean
/**
 * Kills the target Object, making it become intangible as well as using the state determined by target.info.deathstate (if set to nil, the Object will be removed from existence). If target is an enemy or boss, and the Object that killed it was a player or one of their projectiles, points may be awarded to this player. Flickies (and/or other items) will also be spawned by enemies killed by this function. damagetype determines the damage type that was dealt.

inflictor and source follow the same meanings as in P_DamageMobj, and both default to nil if not given. damagetype defaults to 0. The hook MobjDeath can be used to modify or replace some of the effects of this function.

A list of damage types can be found here.

Note: This function is not designed to be used to kill players directly; use P_DamageMobj with a special damage type instead.
 */
declare function P_KillMobj(target: mobj_t, inflictor?: mobj_t, source?: mobj_t, damagetype?: int): nil
/**
 * Spills the specified number of rings. Also spills all weapon panels, ammo and emeralds player may be carrying at the time, but does not throw back player. If numrings is not given (or set to -1), it will default to the player's current ring count (i.e. player.rings).

In normal gameplay, up to 32 rings will be spilled by this function; the remainder will not be spawned. The speed at which the rings are flung depends on the duration since the last time this function was used (determined by player.losstime). In NiGHTS levels, however, the player will drop all rings if they have the player flag PF_NIGHTSFALL (given when the player has run out of time as Super Sonic). In addition, the rings will always be flung at the same speed regardless of player.losstime's value.

Note that this function does not actually affect player.rings; this must be modified manually in order for the player to actually lose rings. This does not apply to any weapon panels, ammo and/or emeralds also spilled by this function.
 */
declare function P_PlayerRingBurst(player: player_t, numrings?: int): nil
/**
 * Spills all weapon panels that player is carrying, but does not throw back player. Unlike the rings in P_PlayerRingBurst, the player will actually lose the weapon panels spilled by this function.
 */
declare function P_PlayerWeaponPanelBurst(player: player_t): nil
/**
 * Spills all weapon panels and ammo that player is carrying, but does not throw back player. Unlike the rings in P_PlayerRingBurst, the player will actually lose the weapon ammo spilled by this function.
 */
declare function P_PlayerWeaponAmmoBurst(player: player_t): nil
/**
 * TODO
 */
declare function P_PlayerWeaponPanelOrAmmoBurst(player: player_t): nil
/**
 * Spills all emeralds that player is carrying, but does not throw back player. If toss is true, all the emeralds are thrown in the player's forward direction and a toss delay of 2 seconds is set (for players tossing emeralds). Otherwise, the emeralds are spilled around the player (for players dropping emeralds after being hurt). Unlike the rings in P_PlayerRingBurst, the player will actually lose the emeralds spilled by this function.
 */
declare function P_PlayerEmeraldBurst(player: player_t, toss?: boolean): nil
/**
 * Spills any CTF flags that player is carrying, but does not throw back player. If toss is true, the flag is thrown in the player's forward direction and a toss delay of 2 seconds is set (for players tossing a flag). Otherwise, the direction is random (for players dropping a flag after being hurt).
 */
declare function P_PlayerFlagBurst(player: player_t, toss?: boolean): nil
/**
 * Plays one of the 4 player ring spill sounds randomly, which can vary depending on the skin, or plays the Mario ring loss sound if in Mario mode. source is the Object the sound came from.
 */
declare function P_PlayRinglossSound(source: mobj_t, player?: player_t): nil
/**
 * Plays one of the 4 player death sounds randomly, which can vary depending on the skin. source is the Object the sound came from.
 */
declare function P_PlayDeathSound(source: mobj_t, player?: player_t): nil
/**
 * Plays one of the 4 player victory taunt sounds randomly, which can vary depending on the skin. source is the Object the sound came from.
 */
declare function P_PlayVictorySound(source: mobj_t, player?: player_t): nil
/**
 * Plays the extra life jingle. By default this is the extra life music, but in Mario mode maps or if Use1upSound is enabled in the MainCfg block, this is instead a sound effect. If the music is used, the player's pw_extralife timer is set to ExtraLifeTics + 1.
 */
declare function P_PlayLivesJingle(player: player_t): nil
/**
 * Returns true if player can pick up the item, returns false if player is a bot or is flashing after being hurt.
 */
declare function P_CanPickupItem(player: player_t, weapon?: boolean): boolean
/**
 * Awards score to player NiGHTS-style; spawns a floating score item which changes appearance depending on the player's current link count and whether the player is in bonus time.
 */
declare function P_DoNightsScore(player: player_t): nil
/**
 * Gives invincibility, speed shoes, and steals score form others if player has all 7Match Emeralds. Will remove the emeralds afterwards.
 */
declare function P_DoMatchSuper(player: player_t): nil