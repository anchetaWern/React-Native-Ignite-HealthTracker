import { FoodLogModel } from "./food-log"

test("can be created", () => {
  const instance = FoodLogModel.create({
    id: "someid123",
    food_id: "some food",
    rating: 5,
    date: new Date(),
  })

  expect(instance).toBeTruthy()
})
