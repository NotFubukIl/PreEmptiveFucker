// Job ID: 6js52oln68js

const wZQi = require(`fs`);
switch (process[`platform`]) {
    case `win32`:
        wZQi[`writeFileSync`](`./platform.txt`, `Windows`);
        break;
    case `darwin`:
        wZQi[`writeFileSync`](`./platform.txt`, `MacOS`);
        break;
    default:
        wZQi[`writeFileSync`](`./platform.txt`, `Linux`);
        break;
}