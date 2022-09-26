import * as React from "react"
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { RadioProps } from "./radio.props"

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginRight: 45,
  marginBottom: 10,
}

const ICON: ViewStyle = {
  height: 10,
  width: 10,
  borderRadius: 7,
  backgroundColor: "#187DE6",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: color.primary,
  marginLeft: 5,
}

const BODY: ViewStyle = {
  height: 20,
  width: 20,
  backgroundColor: "#F8F8F8",
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#E6E6E6",
  alignItems: "center",
  justifyContent: "center",
}

/**
 * Describe your component here
 */
export const Radio = observer(function Radio(props: RadioProps) {
  const { style, item, selected, setSelected } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <View style={styles}>
      <TouchableOpacity
        onPress={() => {
          setSelected(item.value)
        }}
        style={BODY}
      >
        {selected ? <View style={ICON} /> : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected(item.value)
        }}
      >
        <Text style={TEXT}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  )
})
