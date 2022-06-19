 
/** @compileMembersOnly */
declare enum Powers 
{
    pw_invulnerability = 0,
    pw_sneakers,
    pw_flashing,
    pw_shield,
    pw_carry,
    pw_tailsfly,
    pw_underwater,
    pw_spacetime,
    pw_extralife,
    pw_pushing,
    pw_justsprung,
    pw_noautobrake,
    pw_super,
    pw_gravityboots,
    pw_infinityring,
    pw_automaticring,
    pw_bouncering,
    pw_scatterring,
    pw_grenadering,
    pw_explosionring,
    pw_railring,
    pw_emeralds,
    pw_nights_superloop,
    pw_nights_helper,
    pw_nights_linkfreeze,
    pw_nocontrol,
    pw_dye,
    pw_justlaunched,
    pw_ignorelatch
}
declare type PowersArray = {
    [key in Powers]: UINT8
}
