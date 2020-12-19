const { GoogleSpreadsheet } = require("google-spreadsheet");

module.export = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadSheet(
      "1hf_ug7axD0RB43Ci4OVijw5qZ98aQrTGOf9LO3__nPw"
    );
  }
  async load() {
    await this.doc.useServiceAccoutAuth(require("./credentials.json"));
    await this.doc.loadInfo();
  }
  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows)
  }
}
(async function() {
    const sheet = new Sheet();
    await sheet.load()
    await sheet.addRows([
        { title: 'Software Engineer', location: 'SF' },
        { title: 'Designer', location: 'NY' },
      ]);
})

