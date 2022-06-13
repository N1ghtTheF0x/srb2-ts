import { onSpin } from "./abilities/spin";
import { NTF } from "./constants";
import { onButtonTap } from "./input";
import { player_ntf_t } from "./night";

export function Thinker(player: player_ntf_t)
{
    const night = player[NTF.INDEX]
    onButtonTap(player.cmd.buttons,night.input.spin,() => onSpin(player))
}