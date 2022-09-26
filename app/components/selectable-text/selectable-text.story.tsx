import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { SelectableText } from "./selectable-text"

storiesOf("SelectableText", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("States", () => (
    <Story>
      <UseCase text="Unselected" usage="Default state">
        <SelectableText
          text="Selectable Text"
          id="id"
          setSelected={() => {
            console.log("set selected")
          }}
        />
      </UseCase>
      <UseCase text="Selected" usage="Selected state">
        <SelectableText
          text="Selectable Text"
          id="id"
          setSelected={() => {
            console.log("set selected")
          }}
          isSelected
        />
      </UseCase>
    </Story>
  ))
