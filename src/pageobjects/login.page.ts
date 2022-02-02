import { ChainablePromiseElement } from 'webdriverio'

import functions from '../helpers/helper'
import Page from './page'

const loginPageLocators = {
  inputUsername: '#txtUsername',
  inputPassword: '#txtPassword',
  btnSubmit: '#btnLogin',
}

class LoginPage extends Page {
  get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(loginPageLocators.inputUsername)
  }

  get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(loginPageLocators.inputPassword)
  }

  get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(loginPageLocators.btnSubmit)
  }

  async login(username: string, password: string): Promise<boolean> {
    return await functions.logIn.call(this, username, password)
  }

  open(): Promise<string> {
    return super.open('index.php/auth/login')
  }
}

export default new LoginPage()
