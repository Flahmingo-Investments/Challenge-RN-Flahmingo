import { ThemeImages, ThemeVariables } from '@/Theme/theme.type'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({}: ThemeVariables): ThemeImages {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    welcomeScreenUser: require('@/Assets/Images/Welcome_User.png'),
    welcomeScreenIcon: require('@/Assets/Images/Welcome_Icon.png'),
    canadaFlag: require('@/Assets/Images/Canada_Flag.png'),
    downArrow: require('@/Assets/Images/Down_Arrow.png'),
    backArrow: require('@/Assets/Images/Back_Arrow.png'),
  }
}
