import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

import { FoodLogModel, FoodLogSnapshotIn } from "../food-log/food-log"

/**
 * Model description here for TypeScript hints.
 */
export const FoodLogStoreModel = types
  .model("FoodLogStore")
  .props({
    food_logs: types.optional(types.array(FoodLogModel), []),
  })
  .views((self) => ({
    get allLogs() {
      return self.food_logs
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveLog: (foodLogSnapshot: FoodLogSnapshotIn) => {
      self.food_logs.push(foodLogSnapshot)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface FoodLogStore extends Instance<typeof FoodLogStoreModel> {}
export interface FoodLogStoreSnapshotOut extends SnapshotOut<typeof FoodLogStoreModel> {}
export interface FoodLogStoreSnapshotIn extends SnapshotIn<typeof FoodLogStoreModel> {}
export const createFoodLogStoreDefaultModel = () => types.optional(FoodLogStoreModel, {})

/*
 food_logs: types.optional(types.array(FoodLogModel), []),
*/
