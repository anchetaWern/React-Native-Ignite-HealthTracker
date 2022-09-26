import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { Radio } from "./radio"

declare let module

storiesOf("Radio", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("States", () => (
    <Story>
      <UseCase text="Unselected" usage="When not yet selected.">
        <Radio
          item={{ title: "title", value: "value" }}
          setSelected={false}
          setSelected={() => {
            console.log("selected radio")
          }}
        />
      </UseCase>

      <UseCase text="Selected" usage="When selected.">
        <Radio
          item={{ title: "title", value: "value" }}
          selected
          setSelected={() => {
            console.log("selected radio")
          }}
        />
      </UseCase>
    </Story>
  ))
