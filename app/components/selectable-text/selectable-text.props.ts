import React from "react"
import { StyleProp, ViewStyle } from "react-native"

export interface SelectableTextProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  text: string

  id: string

  setSelected: Function

  isSelected: boolean
}
