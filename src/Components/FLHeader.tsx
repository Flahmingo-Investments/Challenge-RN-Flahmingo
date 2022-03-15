import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { useTheme } from '@/Hooks'
import { pop } from '@/Navigators/utils'

interface Props {}

const FLHeader = ({}: Props) => {
  const { Common, Fonts, Gutters, Images, Layout } = useTheme()
  return (
    <View
      style={[
        Layout.selfStretch,
        Common.backgroundReset,
        Gutters.largePadding,
        Layout.row,
        Layout.selfStretch,
        Layout.justifyContentBetween,
      ]}
    >
      <TouchableOpacity onPress={() => pop()}>
        <Image source={Images.backArrow} />
      </TouchableOpacity>

      <View></View>

      <TouchableOpacity>
        <Text style={Fonts.textPink}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FLHeader
