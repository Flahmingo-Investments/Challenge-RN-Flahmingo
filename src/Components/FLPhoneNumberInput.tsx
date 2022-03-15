import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  onNumberChange: ((text: string) => void) | undefined
}

const FLPhoneNumberInput = ({ onNumberChange }: Props) => {
  const { Common, Fonts, Gutters, Colors, Images, Layout } = useTheme()
  return (
    <View style={[Common.phoneNumberInput, { marginTop: 40, height: 60 }]}>
      <View style={[Gutters.tinyPadding, Common.backgroundGray]}>
        <Image source={Images.canadaFlag} />
      </View>
      <Text style={[Fonts.textBlack, Gutters.smallHPadding]}>+1</Text>
      <Image source={Images.downArrow} />
      <TextInput
        placeholder="Enter number"
        placeholderTextColor={Colors.gray}
        style={[
          Fonts.textBlack,
          Layout.fill,
          Gutters.tinyLMargin,
          { height: 40 },
        ]}
        onChangeText={onNumberChange}
        maxLength={10}
        keyboardType={'decimal-pad'}
      />
    </View>
  )
}

export default FLPhoneNumberInput
