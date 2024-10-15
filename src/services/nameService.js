const fs = require('fs');
const path = require('path');
function generateName(gender) {
    let namesData;
    if (gender === 'M') {
        namesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/namesM.json'), 'utf8'));
    } else if (gender === 'F') {
        namesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/namesF.json'), 'utf8'));
    } else {
        throw new Error('Invalid gender. Choose "M" for male or "F" for female.');
    }
    const firstName = namesData.firstName[Math.floor(Math.random() * namesData.firstName.length)];
    const secondName = namesData.secondName[Math.floor(Math.random() * namesData.secondName.length)];
    const thirdName = namesData.thirdName[Math.floor(Math.random() * namesData.thirdName.length)];
    return `${firstName} ${secondName} ${thirdName}`;
}
module.exports = { generateName };