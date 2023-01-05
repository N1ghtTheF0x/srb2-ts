declare class mapheader_t extends UserData
{/**
 * LevelName
 */
	readonly lvlttl: string
/**
 * SubTitle
 */
	readonly subttl: string
/**
 * Act
 */
	readonly actnum: UINT8
/**
 * TypeOfLevel, as a set of flags stored in an integer. See TOL_* constants.
 */
	readonly typeoflevel: UINT16
/**
 * NextLevel, as an integer.
 */
	readonly nextlevel: INT16
/**
 * Music
 */
	readonly musname: string
/**
 * MusicTrack
 */
	readonly mustrack: UINT16
/**
 * MusicPos
 */
	readonly muspos: UINT32
/**
 * MusicInterFadeOut
 */
	readonly musinterfadeout: UINT32
/**
 * MusicInter
 */
	readonly musintername: string
/**
 * ForceCharacter
 */
	readonly forcecharacter: string
/**
 * Weather. See PRECIP_* constants.
 */
	readonly weather: UINT8
/**
 * SkyNum
 */
	readonly skynum: INT16
/**
 * SkyboxScaleX
 */
	readonly skybox_scalex: INT16
/**
 * SkyboxScaleY
 */
	readonly skybox_scaley: INT16
/**
 * SkyboxScaleZ
 */
	readonly skybox_scalez: INT16
/**
 * TitleCardActDiamond
 */
	readonly ltactdiamond: string
/**
 * TitleCardZigZag
 */
	readonly ltzzpatch: string
/**
 * TitleCardZigZagText
 */
	readonly ltzztext: string
/**
 * InterScreen
 */
	readonly interscreen: string
/**
 * RunSOC
 */
	readonly runsoc: string
/**
 * ScriptName
 */
	readonly scriptname: string
/**
 * PreCutsceneNum
 */
	readonly precutscenenum: UINT8
/**
 * CutsceneNum
 */
	readonly cutscenenum: UINT8
/**
 * Countdown
 */
	readonly countdown: INT16
/**
 * Palette
 */
	readonly palette: UINT16
/**
 * NumLaps
 */
	readonly numlaps: UINT8
/**
 * Unlockable minus 1:
-1 = no unlockable required
0 = unlockable #1 required
etc.
 */
	readonly unlockrequired: SINT8
/**
 * LevelSelect
 */
	readonly levelselect: UINT8
/**
 * BonusType:
-1 = None
0 = Normal
1 = Boss
2 = ERZ3
 */
	readonly bonustype: SINT8
/**
 * SaveOverride. See SAVE_* constants.
 */
	readonly saveoverride: SINT8
/**
 * LevelFlags. See LF_* constants.
 */
	readonly levelflags: UINT8
/**
 * MenuFlags. See LF2_* constants.
 */
	readonly menuflags: UINT8
}