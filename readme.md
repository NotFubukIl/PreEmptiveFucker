# [PreEmptive Fucker](https://www.preemptive.com/products/jsdefender/online-javascript-obfuscator-demo/)
# Installation

(Must Have [NodeJS](https://nodejs.org/en/))
```
-Beautify The Obfuscated Code (https://beautifier.io/)
-Copy the let *; and the ! function() {} from the Obfuscated File to the index.js (line 1 & 2)
-At const i = 0 replace 0 by the last number of function (8 in the example)
-To Get The Last Numb. of Functions go to the bottom of the code and take the number it's like aaaq.****(number)
-Open A CMD
-Type npm i && node index.js {file}.js
-Output will be in {file}.deobfuscated.js
``` 

# Example
Beautify: 
![1](https://github.com/NotFubukIl/PreEmptiveFucker-/blob/main/images/1.png?raw=true)
Main Function And Let: 
![2](https://github.com/NotFubukIl/PreEmptiveFucker-/blob/main/images/2.png?raw=true)
In The Index: 
![3](https://github.com/NotFubukIl/PreEmptiveFucker-/blob/main/images/3.png?raw=true)
The Last Number: 
![4](https://github.com/NotFubukIl/PreEmptiveFucker-/blob/main/images/4.png?raw=true)
Deobfuscating:
![5](https://github.com/NotFubukIl/PreEmptiveFucker-/blob/main/images/5.png?raw=true)

Result: 
```js
// Job ID: 6js52oln68js

const wZQi = require(kNKc.UoWvb(0));
switch (process[kNKc.sRTvb(1)]) {
    case kNKc.sJLtb(2):
        wZQi[kNKc.gw3tb(3)](kNKc.EY0tb(4), kNKc.UgOtb(5));
        break;
    case kNKc.Ynqub(6):
        wZQi[kNKc.gw3tb(3)](kNKc.EY0tb(4), kNKc.kB8tb(7));
        break;
    default:
        wZQi[kNKc.gw3tb(3)](kNKc.EY0tb(4), kNKc.UoWvb(8));
        break;
}

To: 

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

```

## Credits:
- !"Dialz_†#0069
