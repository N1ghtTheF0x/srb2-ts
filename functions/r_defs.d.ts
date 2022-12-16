/**
 * Returns the angle between the camera's X and Y coordinates and x and y.

Note: This will not work consistently among multiple players. Use at your own risk.
 */
declare function R_PointToAngle(x: fixed_t, y: fixed_t): angle_t
/**
 * Returns the angle created by the line from x and y to dest_x and dest_y.
 */
declare function R_PointToAngle2(x: fixed_t, y: fixed_t, dest_x: fixed_t, dest_y: fixed_t): angle_t
/**
 * Returns the distance from the camera's X and Y coordinates to x and y.

Note: This will not work consistently among multiple players. Use at your own risk.
 */
declare function R_PointToDist(x: fixed_t, y: fixed_t): fixed_t
/**
 * Returns the distance from x and y to dest_x and dest_y.
 */
declare function R_PointToDist2(x: fixed_t, y: fixed_t, dest_x: fixed_t, dest_y: fixed_t): fixed_t
/**
 * Returns the subsector that the given point is located in. Never returns nil, even if outside of the map.
 */
declare function R_PointInSubsector(x: fixed_t, y: fixed_t): subsector_t
/**
 * Same as R_PointInSubsector, but returns nil if point is not in subsector.
 */
declare function R_PointInSubsectorOrNil(x: fixed_t, y: fixed_t): subsector_t | nil