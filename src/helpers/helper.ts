import { expect as chaiExpect } from 'chai'

async function logIn(username: string, password: string): Promise<boolean> {
  try {
    await this.inputUsername.addValue(username)
    await this.inputPassword.addValue(password)
    await this.btnSubmit.click()
    return true
  } catch (err) {
    return false
  }
}

async function redirectToWorkShift(): Promise<boolean> {
  try {
    await this.adminTab.moveTo()
    await this.jobTab.moveTo()
    await this.workShiftTab.click()
    return true
  } catch (err) {
    return false
  }
}

async function addShift(
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): Promise<boolean> {
  try {
    await this.btnAdd.click()
    await this.employeesList.click()
    await this.btnAssing.click()
    await this.timePickerFrom.addValue(hoursFrom)
    await this.timePickerTo.addValue(hoursTo)
    await this.input.addValue(shiftName)
    await this.btnSave.click()
    return true
  } catch (err) {
    return false
  }
}

async function findShift(
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): Promise<boolean> {
  try {
    await chaiExpect(await this.shiftName.getText()).to.equal(shiftName)
    await chaiExpect(await this.hoursFrom.getText()).to.equal(hoursFrom)
    await chaiExpect(await this.hoursTo.getText()).to.equal(hoursTo)
    return true
  } catch (err) {
    console.log(new Error('Field is not present on the page'))
    return false
  }
}

async function deleteShift(verifyText: string): Promise<boolean> {
  try {
    const checkBox = await this.getCheckBox(verifyText)
    await checkBox.click()
    await this.btnDelete.click()
    await this.btnOk.click()
    return true
  } catch (err) {
    return false
  }
}

const functions = {
  logIn,
  redirectToWorkShift,
  addShift,
  findShift,
  deleteShift,
}

export default functions
