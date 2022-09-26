import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const FoodLogModel = types
  .model("FoodLog")
  .props({
    id: types.identifier,
    food_id: types.string,
    rating: types.integer,
    date: types.Date,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface FoodLog extends Instance<typeof FoodLogModel> {}
export interface FoodLogSnapshotOut extends SnapshotOut<typeof FoodLogModel> {}
export interface FoodLogSnapshotIn extends SnapshotIn<typeof FoodLogModel> {}
export const createFoodLogDefaultModel = () => types.optional(FoodLogModel, {})
