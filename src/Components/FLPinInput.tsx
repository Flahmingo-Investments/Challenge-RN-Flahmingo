import { useTheme } from '@/Hooks'
import React from 'react'
import { StyleSheet, View, Animated, TextInput, Text } from 'react-native'

interface Props {
  pin: string
  length: number
  onTextChange: (value: string) => void
  containerStyle?: object
  circleContainerStyle?: object
  circleEmptyStyle?: object
  circleFilledStyle?: object
  autoFocus?: boolean
}
const FLPinInput = (props: Props) => {
  const { Common, Fonts, Gutters, Colors, Images, Layout } = useTheme()
  const {
    pin,
    length,
    onTextChange,
    containerStyle,
    circleContainerStyle,
    circleEmptyStyle,
    circleFilledStyle,
    autoFocus,
  } = props
  const onChange = (text: string) => {
    const regex = '^[0-9]*$'
    if (text.match(regex) && text.length <= length) {
      onTextChange(text)
    }
  }

  const circleEmptyStyles = StyleSheet.flatten([
    styles.circle,
    circleEmptyStyle,
  ])
  const circleFilledStyles = StyleSheet.flatten([
    styles.circle,
    circleFilledStyle,
  ])

  const circles = []
  for (let i = 0; i < length; i += 1) {
    circles.push(
      <View
        key={`${i}${pin.length > i}`}
        style={pin.length > i ? circleFilledStyles : circleEmptyStyles}
      >
        <Text style={[Fonts.titleSmall, Fonts.textSmall, Fonts.textBlack]}>
          {pin.length > i ? pin.charAt(i) : ''}
        </Text>
      </View>,
    )
  }
  return (
    <View style={containerStyle}>
      <Animated.View
        style={StyleSheet.flatten([
          styles.circleContainer,
          circleContainerStyle,
        ])}
      >
        {circles}
      </Animated.View>

      <TextInput
        style={styles.text}
        caretHidden
        maxLength={length}
        onChangeText={onChange}
        value={pin}
        keyboardType={'decimal-pad'}
      />
    </View>
  )
}

export default FLPinInput

FLPinInput.defaultProps = {
  length: 4,
  containerStyle: {
    display: 'flex',
    width: '100%',
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 80,
  },
  circleContainerStyle: {
    paddingHorizontal: 15,
  },

  circleFilledStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  autoFocus: true,
}

const styles = StyleSheet.create({
  circleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  circle: {
    width: 22,
    height: 22,
    backgroundColor: '#E4DFFF',

    borderRadius: 11,
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
  },
})
