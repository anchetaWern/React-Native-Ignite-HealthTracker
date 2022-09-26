import { FoodLogStoreModel } from "./food-log-store"

test("can be created", () => {
  const instance = FoodLogStoreModel.create({
    food_logs: [
      {
        id: "someid123",
        food_id: "somefoodid123",
        rating: 5,
        date: new Date(),
      },
    ],
  })

  expect(instance).toBeTruthy()
})
