import { FLButton, FLHeader, FLPinInput } from '@/Components'
import { useTheme } from '@/Hooks'
import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PinNumberContainer = () => {
  const { Layout, Gutters, Fonts, Common } = useTheme()
  const [pin, setPin] = useState('')
  return (
    <ScrollView
      contentContainerStyle={[
        Layout.fill,
        Layout.colVCenter,
        Common.backgroundColorWhite,
      ]}
    >
      <FLHeader></FLHeader>

      <Text style={[Fonts.textPink, Fonts.textLightBlue, { marginTop: 54 }]}>
        STEP 1/7
      </Text>

      <View style={[Gutters.regularTMargin]}>
        <Text style={[Fonts.titleSmall, Fonts.textCenter, Fonts.textBlack]}>
          Verify your number
        </Text>
      </View>

      <View style={[Gutters.regularTMargin]}>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textLightBlue]}>
          Wel’ll text you on 08223780727.
        </Text>
      </View>

      <FLPinInput pin={pin} onTextChange={text => setPin(text)} />

      <TouchableOpacity>
        <Text
          style={[
            Fonts.textRegular,
            Fonts.textCenter,
            Fonts.textPurple,
            Gutters.smallBMargin,
          ]}
        >
          Send me a new code
        </Text>
      </TouchableOpacity>

      <FLButton title="Verify Now" onPress={() => {}} />
    </ScrollView>
  )
}

export default PinNumberContainer
