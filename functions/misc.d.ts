/**
 * For a given sector type number special and a sector type group section (expected to be a value between 1 and 4), returns the number of the sector effect from section that special uses, or 0 if no effect from this group is used. The output values range from 0 to 15 – see Sector types for a list of sector effects and their corresponding effect numbers.

Example: If the sector sector uses the Damage (Fire) sector special from Group 1, GetSecSpecial(sector.special, 1) will return 3.
 */
declare function GetSecSpecial(special: int, section: int): int
/**
 * Returns true if flags contains all the emerald flags from EMERALD1 to EMERALD7. Intended to be used for checking either the Single Player/Co-op emeralds collected by all players (emeralds), or the multiplayer emeralds (for gametypes Match, CTF and Tag) collected by a particular player (player.powers[pw_emeralds]).
 */
declare function All7Emeralds(flags: int): boolean
/**
 * Returns both the opposite skin color for color, and the associated sprite frame number for the opposite color (the latter is used for the Level End Sign).

Example: ColorOpposite(SKINCOLOR_WHITE) will return the values SKINCOLOR_BLACK and 10.
 */
declare function ColorOpposite(color: int): LuaMultiReturn<[int,int]>