/**
 * Checks if the position (x, y) is valid for the Object mobj. Note that this does not actually teleport the Object to the given coordinates; it only tests what would happen if it was at that position.

This function returns false if either a) the Object has been blocked by a wall or another Object, or b) the Object has been removed from the map during checking; otherwise it will return true to signal the position is not blocked. This function additionally returns the "tmthing" Object set during the run of the function, which in the majority of cases will be mobj itself.

The blockmap is checked for any Objects or walls to collide with; any Objects with MF_NOBLOCKMAP cannot be collided with by this function. Note that Objects using this function that have the MF_NOCLIP will not clip with other Objects or walls at all, while Objects with MF_NOCLIPTHING will not clip with Objects but can still be blocked by walls.
 */
declare function P_CheckPosition(mobj: mobj_t, x: fixed_t, y: fixed_t): LuaMultiReturn<[boolean,mobj_t]>
/**
 * Tries to move the Object mobj to the X/Y coordinates supplied (all done in the same tic), checking each position to make sure the Object is not blocked on the way there. If it is blocked by a wall or another Object, or the height of the sector is too small to fit in, this will return false and leave the Object where it was to begin with (i.e., the move failed); otherwise this will return true with the Object at the coordinates supplied. This function additionally returns the "tmthing" Object set during the run of the function, which in the majority of cases will be mobj itself.

allowdropoff determines whether to stop the Object from falling off a platform too low to step-down when moving, or let it continue regardless of this – if allowdropoff is false and the Object would be falling off a platform if it continued, this will return false.

Note: Pushable Objects will also move along anything on top with them when they are moved. Objects with MF_NOCLIP will be able to move straight to the specified position without being blocked by anything, and allowdropoff will not affect them.
 */
declare function P_TryMove(mobj: mobj_t,x: fixed_t, y: fixed_t, allowdropoff?: boolean): LuaMultiReturn<[boolean,mobj_t]>
/**
 * Moves the actor Object in its current direction (using actor.movedir rather than the angle), moving forward a distance of speed*FRACUNIT (speed does not need to be multiplied by FRACUNIT). Returns true when the actor has moved; returns false if the actor cannot move, does not have a direction to move in or is dead. This function additionally returns the "tmthing" Object set during the run of the function, which in the majority of cases will be actor itself.
 */
declare function P_Move(actor: mobj_t, speed: int): LuaMultiReturn<[boolean,mobj_t]>
/**
 * Teleports the Object straight to the x, y, and z coordinates supplied, but does not account for whether the Object will be stuck in this position, and will always return true. This function additionally returns the "tmthing" Object set during the run of the function, which in the majority of cases will be mobj itself.
 */
declare function P_TeleportMove(mobj: mobj_t, x: fixed_t, y: fixed_t, z: fixed_t): LuaMultiReturn<[boolean,mobj_t]>
/**
 * Slides mo along a wall using its current X/Y momentum. This assumes that mo has already been blocked by a wall, so this searches for the wall that blocked it before sliding.
 */
declare function P_SlideMove(mo: mobj_t): nil
/**
 * Bounces mo off a wall using its current X/Y momentum. This assumes that mo has already been blocked by a wall, so this searches for the wall that blocked it before bouncing.
 */
declare function P_BounceMove(mo: mobj_t): nil
/**
 * Checks if target is visible from source's position – if it is, this returns true; otherwise it returns false. This function is also able to check if FOFs are blocking the line of sight. Note that the angles the Objects are facing are not taken into consideration, only their map coordinates and heights.
 */
declare function P_CheckSight(source: mobj_t, target: mobj_t): boolean
/**
 * Optimized version of P_CheckPosition specifically designed for MT_HOOPCOLLIDE. radius is unused.
 */
declare function P_CheckHoopPosition(hoop: mobj_t, x: fixed_t, y: fixed_t, z: fixed_t, radius: fixed_t): nil
/**
 * Damages all damageable Objects in the blockmap around inflictor, with source being the Object that inflictor came from (if not the same as inflictor itself). radius is the distance limit around inflictor to damage other Objects in, which will automatically be scaled with inflictor's scale. damagetype determines the type of damage dealt to Objects hit by the attack. If sightcheck is true or not set, the target objects will only be damaged if they have line of sight with the inflictor's position; If false, the attack will be able to harm objects behind walls.

Objects that cannot be damaged by P_RadiusAttack include: any Objects sharing the same type as inflictor, the source Object itself, monitors, bosses, non-shootable Objects (MF_SHOOTABLE is not set), or any Objects not within the blockmap at all (MF_NOBLOCKMAP is set).
 */
declare function P_RadiusAttack(inflictor: mobj_t, source: mobj_t, radius: fixed_t, damagetype?: int, sightcheck?: boolean): nil
/**
 * Returns what would be the floorz (the absolute Z position of the floor) at the x, y, and z coordinates supplied. height should be the height of the Object you want to check this for (needed for checking solid/quicksand FOFs). Keep in mind the coordinates and perhaps even the height do not necessarily have to be the actual position of an existing Object.
 */
declare function P_FloorzAtPos(x: fixed_t, y: fixed_t, z: fixed_t, height: fixed_t): fixed_t
/**
 * The spring Object sends object into the air like a spring. spring does not necessarily have to be an Object with the MF_SPRING flag, but it should have least all the same attributes as one; see the Spring article for more details. Note that object will also be given the MFE_SPRUNG flag, marking it as having already touched a spring this tic; the flag will automatically be removed the next tic. If this function is called while object has this flag set, it will have no effect.
 */
declare function P_DoSpring(spring: mobj_t, object: mobj_t): nil
/**
 * Tries to move the Camera camera to the X/Y coordinates supplied (all done in the same tic), checking each position to make sure the Camera is not blocked on the way there. If it is blocked by a wall, or the height of the sector is too small to fit in, this will return false and leave the Camera where it was to begin with (i.e., the move failed); otherwise this will return true with the Camera at the coordinates supplied.
 */
declare function P_TryCameraMove(camera: camera_t, x: fixed_t, y: fixed_t): boolean
/**
 * Teleports the Camera straight to the x, y, and z coordinates supplied, but does not account for whether the Camera will be stuck in this position.
 */
declare function P_TeleportCameraMove(camera: camera_t, x: fixed_t, y: fixed_t, z: fixed_t): nil