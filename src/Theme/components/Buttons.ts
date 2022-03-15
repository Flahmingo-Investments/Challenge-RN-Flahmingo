import { StyleSheet } from 'react-native'
import { ThemeCommonParams } from '@/Theme/theme.type'

export default function ({ Colors, Gutters, Layout }: ThemeCommonParams) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    buttonRounded: {
      width: 250,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      backgroundColor: '#FF63AF',
      borderRadius: 16,
    },
  })
}
