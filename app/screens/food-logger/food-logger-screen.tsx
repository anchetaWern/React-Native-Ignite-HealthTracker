import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

var randomId = require("random-id")

import { NavigatorParamList } from "../../navigators"
import { Screen, Text, TextField, SelectableText, Button, Spacer } from "../../components"

import { color } from "../../theme"

import { useStores } from "../../models"

const ROOT_STYLE: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  padding: 20,
}

export const FoodLoggerScreen: FC<StackScreenProps<NavigatorParamList, "foodLogger">> = observer(
  function FoodLoggerScreen() {
    const { foodStore, foodLogStore } = useStores()

    const [food, setFood] = useState("")
    const [selectedFood, setSelectedFood] = useState(null)

    const filteredFoods = food
      ? foodStore.allFoods.filter((item) => {
          return item.name.toLowerCase().includes(food.toLowerCase())
        })
      : []

    const hasNoFoods = foodStore.allFoods.length === 0
    const hasFoodsButNotFiltered = foodStore.allFoods.length > 0 && filteredFoods.length === 0

    const resetForm = () => {
      setFood("")
      setSelectedFood(null)
    }

    const saveLog = () => {
      const selected_food_data = foodStore.allFoods.find((item) => item.id === selectedFood)

      foodLogStore.saveLog({
        id: randomId(10),
        food_id: selectedFood,
        rating: selected_food_data.rating,
        date: new Date(),
      })

      resetForm()
    }

    return (
      <Screen style={ROOT_STYLE} preset="scroll">
        <TextField
          onChangeText={(value) => setFood(value)}
          inputStyle={{ color: color.palette.black }}
          value={food}
          label="Food"
          placeholder="Pinakbet"
        />

        {hasNoFoods && <Text text="Create some foods first.." />}

        {hasFoodsButNotFiltered && <Text text="Type something.." />}

        {filteredFoods.map((item) => {
          const isSelected = item.id === selectedFood
          return (
            <SelectableText
              text={item.name}
              key={item.id}
              id={item.id}
              setSelected={setSelectedFood}
              isSelected={isSelected}
            />
          )
        })}

        <Spacer size={30} />

        <Button text="Save" preset="large" onPress={saveLog} />
      </Screen>
    )
  },
)
