import test, { expect } from "@playwright/test"
import { LoginPage } from "../pages/login-page"

test.describe('Login website Success.', () => {
  test('Input Username and Password', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoingPage()
    await loginPage.inputUsername('Yeesibmaysa')
    await loginPage.inputPassword('12345')
    await loginPage.clickLogin()
    await expect(page.getByText('Welcome To ODDS| Conference Playwright Workshop')).toBeVisible()
  })
})


test.describe('Login website Failed.', () => {
  test('Input Username and Password', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToLoingPage()
    await loginPage.inputUsername('Yeesibmaysa')
    await loginPage.clickLogin()
    await expect(page.getByText('Password is Required')).toBeVisible()
  })
})
