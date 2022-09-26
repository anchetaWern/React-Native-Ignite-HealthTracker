import { FoodModel } from "./food"

test("can be created", () => {
  const instance = FoodModel.create({
    id: "someid123",
    name: "some food",
    rating: 5,
  })

  expect(instance).toBeTruthy()
})
