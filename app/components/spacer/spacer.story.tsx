import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Text } from "react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"

import { Spacer } from "./spacer"

storiesOf("Spacer", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Sizes", () => (
    <Story>
      <UseCase text="20" usage="">
        <Text>Top</Text>
        <Spacer size={20} />
        <Text>Bottom</Text>
      </UseCase>
      <UseCase text="50" usage="">
        <Text>Top</Text>
        <Spacer size={50} />
        <Text>Bottom</Text>
      </UseCase>
    </Story>
  ))
