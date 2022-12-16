declare class sfxinfo_t
{/**
 * The name of the sound following the sfx_ prefix, e.g., S_sfx[sfx_thok].name would return "thok".
 */
	readonly name: string
/**
 * Singular: Determines whether only one of the sound can be played at a time (true) or not (false).
 */
	singular: boolean
/**
 * Priority: The priority of the sound, i.e., this determines how important it is to play this sound; if a sound with a higher priority is playing this sound will be drowned out, otherwise if vice versa this sound will drown out the other instead. Usually a value between 0 and 255.
 */
	priority: INT32
/**
 * Flags: (Known as "pitch" in the source code) Sets/returns the sound flags set for the sound. (use SF_* constants, not to be confused with skin flags)
 */
	flags: INT32
/**
 * Skin sound id number; for sounds that are not changeable by the skin this will be -1. (See SKS* constants)
 */
	readonly skinsound: INT32
/**
 * Caption: The caption to display onscreen when this sound is played with Closed Captioning enabled.
 */
	caption: string
}