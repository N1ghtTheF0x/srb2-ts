import { NTF } from "../constants";
import { player_ntf_t } from "../night";

export function gameHUD(v: drawer_i,player: player_ntf_t,cam?: camera_t)
{
    const night = player[NTF.INDEX]
    v.drawNum(16,58,player.lives)
    v.drawNum(16,176,night.health)
}