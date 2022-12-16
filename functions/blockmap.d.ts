declare type SearchBlockMap = {
    "objects": (refmobj: mobj_t,foundmobj: mobj_t) => nil | boolean
    "lines": (refmobj: mobj_t,foundline: line_t) => nil | boolean
}
/**
 * Does a search through a specified area of the blockmap. This can be used to find Objects or linedefs in the area and run a function for each them. This function returns true if the search was not interrupted at any point, and false if it was.

searchtype determines what is being searched for:

"objects" – search for Objects (mobj_t) in the blockmap. Note that Objects with MF_NOBLOCKMAP are not in the blockmap, and so will not be found by this function.
"lines" – search for linedefs (line_t) in the blockmap.

fn is the function to be used on each found Object/linedef. The format of the function depends on the searchtype:

"objects" search – function(mobj_t refmobj, mobj_t foundmobj)
"lines" search – function(mobj_t refmobj, line_t foundline)

In both cases, refmobj is the same Object given in searchBlockmap arguments, while foundmobj/foundline are an Object/linedef found in the blockmap.

The return value of fn affects how searching continues afterwards:

nil – Continue searching as normal.
false – Stop searching in the current block and move on to the next block.
true – End the search entirely.

If fn returns true or false at any point, searchBlockmap will return false.

refmobj is a reference Object of your choice used within searching. If you do not supply X/Y ranges to search in, it defaults to checking within the Object's radius in both axes (relative to its current X/Y position in the map). If refmobj was removed mid-search, the search stops and searchBlockmap will return false. However, refmobj is not an optional argument (a dummy Object can be used if necessary).

x1, x2, y1, and y2 are optional arguments, determining the range of X and Y coordinates in the map to search the blockmap between, if given. They determine the left, right, bottom and top block positions of the blockmap to search in, specifically. If not given, refmobj is used to set the range by default. Note that all Objects or linedefs in each block spanned by the range will be checked, not just those within the range itself. To force searching within an exact range, manual position or distance checking needs to be added to the searching function.
 */

declare function searchBlockmap<Key extends keyof SearchBlockMap>(searchtype: Key, fn: SearchBlockMap[Key], refmobj: mobj_t, x1?: fixed_t, x2?: fixed_t, y1?: fixed_t, y2?: fixed_t): boolean