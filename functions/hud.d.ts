declare type HudItem = ""

declare type colormap = unknown
/**
 * These functions can only be used within functions hooked with hud.add. Note that the v prefix given to all functions listed here is adjustable – this can be any name you like, e.g., drawer.draw can be used instead of v.draw, if the name of the first argument in the hud.add function is given as drawer instead of v.
 */
declare class Drawer
{
/**
 * Returns true if a graphic lump name exists in any WAD file loaded, returns false if not.
 */
    patchExists(name: string): boolean
/**
 * Caches a new patch using a graphic with name as the name. Returns nil if the graphic does not exist.
 */
    cachePatch(name: string): patch_t
/**
 * Draws a patch at the screen coordinates given.

Notes:

flags determines the video flags given, which control extra effects such as translucency.
c determines the colormap applied to the patch – use v.getColormap or v.getStringColormap to obtain a value that can be used here.
 */
    draw(x: int, y: int, patch: patch_t, flags?: int, c?: colormap): nil
/**
 * Returns a patch corresponding to the arguments given, and a boolean specifying whether the patch should be flipped. sprite may be a sprite number (SPR_POSS) or sprite prefix ("POSS"). rotation is a number between 1 and 8 (1 to 16 for 16 angle sprites). 0 is equivalent to 1 for rotation as well. rollangle is an angle to rotate the patch counter clockwise.
 */
    getSpritePatch(sprite: string | int, frame?: int, rotation?: int, rollangle?: angle_t): LuaMultiReturn<[patch_t,boolean]>
/**
 * Returns a patch corresponding to the arguments given, and a boolean specifying whether the patch should be flipped. For a description of some of these parameters, see v.getSpritePatch.

Notes:

This is specific to sprites belonging to a Skin, as Skins use a special naming system to avoid naming conflicts between themselves.
super? determines whether to get the super form sprites. This overrides the FF_SPR2SUPER flag from sprite2 if it was also set there
 */
    getSprite2Patch(skin: string | int, sprite2: string | int, Super?: boolean, rotation?: int, rollangle?: angle_t): LuaMultiReturn<[patch_t,boolean]>
/**
 * Draws a patch at the screen coordinates given, but at a specific scale (e.g.: FRACUNIT is normal scale, FRACUNIT/2 is half normal scale, 2*FRACUNIT is twice normal scale, etc).

Notes:

Coordinates are required to be fixed point values (e.g.: FRACUNIT is one pixel, FRACUNIT/2 is half a pixel, 2*FRACUNIT is two pixels, etc).
flags determines the video flags given, which control extra effects such as translucency.
c determines the colormap applied to the patch – use v.getColormap or v.getStringColormap to obtain a value that can be used here.
 */
    drawScaled(x: fixed_t, y: fixed_t, scale: fixed_t, patch: patch_t, flags?: int, c?: colormap): nil
/**
 * Draws a patch at the screen coordinates given, but at a specific horizontal (hscale) and vertical (vscale) scale (e.g.: FRACUNIT is normal scale, FRACUNIT/2 is half normal scale, 2*FRACUNIT is twice normal scale, etc).

Notes:

Coordinates are required to be fixed point values (e.g.: FRACUNIT is one pixel, FRACUNIT/2 is half a pixel, 2*FRACUNIT is two pixels, etc).
flags determines the video flags given, which control extra effects such as translucency.
c determines the colormap applied to the patch – use v.getColormap or v.getStringColormap to obtain a value that can be used here.
 */
    drawStretched(x: fixed_t, y: fixed_t, hscale: fixed_t, vscale: fixed_t, patch: patch_t, flags?: int, c?: colormap): nil
/**
 * Draws a patch at the screen coordinates given, but at a specific horizontal (hscale) and vertical (vscale) scale, with the sides cut off (sx, sy, w, h).

Notes:

Coordinates are required to be fixed point values (e.g.: FRACUNIT is one pixel, FRACUNIT/2 is half a pixel, 2*FRACUNIT is two pixels, etc).
flags determines the video flags given, which control extra effects such as translucency – use 0 if you don't want any flags.
c determines the colormap applied to the patch – use v.getColormap or v.getStringColormap to obtain a value that can be used here, or use nil if you don't want a colormap.
sx and sy determine how many pixels to cut off the left and top sides of the patch, respectively, (moving the remaining area left and up in the process,) and w and h determine how wide and tall an area of the patch to draw, not how much to cut off the right and bottom sides.
sx, sy, w, and h select a region of the patch to draw regardless of hscale and vscale – if you set w to 5*FRACUNIT and set hscale to 2*FRACUNIT, the patch will take up 10 pixels of the screen, as the 5 pixels of the patch are doubled in size. The 5 pixels of the patch that get used will be the same regardless of hscale and vscale's values, referring to the patch itself.
 */
    drawCropped(x: fixed_t, y: fixed_t, hscale: fixed_t, vscale: fixed_t, patch: patch_t, flags: int, c: colormap, sx: fixed_t, sy: fixed_t, w: fixed_t, h: fixed_t): nil
/**
 * Draws a number at the screen coordinates given.

Notes:

Numbers drawn by this function will use the same font as numbers from the score/time/rings area of the normal HUD.
flags determines the video flags given, which control extra effects such as color and translucency.
Unlike v.drawPaddedNum, this can also handle negative numbers.
 */
    drawNum(x: int, y: int, num: int, flags?: int): nil
/**
 * Draws a number at the screen coordinates given with a set number of digits. Leading zeros will be added as padding if the number is not large enough to fit the number of digits specified.

Notes:

Numbers drawn by this function will use the same font as numbers from the score/time/rings area of the normal HUD.
flags determines the video flags given, which control extra effects such as color and translucency.
Unlike v.drawNum this will not handle negative numbers.
 */
    drawPaddedNum(x: int, y: int, num: int, digits?: int, flags?: int): nil
/**
 * Fills a box of dimensions width by height with a single palette color number at the screen coordinates given. If no parameters are given, this will default to a black box covering the entire screen.

color also determines the video flags given, if they are added to the palette color number – only the flags V_NOSCALESTART, V_SNAPTOTOP, V_SNAPTOBOTTOM, V_SNAPTOLEFT and V_SNAPTORIGHT will have any effect, however.
 */
    drawFill(x?: int, y?: int, width?: int, height?: int, color?: int): nil
/**
 * Draws text on the screen at the screen coordinates given.

Notes:

flags determines the video flags given, which control extra effects such as color and translucency.
align determines the alignment of the text or otherwise miscellaneous traits – see below for a full list of valid options.
 */
    drawString(x: int, y: int, text: string, flags?: int, align?: string): nil
/**
 * Draws text in the style of the Character Select name tags at the screen coordinates given.

Notes:

basecolor and outlinecolor should be SKINCOLOR_* constants.
flags determines the video flags given, which control extra effects such as alignment and translucency.
 */
    drawNameTag(x: int, y: int, text: string, flags?: int, basecolor?: int, outlinecolor?: int): nil
/**
 * Draws text in the style of the Character Select name tags at the screen coordinates given, but at a specific scale.

Notes:

basecolor and outlinecolor should be SKINCOLOR_* constants.
flags determines the video flags given, which control extra effects such as alignment and translucency.
 */
    drawScaledNameTag(x: fixed_t, y: fixed_t, text: string, flags?: int, scale?: int, basecolor?: int, outlinecolor?: int): nil
/**
 * Draws text in the style of the titlecard level titles on the screen at the screen coordinates given.

Notes:

flags determines the video flags given, which control extra effects such as color and translucency.
 */
    drawLevelTitle(x: int, y: int, text: string, flags?: int): nil
/**
 * Returns what the width of the text displayed as graphics on the screen would be.

Notes:

flags determines the video flags given to the string, though only the scaling flags will have any effect on the size of the width returned by the function.
widthtype determines what font the string is in, which can also affect the size of the width returned by the function – see below for a full list of valid options.
 */
    stringWidth(text: string, flags?: int, widthtype?: "normal" | "small" | "thin"): int
/**
 * Returns what the width of the text would be if displayed in the style of the Character Select name tag on the screen.
 */
    nameTagWidth(text: string): int
/**
 * Returns what the width of the text would be if displayed in the style of the titlecard level titles on the screen.
 */
    levelTitleWidth(text: string): int
/**
 * Returns what the height of the text would be if displayed in the style of the titlecard level titles on the screen. This is affected by whether or not the text has capital characters in it.
 */
    levelTitleHeight(text: string): int
/**
 * Returns the colormap to apply to a patch for a particular character skin and/or skin color, as a special type of userdata which can only be used by v.draw or v.drawScaled. Skin names such as "sonic" or "tails" can be used, but their skin slot numbers can also be used (e.g., 0 for "sonic", 1 for "tails", etc). If either of these are used, the skin's startcolor value can affect the range of palette colors replaced by the given skin color's palette colors.

Certain skin values have special effects on the colormap returned for a patch to use. They are represented by the following constants:

Value	Description
TC_DEFAULT	Default – this is used by default if no skin is supplied, defaulting to remapping palette colors 160–175 (green) to the given skin color's palette colors.
TC_BOSS	Boss flash – the colormap used when a boss is flashing in pain; palette color 31 (black) is remapped to palette color 0 (near-white). Overrides the effects of skin colors.
TC_METALSONIC	Metal Sonic flash – the colormap used when Metal Sonic (Battle) is flashing in pain; palette color 239 (dark blue) is remapped to palette color 0 (near-white). Overrides the effects of skin colors.
TC_ALLWHITE	All-white flash – the colormap used when Brak Eggman is flashing in pain; all palette colors are remapped to palette color 0 (near-white). Overrides the effects of skin colors.
TC_RAINBOW	Rainbow flash – same as the default, except it is applied to all palette colors.
TC_BLINK	Blink flash – all palette colors are remapped to the given skin color's fourth-brightest palette color.
TC_DASHMODE	Metal Sonic flash – the colormap used when Metal Sonic (Battle) is dashing during pinch phase; multiple colors are remapped. In general, green colors turn into ketchup colors, reds into steel blues, steel blues into oranges. Overrides the effects of skin colors.
 */
    getColormap(skin?: string | int, color?: int): colormap
/**
 * Returns the colormap to apply to a patch for a particular text color code as a special type of userdata which can only be used by v.draw or v.drawScaled.

See Lua > Text colors for a list of text colors.
 */
    getStringColormap(textcolor: int): colormap
/**
 * Fades the screen to a certain palette color.

Notes:

If color is a palette index, the maximum value of strength is 10; otherwise, if color is one of the special values in the table below, then the maximum value of strength is 31.
Additionally, certain values of color have special effects on the resulting color of the screen pixel:
Value	Description
0xFF00	Fade to black.
0xFA00	Blue-tinted fade to black.
0xFB00	Yellow-tinted fade to white.
 */
    fadeScreen(color: int, strength: int): nil
/**
 * Returns the screen width.
 */
    width(): int
/**
 * Returns the screen height.
 */
    height(): int
/**
 * Returns the screen's X scale, as both an integer and fixed-point value.
 */
    dupx(): LuaMultiReturn<[int,int]>
/**
 * Returns the screen's Y scale, as both an integer and fixed-point value.
 */
    dupy(): LuaMultiReturn<[int,int]>
/**
 * Returns the renderer used, as a string.

Possible return values:

"software" – Software renderer
"opengl" – OpenGL renderer
"none" – None (used for dedicated servers)
 */
    renderer(): "software" | "opengl" | "none"
/**
 * Returns the value of translucenthud, as an alpha video flag, i.e., V_**TRANS (see Video flags > Alpha).
 */
    userTransFlag(): int
/**
 * Returns the maximum recommended translucency value for HUD items, as an alpha video flag, i.e., V_**TRANS (see Video flags > Alpha).

Notes:

This function differs from v.userTransFlag in that v.userTransFlag is specified by the user, but v.localTransFlag is specified by the game itself.
 */
    localTransFlag(): int
/**
 * Returns a random integer between 0 and FRACUNIT-1 (65535).
 */
    RandomFixed(): fixed_t
/**
 * Returns a random integer between 0 and 255.
 */
    RandomByte(): int
/**
 * Returns a random integer between 0 and a - 1.

Note: a should not be larger than 65536. Otherwise, there will be only 65536 possible different results this function can return, which will be spread out across the full range given; the rest of the numbers will be skipped.
 */
    RandomKey(a: int): int
/**
 * Returns a random integer between a and b, inclusive.

Note: The difference between a and b should not be larger than 65536. Otherwise, there will be only 65536 possible different results this function can return, which are spread out across the full range given; the rest of the numbers will be skipped.
 */
    RandomRange(a: int, b: int): int
/**
 * Returns a random integer between -128 and 127.
 */
    SignedRandom(): int
/**
 * Returns true p% of the time, where p is a fixed-point number between 0 and FRACUNIT. For example, v.RandomChance(FRACUNIT/2) returns true 50% of the time.
 */
    RandomChance(p: fixed_t): boolean
}
/**
 * Valid hook string options for the function hud.add:
 */
