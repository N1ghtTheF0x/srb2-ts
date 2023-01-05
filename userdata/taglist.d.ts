declare class taglist_t extends UserData
{/**
 * Returns true if the list is valid (i.e., still exists), false if not.
 */
    readonly valid: boolean
    iterate(): TODO
    has(tag: INT16): boolean
    find(tag: INT16): boolean
    shares(othertaglist: taglist_t): boolean
    add(tag: INT16): nil
    remove(tag: INT16): nil
}