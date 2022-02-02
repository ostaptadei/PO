import LoginPage from '../../src/pageobjects/login.page'
import mainPage from '../../src/pageobjects/main.page'
import inputs from '../../src/utils/inputs'
import { expect as chaiExpect } from 'chai'
import { config } from '../../wdio.conf'
import workShiftPage from '../../src/pageobjects/workShift.page'

describe('Add new record, check its presence and delete', () => {
  before('Should open login page and login', async () => {
    await LoginPage.open()
    await LoginPage.login(inputs.username, inputs.password)
  })

  it('Should redirect to dashboard page', async () => {
    const currentUrl = await browser.getUrl()
    return await chaiExpect(currentUrl).to.be.equal(
      config.baseUrl + inputs.dashBoardUrl
    )
  })

  it('Should go to WorkShift page', async () => {
    const goToWorkShiftResult = await mainPage.goToWorkShift()
    return chaiExpect(goToWorkShiftResult).to.be.equal(true)
  })

  it('Should show workShift page', async () => {
    const currentUrl = await browser.getUrl()
    return await chaiExpect(currentUrl).to.be.equal(
      config.baseUrl + inputs.workShiftUrl
    )
  })

  it('Should add new Shift', async () => {
    const addNewShiftResult = await workShiftPage.addNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
    return chaiExpect(addNewShiftResult).to.be.equal(true)
  })

  it('Should find new Shift', async () => {
    const findNewShiftResult = await workShiftPage.findNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
    return chaiExpect(findNewShiftResult).to.equal(true)
  })

  it('Should delete new Shift', async () => {
    const deleteNewShiftResult = await workShiftPage.deleteNewShift(
      inputs.shiftName
    )
    return chaiExpect(deleteNewShiftResult).to.be.equal(true)
  })

  it('Should make sure field is deleted', async () => {
    const findNewShiftResult = await workShiftPage.findNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
    chaiExpect(findNewShiftResult).to.be.equal(false)
  })
})
