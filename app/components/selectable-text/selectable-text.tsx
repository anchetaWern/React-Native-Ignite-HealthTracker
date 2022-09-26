import * as React from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { SelectableTextProps } from "./selectable-text.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT_STYLE: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 18,
  color: color.primary,
}

/**
 * Describe your component here
 */
export const SelectableText = observer(function SelectableText(props: SelectableTextProps) {
  const { style, text, id, setSelected, isSelected } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(id)
      }}
      style={styles}
    >
      <View style={{ padding: 10 }}>
        <Text style={[TEXT_STYLE, { fontWeight: isSelected ? "600" : "200" }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
})
