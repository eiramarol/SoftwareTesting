// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('2verify_Email_and_pw_Labels', function() {
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
  it('2verify_Email_and_pw_Labels', async function() {
    await driver.get("https://www.instagram.com/")
    await driver.manage().window().setRect({ width: 1650, height: 900 })
    await driver.wait(until.elementLocated(By.css('[name="username"]')), 10000);
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//form[@id=\"loginForm\"]//label//span[contains(.,\"Phone number, username, or email\")]"))), 30000)
    {
      const elements = await driver.findElements(By.xpath("//form[@id=\"loginForm\"]//label//span[contains(.,\"Phone number, username, or email\")]"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//form[@id=\"loginForm\"]//span[contains(.,\"Password\")]"))
      assert(elements.length)
    }
  })
})