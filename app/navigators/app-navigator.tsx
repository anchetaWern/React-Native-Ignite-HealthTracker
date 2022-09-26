/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { CreateFoodScreen, FoodLoggerScreen, ReportScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"

import Icon from "react-native-vector-icons/FontAwesome5"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  createFood: undefined
  foodLogger: undefined
  report: undefined
}

const Tab = createBottomTabNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="createFood"
    >
      <Tab.Screen
        name="createFood"
        component={CreateFoodScreen}
        options={{
          tabBarIcon: () => <Icon name="carrot" size={30} color="#333" />,
          title: "Create Food",
        }}
      />

      <Tab.Screen
        name="foodLogger"
        component={FoodLoggerScreen}
        options={{
          tabBarIcon: () => <Icon name="clipboard-list" size={30} color="#333" />,
          title: "Add Log",
        }}
      />

      <Tab.Screen
        name="report"
        component={ReportScreen}
        options={{
          tabBarIcon: () => <Icon name="chart-area" size={30} color="#333" />,
          title: "Report",
        }}
      />
    </Tab.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
