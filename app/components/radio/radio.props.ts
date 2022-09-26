import React from "react"
import { StyleProp, ViewStyle } from "react-native"

export interface RadioProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  item?: Object

  selected?: boolean

  setSelected: Function
}
