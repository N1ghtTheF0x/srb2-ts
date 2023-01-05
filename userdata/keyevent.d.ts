declare class keyevent_t extends UserData
{/**
 * The name of the key that triggered this event.
 */
	readonly name: string
/**
 * The number of the key that triggered this event.
 */
	readonly num: INT32
/**
 * Whether this event is a continuation of a previously triggered event. For the KeyDown hook, this is true when the key is being held; for the KeyUp hook, this is always false.
 */
	readonly repeated: boolean
}