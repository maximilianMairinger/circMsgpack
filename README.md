# Circ msgpack

A minimalistic, extensible MessagePack encoder and decoder for the web, supporting circular references. Built upon [tiny-msgpack](https://www.npmjs.com/package/tiny-msgpack).

**Why not just use [tiny-msgpack](https://www.npmjs.com/package/tiny-msgpack)?**

This library adds support for circular references and `undefined` as a value.


## Installation

```shell
 $ npm i circ-msgpack
```

## Usage



```ts
import { encode, decode } from "circ-msgpack"

const ob = { a: 1, b: "2", c: undefined }
ob.d = ob

const encoded = encode(ob)
const decoded = decode(encoded)

console.log(deepCircularEqual(ob, decoded)) // true
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
