import {
  ChainablePromiseArray,
  ChainablePromiseElement,
  ElementArray,
} from 'webdriverio'
import Page from './page'
import inputs from '../utils/inputs'
import { addShift, deleteShift, findShift } from '..'

const workShiftPageLocators = {
  employeesList: '.selectMany :nth-child(1)',
  btnAdd: '#btnAdd',
  btnAssing: '#btnAssignEmployee',
  input: '#workShift_name',
  btnSave: '#btnSave',
  timePickerFrom: '#workShift_workHours_from',
  timePickerTo: '#workShift_workHours_to',
  shiftName: `//a[text()='${inputs.shiftName}']`,
  hoursFrom: `//a[text()='${inputs.shiftName}']/../../td[3]`,
  hoursTo: `//a[text()='${inputs.shiftName}']/../../td[4]`,
  checkBox: `//a[text()='${inputs.shiftName}']/../../td/input`,
  btnDelete: `#btnDelete`,
  btnOk: `#dialogDeleteBtn`,
  customerList: '#customerList',
  shiftRows: 'tr',
}

export class WorkShiftPage extends Page {
  get employeesList(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.employeesList)
  }

  get btnAdd(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.btnAdd)
  }

  get btnAssing(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.btnAssing)
  }

  get input(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.input)
  }

  get btnSave(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.btnSave)
  }

  get timePickerFrom(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.timePickerFrom)
  }

  get timePickerTo(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.timePickerTo)
  }

  get shiftName(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.shiftName)
  }

  get hoursFrom(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.hoursFrom)
  }

  get hoursTo(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.hoursTo)
  }

  async getCheckBox(verifyText: string): Promise<WebdriverIO.Element> {
    return $(`//a[text()='${verifyText}']/../../td/input`)
  }

  get btnDelete(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.btnDelete)
  }

  get btnOk(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.btnOk)
  }

  get customerList(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(workShiftPageLocators.customerList)
  }

  get shiftRows(): ChainablePromiseArray<ElementArray> {
    return $$(workShiftPageLocators.shiftRows)
  }

  async addNewShift(
    shiftName: string,
    hoursFrom: string,
    hoursTo: string
  ): Promise<void> {
    addShift(this, shiftName, hoursFrom, hoursTo)
  }

  async findNewShift(
    shiftName: string,
    hoursFrom: string,
    hoursTo: string
  ): Promise<void> {
    return findShift(this, shiftName, hoursFrom, hoursTo)
  }

  async deleteNewShift(verifyText: string): Promise<void> {
    return deleteShift(this, verifyText)
  }
}
