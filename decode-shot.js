const fs = require("fs")
const input = process.argv[2]
const output = process.argv[3]
const json = JSON.parse(fs.readFileSync(input, "utf8"))
const buffer = Buffer.from(json.data, "base64")
fs.writeFileSync(output, buffer)
console.log(buffer.length)
