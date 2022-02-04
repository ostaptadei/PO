import { LoginPage, MainPage, WorkShiftPage } from '..'

export async function logIn(
  page: LoginPage,
  username: string,
  password: string
): Promise<void> {
  await page.inputUsername.waitForDisplayed({ timeout: 3000 })
  await page.inputUsername.addValue(username)
  await page.inputPassword.waitForDisplayed({ timeout: 3000 })
  await page.inputPassword.addValue(password)
  await page.inputPassword.waitForClickable({ timeout: 2000 })
  await page.btnSubmit.click()
}

export async function redirectToWorkShift(page: MainPage): Promise<void> {
  await page.adminTab.waitForDisplayed({ timeout: 3000 })
  await page.adminTab.moveTo()
  await page.jobTab.waitForDisplayed({ timeout: 3000 })
  await page.jobTab.moveTo()
  await page.workShiftTab.waitForClickable({ timeout: 2000 })
  await page.workShiftTab.click()
}

export async function addShift(
  page: WorkShiftPage,
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): Promise<void> {
  await page.btnAdd.waitForClickable({ timeout: 2000 })
  await page.btnAdd.click()

  await page.employeesList.waitForDisplayed({ timeout: 3000 })
  await page.employeesList.click()

  await page.btnAssing.waitForClickable({ timeout: 2000 })
  await page.btnAssing.click()

  await page.timePickerFrom.waitForDisplayed({ timeout: 3000 })
  await page.timePickerFrom.addValue(hoursFrom)

  await page.timePickerTo.waitForDisplayed({ timeout: 3000 })
  await page.timePickerTo.addValue(hoursTo)

  await page.input.waitForDisplayed({ timeout: 3000 })
  await page.input.addValue(shiftName)

  await page.btnSave.waitForClickable({ timeout: 2000 })
  await page.btnSave.click()
}

export async function findShift(
  page: WorkShiftPage,
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): Promise<void> {
  await page.shiftName.waitForDisplayed({ timeout: 3000 })
  await page.shiftName.getText()

  await page.hoursFrom.waitForDisplayed({ timeout: 3000 })
  await page.hoursFrom.getText()

  await page.hoursTo.waitForDisplayed({ timeout: 3000 })
  await page.hoursTo.getText()
}

export async function deleteShift(
  page: WorkShiftPage,
  verifyText: string
): Promise<void> {
  const checkBox = await page.getCheckBox(verifyText)
  await checkBox.waitForClickable({ timeout: 2000 })
  await checkBox.click()
  await page.btnDelete.waitForClickable({ timeout: 2000 })
  await page.btnDelete.click()
  await page.btnOk.waitForClickable({ timeout: 2000 })
  await page.btnOk.click()
}
