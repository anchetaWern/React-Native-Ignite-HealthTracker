import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */

export const FoodModel = types
  .model("Food")
  .props({
    id: types.identifier,
    name: types.string,
    rating: types.integer,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Food extends Instance<typeof FoodModel> {}
export interface FoodSnapshotOut extends SnapshotOut<typeof FoodModel> {}
export interface FoodSnapshotIn extends SnapshotIn<typeof FoodModel> {}
export const createFoodDefaultModel = () => types.optional(FoodModel, {})
