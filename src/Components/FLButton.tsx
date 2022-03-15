import React from 'react'
import { TouchableOpacity, Text, ViewStyle } from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  title: string
  onPress: () => void
  containerStyle?: ViewStyle
}

const FLButton = ({ title, onPress, containerStyle }: Props) => {
  const { Common, Fonts, Gutters } = useTheme()
  const style = !!containerStyle ? containerStyle : {}
  return (
    <TouchableOpacity
      style={[Common.button.buttonRounded, Gutters.largeTMargin, style]}
      onPress={onPress}
    >
      <Text style={[Fonts.buttonText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FLButton
