// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('5Verify_empty_email_field', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('5Verify_empty_email_field', async function() {
    await driver.get("https://www.instagram.com/")
    await driver.manage().window().setRect({ width: 1650, height: 900 })
    await driver.wait(until.elementLocated(By.css('[name="username"]')), 10000);
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("password")).click()
    await driver.findElement(By.name("password")).sendKeys("$FC5SnS!EdQtHKF")
    {
      const elements = await driver.findElements(By.xpath("//*[@id=\"loginForm\"]//button[@disabled]"))
      assert(elements.length)
    }
  })
})