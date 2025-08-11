import { palette } from './palette'


// 이 프로젝트에서는 못 쓴다. 쓰려면 CSS in JS 방식을 써야 한다.
export const tokens = {
    reactionText: palette.redPrimary,
    reactionBackground: palette.redSecondary,
    memoryText: palette.yellowPrimary,
    memoryBackground: palette.redSecondary,
    verbalText: palette.greenPrimary,
    verbalBackground: palette.greenSecondary,
    visualText: palette.bluePrimary,
    visualBackground: palette.blueSecondary,
}