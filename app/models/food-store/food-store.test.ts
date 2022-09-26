import { FoodStoreModel } from "./food-store"

test("can be created", () => {
  const instance = FoodStoreModel.create()

  instance.saveFood({
    id: "somerandomid123",
    name: "fried chicken",
    rating: 2,
  })

  expect(instance.allFoods).toStrictEqual([
    {
      id: "somerandomid123",
      name: "fried chicken",
      rating: 2,
    },
  ])
})
