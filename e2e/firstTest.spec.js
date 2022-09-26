// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

const { reloadApp } = require("./reload")

describe("Example", () => {
  beforeEach(async () => {
    await reloadApp()
  })

  it("should save the food", async () => {
    await expect(element(by.text("Food"))).toBeVisible()

    await element(by.id("food")).typeText("Fries")

    await expect(element(by.text("Fries"))).toExist()

    await element(by.text("Very Healthy")).tap()

    await element(by.text("Save")).tap()

    await expect(element(by.text("Saved!"))).toBeVisible()

    await expect(element(by.text("Fries"))).toNotExist()
  })
})
