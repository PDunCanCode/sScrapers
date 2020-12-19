const { GoogleSpreadsheet } = require('google-spreadsheet')

const doc = new GoogleSpreadSheet('1hf_ug7axD0RB43Ci4OVijw5qZ98aQrTGOf9LO3__nPw')

(async function() {
    
    console.log(doc.title)
    await doc.updateProperties({ title: 'rebnamed doc' })

    const sheet = doc.sheetsByIndex[0];
    
})