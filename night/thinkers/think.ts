import { onCustom1 } from "../abilities/custom1";
import { onSpin } from "../abilities/spin";
import { NTF } from "../constants";
import { onButtonTap } from "../input";
import { player_ntf_t } from "../night";

export function Think(player: player_ntf_t)
{
    const night = player[NTF.INDEX]
    onButtonTap(player.cmd.buttons,night.input.spin,() => onSpin(player))
    onButtonTap(player.cmd.buttons,night.input.custom1,() => onCustom1(player))
    if(player.pflags & PlayerFlags.PF_THOKKED)
    {
        night.canAttack = true
    }
    else
    {
        night.canAttack = false
    }
}