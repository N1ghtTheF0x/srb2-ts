addHook("MobjThinker",(mobj) =>
{
    P_KillMobj(mobj,mobj,mobj,DamageDeathTypes.DMG_CANHURTSELF)
    return
})