import React from "react"
import { StyleProp, ViewStyle } from "react-native"

export interface SpacerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  size?: number
}
