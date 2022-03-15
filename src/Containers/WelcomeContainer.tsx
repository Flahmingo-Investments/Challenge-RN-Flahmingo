import { FLButton } from '@/Components'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import React from 'react'
import { Image, View, Text } from 'react-native'

const WelcomeContainer = () => {
  const { Layout, Gutters, Fonts, Images, Common } = useTheme()

  return (
    <View style={[Layout.fill, Layout.colVCenter, Common.backgroundColorWhite]}>
      <Image source={Images.welcomeScreenIcon} />

      <View style={[Gutters.regularTMargin]}>
        <Text style={[Fonts.titleSmall, Fonts.textCenter, Fonts.textBlack]}>
          Welcome to
        </Text>
        <Text style={[Fonts.titleSmall, Fonts.textCenter, Fonts.textPurple]}>
          Flahmingo
        </Text>
      </View>

      <View style={[Gutters.regularTMargin]}>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textLightBlue]}>
          The best UI Kit for your next
        </Text>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Fonts.textLightBlue]}>
          health and fitness project!
        </Text>
      </View>

      <Image source={Images.welcomeScreenUser} style={[Gutters.smallTMargin]} />

      <FLButton
        title="Get Started"
        onPress={() => {
          navigate('VerifyNumber', null)
        }}
      />

      <Text
        style={[Fonts.textSmall, Gutters.largeTMargin, Fonts.textLightBlue]}
      >
        Already have account?
        <Text style={[Fonts.textRegular, Fonts.textPurple]}> Sign in</Text>
      </Text>
    </View>
  )
}

export default WelcomeContainer
