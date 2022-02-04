import { use } from 'chai'
import { ChainablePromiseElement } from 'webdriverio'
import { logIn } from '..'
import Page from './page'

const loginPageLocators = {
  inputUsername: '#txtUsername',
  inputPassword: '#txtPassword',
  btnSubmit: '#btnLogin',
}

export class LoginPage extends Page {
  get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(loginPageLocators.inputUsername)
  }

  get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(loginPageLocators.inputPassword)
  }

  get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(loginPageLocators.btnSubmit)
  }

  login(username: string, password: string): Promise<any> {
    return logIn(this, username, password)
  }

  async open(): Promise<void> {
    super.open('index.php/auth/login')
  }
}
