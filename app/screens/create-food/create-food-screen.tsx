import React, { FC, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

var randomId = require("random-id")

import { NavigatorParamList } from "../../navigators"
import { Screen, Text, TextField, Button, Radio, Spacer } from "../../components"

import { color } from "../../theme"

import { FoodStoreModel } from "../../models/food-store/food-store"

import { food_ratings } from "../../config/app"

import { useStores } from "../../models"

const ROOT_STYLE: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  padding: 20,
}

export const CreateFoodScreen: FC<StackScreenProps<NavigatorParamList, "createFood">> = observer(
  ({ navigation }) => {
    const [food, setFood] = useState("")
    const [rating, setRating] = useState(2)

    const [saveButtonText, setSaveButtonText] = useState("Save")

    const { foodStore } = useStores()

    const resetForm = () => {
      setFood("")
      setRating(2)
    }

    const saveFood = () => {
      foodStore.saveFood({
        id: randomId(10),
        name: food,
        rating,
      })

      resetForm()

      setSaveButtonText("Saved!")

      setTimeout(() => {
        setSaveButtonText("Save")
      }, 1800)
    }

    return (
      <Screen style={ROOT_STYLE} preset="scroll">
        <TextField
          onChangeText={(value) => setFood(value)}
          inputStyle={{ color: color.palette.black }}
          value={food}
          label="Food"
          placeholder="Pinakbet"
          testID="food"
        />

        <Spacer size={10} />

        <Text preset="bold" text="Rating" />
        {food_ratings.map((item, index) => {
          const selected = item.rating === rating
          return (
            <Radio
              item={{ title: item.title, value: item.rating }}
              key={index}
              selected={selected}
              setSelected={setRating}
            />
          )
        })}

        <Spacer size={30} />

        <Button text={saveButtonText} preset="large" onPress={saveFood} />
      </Screen>
    )
    // },
  },
)
