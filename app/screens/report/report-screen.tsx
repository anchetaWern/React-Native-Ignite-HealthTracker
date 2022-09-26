import React, { FC, useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { isToday, isThisWeek, isThisMonth } from "date-fns"

import { NavigatorParamList } from "../../navigators"
import { Screen, Text, Radio } from "../../components"

import { isWhatPercentOf } from "../../utils/numbers"

import { color, spacing } from "../../theme"

import { time_ranges, health_ratings } from "../../config/app"

import { useStores } from "../../models"

const ROOT_STYLE: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  padding: spacing.large,
}

const RATING_CONTAINER_STYLE: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

export const ReportScreen: FC<StackScreenProps<NavigatorParamList, "report">> = observer(
  function ReportScreen({ navigation }) {
    const { foodLogStore } = useStores()

    const [timeRange, setTimeRange] = useState("today")
    const [rating, setRating] = useState("---")

    const getRating = (timeRange) => {
      const filteredLog = foodLogStore.allLogs.filter((item) => {
        const currentDateTime = item.date

        if (timeRange === "today") {
          return isToday(currentDateTime)
        } else if (timeRange === "this week") {
          return isThisWeek(currentDateTime)
        } else if (timeRange === "this month") {
          return isThisMonth(currentDateTime)
        }
        return false
      })

      const ratings = filteredLog.map((item) => {
        return item.rating
      })

      const reduced = ratings.reduce((a, b) => a + b, 0)

      const avg = reduced / ratings.length
      const max_avg = (5 * ratings.length) / ratings.length

      const percent = isWhatPercentOf(avg, max_avg)

      const found = health_ratings.find((item) => {
        return percent >= item.range[0] && percent <= item.range[1]
      })

      if (found) {
        setRating(found.title)
      }
    }

    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        getRating(timeRange)
      })

      // Return the function to unsubscribe from the event so it gets removed on unmount
      return unsubscribe
    }, [navigation, timeRange])

    useEffect(() => {
      getRating(timeRange)
    }, [timeRange])

    return (
      <Screen style={ROOT_STYLE} preset="scroll">
        <View>
          <Text preset="bold" text="Filter" />
          {time_ranges.map((item, index) => {
            const selected = item == timeRange
            return (
              <Radio
                item={{ title: item, value: item }}
                key={index}
                selected={selected}
                setSelected={setTimeRange}
              />
            )
          })}
        </View>

        <View style={RATING_CONTAINER_STYLE}>
          <Text preset="header" text={rating} />
          <Text text="Rating" />
        </View>
      </Screen>
    )
  },
)
