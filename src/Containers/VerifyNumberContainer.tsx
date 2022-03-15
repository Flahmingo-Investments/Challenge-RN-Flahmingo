import { FLPhoneNumberInput, FLButton, FLHeader } from '@/Components'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const VerifyNumberContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()

  return (
    <ScrollView
      contentContainerStyle={[
        Layout.fill,
        Layout.colVCenter,
        Common.backgroundColorWhite,
      ]}
    >
      <FLHeader></FLHeader>

      <Text style={[Fonts.textPink, { marginTop: 54 }]}>STEP 1/7</Text>

      <View style={[Gutters.regularTMargin]}>
        <Text style={[Fonts.titleSmall, Fonts.textCenter, Fonts.textBlack]}>
          Let’s start with your{'\n'}mobile number
        </Text>
      </View>

      <View style={[Gutters.regularTMargin]}>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textLightBlue]}>
          Number we can use to reach you
        </Text>
      </View>

      <FLPhoneNumberInput onNumberChange={text => {}} />

      <FLButton
        title="Verify Now"
        onPress={() => {
          navigate('PinNumber', null)
        }}
        containerStyle={{ marginTop: 80 }}
      />
    </ScrollView>
  )
}

export default VerifyNumberContainer
