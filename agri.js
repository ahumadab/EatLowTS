
import fs from 'fs'
import sortGroups from './utils/sortGroups.js'

const test = fs.readFileSync('agribalyse.json')
const data = JSON.parse(test)

const ingredients = []
const groupes = sortGroups(data)

console.log(groupes, groupes);



