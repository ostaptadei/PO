import { ChainablePromiseElement } from 'webdriverio'
import functions from '../helpers/helper'
import Page from './page'

const mainPageLocators = {
  adminTab: '#menu_admin_viewAdminModule',
  jobTab: '#menu_admin_Job',
  workShiftTab: '#menu_admin_workShift',
}

class MainPage extends Page {
  get adminTab(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(mainPageLocators.adminTab)
  }

  get jobTab(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(mainPageLocators.jobTab)
  }

  get workShiftTab(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(mainPageLocators.workShiftTab)
  }

  async goToWorkShift(): Promise<boolean> {
    return await functions.redirectToWorkShift.call(this)
  }
}

export default new MainPage()
