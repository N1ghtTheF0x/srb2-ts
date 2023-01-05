declare class mobjinfo_t extends UserData
{/**
 * MapThingNum: The Thing type number, should be a number between 1 and 4095. If set to -1, the Object type cannot be placed through Things on the map.
 */
	doomednum: INT32
/**
 * SpawnState: The state that this type of Object calls when it is spawned. Its duration may not be 0. If the SpawnState has an action, it will not be performed when the Object is first spawned unless the MF_RUNSPAWNFUNC flag is set on the Object. If the SpawnState is called again after that, however, the action will be performed even without the flag.
 */
	spawnstate: number
/**
 * SpawnHealth: The initial value for the health variable for mobj_t.
 */
	spawnhealth: INT32
/**
 * SeeState: Called once an Object spots a player, which can be done with the action A_Look and certain actions that are made specifically for some of SRB2's specific enemies.
 */
	seestate: number
/**
 * SeeSound: Usually played when the SeeState is executed. A_PlaySeeSound is made specifically to call this sound.
 */
	seesound: number
/**
 * ReactionTime: The initial value for the reactiontime variable for mobj_t.
 */
	reactiontime: INT32
/**
 * AttackSound: Usually played by certain attack actions for enemies. The action A_PlayAttackSound is made specifically to call this sound.
 */
	attacksound: number
/**
 * PainState: The state that Objects with the flag MF_SHOOTABLE go to when they are damaged but not yet dead.
 */
	painstate: number
/**
 * PainChance: Used for miscellaneous purposes and will be unused for most Objects.
 */
	painchance: INT32
/**
 * PainSound: Usually played when the PainState is executed. The action A_Pain is made specifically to call this sound.
 */
	painsound: number
/**
 * MeleeState: The first of two attack states. Actions call this or MissileState when the Object should attack.
 */
	meleestate: number
/**
 * MissileState: The second of two attack states. Actions call this or MeleeState when the Object should attack.
 */
	missilestate: number
/**
 * DeathState: The state that Objects go to when they are destroyed, i.e., have no health points left. For regular enemies, this sequence of states should eventually point to S_NULL, which is used for Objects that have disappeared.
 */
	deathstate: number
/**
 * XDeathState: Usually used as the fleeing state for bosses. It is called by the action A_BossDeath.
 */
	xdeathstate: number
/**
 * DeathSound: Usually played when the DeathState is executed. The action A_Scream is made specifically to call this sound.
 */
	deathsound: number
/**
 * Speed: Usage depends on situation; can be just a regular number in some cases, other cases this needs to be a multiple of FRACUNIT
 */
	speed: fixed_t
/**
 * Radius: The initial value for the radius variable for mobj_t. This may also be referenced when an Object's scale is modified.
 */
	radius: fixed_t
/**
 * Height: The initial value for the height variable for mobj_t. This may also be referenced when an Object's scale is modified.
 */
	height: fixed_t
/**
 * DispOffset: Used to resolve ordering conflicts when drawing sprites that are in the same position in Software rendering. Sprites with a higher display offset are always drawn in front of sprites with a lower display offset. For instance, the shield orbs all have this set to 1, which means they are always displayed in front of the player when both are in the exact same position. Any integer value can be used here, including negative values; SRB2's Objects only use values up to 2, so anything above that will make the Object take precedence over all of SRB2's default Objects. For most Objects, this can be set to 0.
 */
	dispoffset: INT32
/**
 * Mass: Used to determine the damage type of Objects with the primary flags MF_PAIN or MF_MISSILE. Otherwise, it's used for miscellaneous purposes and will be unused for most Objects. It has no relation to the heaviness of an Object.
 */
	mass: INT32
/**
 * Damage: Used for miscellaneous purposes and will be unused for most Objects.
 */
	damage: INT32
/**
 * ActiveSound: Used for miscellaneous sounds that are part of an Object's animation. A_PlayActiveSound is made specifically to call this sound.
 */
	activesound: number
/**
 * Flags: The initial value given to the flags variable for mobj_t. (Use MF_* constants)
 */
	flags: INT32
/**
 * RaiseState: Used for miscellaneous purposes. For example, A_ShootBullet, A_DropMine and A_JetgShoot all spawn Objects with this state.
 */
	raisestate: number
}