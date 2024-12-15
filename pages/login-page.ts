import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.getByTestId('username-input')
    this.passwordInput = page.getByTestId('password-input')
    this.loginButton = page.getByRole('button', { name: 'Login' })
  }

  async goToLoingPage() {
    await this.page.goto('https://workshop-playwright.vercel.app/')
  }

  async inputUsername(username: string) {
    await this.usernameInput.fill(username)
  }

  async inputPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  async clickLogin() {
    await this.loginButton.click()
  }
}