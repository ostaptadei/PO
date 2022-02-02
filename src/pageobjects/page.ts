class Page {
  async open(path: string): Promise<string> {
    return browser.url(`${path}`)
  }
}

export default Page
