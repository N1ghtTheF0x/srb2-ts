/**
 * Returns true if actor's target is within the actor's melee range, false if not.
 */
declare function P_CheckMeleeRange(actor: mobj_t): boolean
/**
 * Same as P_CheckMeleeRange, except the melee range is adjusted for use with the Jetty-Syn Bomber.
 */
declare function P_JetbCheckMeleeRange(actor: mobj_t): boolean
/**
 * Same as P_CheckMeleeRange, except the melee range is adjusted for use with the CastleBot FaceStabber.
 */
declare function P_FaceStabCheckMeleeRange(actor: mobj_t): boolean
/**
 * Same as P_CheckMeleeRange, except the melee range is adjusted for use with the Skim.
 */
declare function P_SkimCheckMeleeRange(actor: mobj_t): boolean
/**
 * Returns true if actor is able to shoot its target at the moment. Returns false if actor.reactiontime has not reached 0 or actor cannot see the target. Otherwise, the result is randomly decided based on the distance between them.
 */
declare function P_CheckMissileRange(actor: mobj_t): boolean
/**
 * Changes actor.movedir to be the decided best direction of the actor to be in relation to its target (provided it has one, of course).

Note: These directions include only the 8 basic cardinal directions (N, S, E, W, NE etc.; also see the DI_ constants).
 */
declare function P_NewChaseDir(actor: mobj_t): nil
/**
 * Can actor find a player with the conditions provided? If yes, this returns true and the actor's target is set to the first player found. Otherwise this returns false and the actor's target is unchanged.
dist determines the distance limit for the actor to check for players in. If dist is set to 0, the distance limit will be infinite.
allaround? determines whether the actor will look all around itself for players or just within 90° of the direction it is currently facing.
tracer? determines whether to use actor.tracer instead of actor.target. This is useful for homing missiles such as the Deton, since missiles set their target to the Object who shot them and thus cannot harm it.

dist defaults to 0 if not given, while allaround? and tracer both default to false if not given.
 */
declare function P_LookForPlayers(actor: mobj_t, dist?: fixed_t, allaround?: boolean, tracer?: boolean): boolean