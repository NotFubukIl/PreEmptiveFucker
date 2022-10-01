
const i = 0

// Code
const beautify = require('js-beautify').js
const fs = require("fs")

try {
    class PreEmptiveFucker {
        constructor(file) {
            this.deobf = `.${file.split(".")[1]}.deobfuscated.js`
            this.obfu = file
        }
        exec(n) {
            return eval(n)
        }
        writeNewContent(j) {
            return fs.writeFileSync(this.deobf, j)
        }
        getObfContent() {
            return fs.readFileSync(this.obfu).toString()
        }
        beauTify(v) {
            return beautify(v)
        }
        Deobf() {
            var getMainVar = fs.readFileSync(__filename).toString().split("\n")[0].slice(4, -2)
            fs.writeFileSync(this.obfu, this.beauTify(this.getObfContent()))
            var newContent = this.getObfContent()
            for (var _ = 0; _ < i + 1; _++) {
                newContent.split("\n").forEach(line => {
                    var NumberRegex = [ /\([\d\w]* \- [\d\w]*\)/g, /\([\d\w]* \& [\d\w]*\)/g, /\([\d\w]* \^ [\d\w]*\)/g, /\([\d\w]* \+ [\d\w]*\)/g ]
                    NumberRegex.forEach(NumberRegex => {
                        var [num] = NumberRegex.exec(line) || [null]
                        if (num) {
                            var numb = this.exec(num)
                            newContent = newContent.replace(num, numb)
                        }
                    })
                    var Regex = new RegExp(`${getMainVar}\\.[\\d\\D\\W\\w]{1,6}\\(${_}\\)`, "")
                    var [toReplace] = Regex.exec(newContent) || [null]
                    if (!toReplace) return
                    var evaln = this.exec(toReplace)
                    newContent = newContent.replace(Regex, `\`${evaln}\``)

                    var OtherRegex = new RegExp(`${getMainVar}\\[\`[\\d\\D\\w\\W]{1,6}\`\\]\\(\\)`, "")
                    var [OtherReplace] = OtherRegex.exec(newContent) || [null]
                    if (!OtherReplace) return
                    var OtherEval = this.exec(OtherReplace)
                    newContent = newContent.replace(OtherRegex, `${OtherEval}`)
                })
            }
            newContent = newContent.replace(/!!\[\]/g, "true").replace(/!\[\]/g, "false")
            this.writeNewContent(newContent)
            console.log(`\x1b[32m${file} Deobfuscated To ${this.deobf} !\x1b[0m`)
        }
    }

    var thisFile = process.argv[1]
    var file = process.argv[2]
    if (!fs.existsSync(file)) return console.log(`\x1b[31m${file} Doesn't Exist !\x1b[0m`)
    if (file.split("\\").pop() == thisFile.split("\\").pop()) return console.log(`\x1b[31mDo Not Try To Deobf This File !\x1b[0m`)
    console.log(`\x1b[34mDeobfuscating ${file}... \x1b[0m`)
    new PreEmptiveFucker(file).Deobf()

} catch (err) {
    return console.log(err)
}