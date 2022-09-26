import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

import { FoodModel, FoodSnapshotIn } from "../food/food"
/**
 * Model description here for TypeScript hints.
 */

export const FoodStoreModel = types
  .model("FoodStore")
  .props({
    foods: types.optional(types.array(FoodModel), []),
  })
  .views((self) => ({
    get allFoods() {
      return self.foods
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveFood: (foodSnapshot: FoodSnapshotIn) => {
      self.foods.push(foodSnapshot)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface FoodStore extends Instance<typeof FoodStoreModel> {}
export interface FoodStoreSnapshotOut extends SnapshotOut<typeof FoodStoreModel> {}
export interface FoodStoreSnapshotIn extends SnapshotIn<typeof FoodStoreModel> {}
export const createFoodStoreDefaultModel = () => types.optional(FoodStoreModel, {})
