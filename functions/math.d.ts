/**
 * Returns the absolute value (the number's distance from zero) of a.

Note: abs(INT32_MIN) does not have a corresponding value, since it would be out of the 32-bit integer range.
 */
declare function abs(a: int): int
/**
 * Returns the smaller value of a or b.
 */
declare function min(a: int, b: int): int
/**
 * Returns the larger value of a or b.
 */
declare function max(a: int, b: int): int
/**
 * Returns the sine of the given angle as a fixed-point value. Output values range from -FRACUNIT to FRACUNIT.
 */
declare function sin(a: angle_t): fixed_t
/**
 * Returns the cosine of the given angle as a fixed-point value. Output values range from -FRACUNIT to FRACUNIT.
 */
declare function cos(a: angle_t): fixed_t
/**
 * Returns the tangent of the given angle as a fixed-point value. Output values range from about -1303*FRACUNIT to about 1303*FRACUNIT. Undefined values, such as tan(90°) or tan(270°), are represented by INT32_MIN.
 */
declare function tan(a: angle_t): fixed_t
/**
 * Converts an integer in the fixed-point scale to an angle value.

Example: FixedAngle(90*FRACUNIT) will return ANGLE_90.
 */
declare function FixedAngle(a: fixed_t): angle_t
/**
 * Converts an angle value to an integer in the fixed-point scale.

'Example: AngleFixed(ANGLE_90) will return 90*FRACUNIT.
 */
declare function AngleFixed(a: angle_t): fixed_t
/**
 * Returns the "inverse" of the given angle, i.e., 360° - a.

Example: InvAngle(ANGLE_45) will return ANGLE_315.
 */
declare function InvAngle(a: angle_t): angle_t
/**
 * Returns the result of multiplying a by b in the fixed-point scale.

Example: FixedMul(2*FRACUNIT, 3*FRACUNIT) will return 6*FRACUNIT.
 */
declare function FixedMul(a: fixed_t, b: fixed_t): fixed_t
/**
 * Returns the integer component of a as a normal integer.

Example: FixedInt(45*FRACUNIT) will return 45.
 */
declare function FixedInt(a: fixed_t): int
/**
 * Returns the result of dividing a by b in the fixed-point scale.

Example: FixedDiv(6*FRACUNIT, 3*FRACUNIT) will return 2*FRACUNIT.
 */
declare function FixedDiv(a: fixed_t, b: fixed_t): fixed_t
/**
 * Returns the remainder of dividing a by b in the fixed-point scale.

Note: Negative values for b are not handled correctly and may slow down the game.
 */
declare function FixedRem(a: fixed_t, b: fixed_t): fixed_t
/**
 * Returns the square root of a in the fixed-point scale.

Example: FixedSqrt(16*FRACUNIT) will return 4*FRACUNIT.
 */
declare function FixedSqrt(a: fixed_t): fixed_t
/**
 * Returns the hypotenuse of a and b in the fixed-point scale (i.e., the length of the longest side of a right-angled triangle where the other sides have lengths a and b).

Example: FixedHypot(3*FRACUNIT, 4*FRACUNIT) will return 5*FRACUNIT.
 */
declare function FixedHypot(a: fixed_t, b: fixed_t): fixed_t
/**
 * Returns the floor of a (the largest integer that is not larger than a) in the fixed-point scale.
 */
declare function FixedFloor(a: fixed_t): fixed_t
/**
 * Returns the value of a rounded to the nearest whole number towards 0 (or a truncated to zero decimal digits) in the fixed-point scale.
 */
declare function FixedTrunc(a: fixed_t): fixed_t
/**
 * Returns the ceiling of a (the smallest integer that is not smaller than a) in the fixed-point scale.
 */
declare function FixedCeil(a: fixed_t): fixed_t
/**
 * Returns the value of a rounded to the nearest whole number away from 0 in the fixed-point scale.
 */
declare function FixedRound(a: fixed_t): fixed_t