import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { FoodStoreModel } from "../../models/food-store/food-store"
import { FoodLogStoreModel } from "../../models/food-log-store/food-log-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({

  foodStore: types.optional(FoodStoreModel, {} as any),
  foodLogStore: types.optional(FoodLogStoreModel, {} as any),

})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
