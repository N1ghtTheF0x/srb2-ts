/**
 * @noSelf
 * Note: Most of these functions are not designed for tables with non-integer keys.
 */
declare namespace table
{
    /**
     * Returns a string containing the elements of table t between the positions start and end concatenated together. sep is used as a separator between the elements (defaults to the empty string). start and end default to 1 and the length of the table, respectively.
     */
    export function concat(t: table, sep?: string, start?: int, end?: int): string
    /**
     * Inserts element at position key in table t. If key is not given, element is inserted at the end of table t.
     */
    export function insert(t: table, key: int, element: any): nil
    /**
     * Returns the largest positive numerical index of the given table, or zero if the table has no positive numerical indices.
     */
    export function maxn(t: table): int
    /**
     * Removes from table t the element at position key, and returns the value of the removed element. All elements posterior to the removed element are then shifted down one position. If key is not given, removes the last element of table t.
     */
    export function remove(t: table, key: int): any
    /**
     * Sorts the elements of table t, in-place, from t[1] to t[n], where n is the length of the table t. If comp is given, then it must be a function that receives two table elements, and returns true when the first is less than the second. If comp is not given, then the standard Lua operator < is used instead.
     */
    export function sort(t: table, comp: (element_a: any,element_b: any) => boolean): nil
}