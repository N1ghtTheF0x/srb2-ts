/**
 * Returns the texture number for the texture whose name is supplied in name. For a list of textures by number, see List of textures by number.
 */
declare function R_TextureNumForName(name: string): int
/**
 * If a texture with the name given by name exists, returns its texture number. Otherwise, returns -1.
 */
declare function R_CheckTextureNumForName(name: string): int