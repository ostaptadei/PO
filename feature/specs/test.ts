import inputs from '../../src/utils/inputs'
import { expect as chaiExpect } from 'chai'
import { config } from '../../wdio.conf'
import { LoginPage, MainPage, WorkShiftPage } from '../..'

const workShiftPage = new WorkShiftPage()
const mainPage = new MainPage()
const loginPage = new LoginPage()

describe('Add new record, check its presence and delete', () => {
  before('Should open login page and login', async () => {
    await loginPage.open()
    await loginPage.login(inputs.username, inputs.password)
  })

  it('Should redirect to dashboard page', async () => {
    const currentUrl = await browser.getUrl()
    chaiExpect(currentUrl).to.be.equal(config.baseUrl + inputs.dashBoardUrl)
  })

  it('Should go to WorkShift page', async () => {
    await mainPage.goToWorkShift()
    const customerListIsPresent = await workShiftPage.customerList.isDisplayed()
    chaiExpect(customerListIsPresent).to.be.equal(true)
  })

  it('Should show workShift page', async () => {
    const currentUrl = await browser.getUrl()
    chaiExpect(currentUrl).to.be.equal(config.baseUrl + inputs.workShiftUrl)
  })

  it('Should add new Shift', async () => {
    const shiftRowsNumberPrimary = await workShiftPage.shiftRows.length
    workShiftPage.addNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
    const shiftRowsNumberFinally = await workShiftPage.shiftRows.length
    chaiExpect(shiftRowsNumberFinally).to.be.equal(shiftRowsNumberPrimary)
  })

  it('Should find new Shift', async () => {
    await workShiftPage.findNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
    const newShiftNameIsPresent = await workShiftPage.shiftName.isDisplayed()
    chaiExpect(newShiftNameIsPresent).to.equal(true)
  })

  it('Should delete new Shift and make sure field is deleted', async () => {
    await workShiftPage.deleteNewShift(inputs.shiftName)
    const deleteNewShiftResult = await workShiftPage.shiftName.isDisplayed()
    chaiExpect(deleteNewShiftResult).to.be.equal(false)
  })
})
