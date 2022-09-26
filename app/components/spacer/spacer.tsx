import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { SpacerProps } from "./spacer.props"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

/**
 * Describe your component here
 */
export const Spacer = observer(function Spacer(props: SpacerProps) {
  const { size } = props
  const style = { marginTop: size }
  const styles = Object.assign({}, CONTAINER, style)

  return <View style={styles}></View>
})
