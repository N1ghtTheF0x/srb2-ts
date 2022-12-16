/**
 * Returns a random integer between 0 and FRACUNIT-1 (65535).
 */
declare function P_RandomFixed(): fixed_t
/**
 * Returns a random integer between 0 and 255.
 */
declare function P_RandomByte(): int
/**
 * Returns a random integer between 0 and a - 1.

Note: a should not be larger than 65536. Otherwise, there will be only 65536 possible different results this function can return, which will be spread out across the full range given; the rest of the numbers will be skipped.
 */
declare function P_RandomKey(a: int): int
/**
 * Returns a random integer between a and b, inclusive.

Note: The difference between a and b should not be larger than 65536. Otherwise, there will be only 65536 possible different results this function can return, which are spread out across the full range given; the rest of the numbers will be skipped.
 */
declare function P_RandomRange(a: int, b: int): int
/**
 * Returns a random integer between -128 and 127.
 */
declare function P_SignedRandom(): int
/**
 * Returns true p% of the time, where p is a fixed-point number between 0 and FRACUNIT. For example, P_RandomChance(FRACUNIT/2) returns true 50% of the time.
 */
declare function P_RandomChance(p: fixed_t): boolean