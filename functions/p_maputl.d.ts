/**
 * Returns the approximate distance between two points, where dx is the distance between the X coordinates and dy is the distance between the Y coordinates.

Note: This function will normally return a positive value, except if the distance is 38768 fracunits or larger, in which case it will return negative values.
 */
declare function P_AproxDistance(dx: fixed_t, dy: fixed_t): fixed_t
/**
 * Alternative version: P_ClosestPointOnLine(fixed_t x, fixed_t y, fixed_t x1, fixed_t y1, fixed_t x2, fixed_t y2)

Returns the X and Y coordinate (as two separate returned values) of the closest point to the point (x,y) on the line line.

If a set of 4 fixed-point integers (x1, y1, x2, y2) is given instead of a line_t variable, these become the coordinates of a custom-defined line that goes through the points (x1,y1) and (x2,y2).
 */
declare function P_ClosestPointOnLine(x: fixed_t, y: fixed_t, line: line_t): LuaMultiReturn<[fixed_t,fixed_t]>
declare function P_ClosestPointOnLine(x: fixed_t, y: fixed_t, x1: fixed_t, y1: fixed_t, x2: fixed_t, y2: fixed_t): LuaMultiReturn<[fixed_t,fixed_t]>
/**
 * Alternative version: P_PointOnLineSide(fixed_t x, fixed_t y, fixed_t x1, fixed_t y1, fixed_t x2, fixed_t y2)

Returns 0 if the point (x,y) is on the "front" side of the given line, or 1 if it is on the "back" side.

If a set of 4 fixed-point integers (x1, y1, x2, y2) is given instead of a line_t variable, these become the coordinates of a custom-defined line that goes through the points (x1,y1) and (x2,y2).
 */
declare function P_PointOnLineSide(x: fixed_t, y: fixed_t, line: line_t): int
declare function P_PointOnLineSide(x: fixed_t, y: fixed_t, x1: fixed_t, y1: fixed_t, x2: fixed_t, y2: fixed_t): int