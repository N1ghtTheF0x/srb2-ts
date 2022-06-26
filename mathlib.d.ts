declare function abs(a: int): int
declare function min(a: int, b: int): int
declare function max(a: int, b: int): int
declare function sin(a: angle_t): fixed_t
declare function cos(a: angle_t): fixed_t
declare function tan(a: angle_t): fixed_t
declare function asin(a: angle_t): angle_t
declare function acos(a: angle_t): angle_t
declare function FixedAngle(a: fixed_t): angle_t
declare function AngleFixed(a: angle_t): fixed_t
declare function InvAngle(a: angle_t): angle_t
declare function FixedMul(a: fixed_t, b: fixed_t): fixed_t
declare function FixedInt(a: fixed_t): int
declare function FixedDiv(a: fixed_t, b: fixed_t): fixed_t
declare function FixedRem(a: fixed_t, b: fixed_t): fixed_t
declare function FixedSqrt(a: fixed_t): fixed_t
declare function FixedHypot(a: fixed_t, b: fixed_t): fixed_t
declare function FixedFloor(a: fixed_t): fixed_t
declare function FixedTrunc(a: fixed_t): fixed_t
declare function FixedCeil(a: fixed_t): fixed_t
declare function FixedRound(a: fixed_t): fixed_t
declare function GetSecSpecial(special: int, section: int): int
declare function All7Emeralds(flags: int): boolean
declare function ColorOpposite(color: int): LuaMultiReturn<[int,int]>