declare type HudHooks = {
    /**
     * The function is run when the Game HUD is displayed. (Default value)
Notes:

stplyr is the player the HUD is being shown for
cam is the camera used by stplyr
     */
    "game": (v: Drawer,stplyr: player_t,cam: camera_t) => void
    /**
     * 	The function is run when the Rankings/Scores HUD is displayed.
     */
    "scores": (v: Drawer) => void
    /**
     * The function is run when the Title Screen is displayed.
     */
    "title": (v: Drawer) => void
    /**
     * The function is run when the stage's level title card is displayed.
Notes:

ticker is the amount of time, in tics, that the title card has been displayed
endtime is the value of ticker at which the title card will stop displaying
     */
    "titlecard": (v: Drawer,stplyr: player_t,ticker: int,endtime: int) => void
    /**
     * The function is run when intermissions between levels are displayed.
     */
    "intermission": (v: Drawer) => void
}
/**
 * These are the functions included in SRB2's HUD library. These functions relate to the head-up display, and are all prefixed with hud. (aside from the patch/string drawing functions). Where they are required, the coordinates provided to these functions should be for the base 320×200 pixel resolution – such that x is a value between 0 and 320 (measured from the left of the screen), y is a value between 0 and 200 (measured from the top of the screen), and x = 0, y = 0 is the top-left corner of the screen. These values will automatically be adjusted by the game for other resolutions.
 */
declare namespace hud
{
    export function enable(huditem: HudItem): nil
    export function disable(huditem: HudItem): nil
    export function enabled(huditem: HudItem): nil
    export function add<HookKey extends keyof HudHooks>(func: HudHooks[HookKey],hook: HookKey): nil
}