import { merge } from "webpack-merge"
import commonMod from "./rollup.node.common.config.mjs"


export default merge(commonMod, {
  input: 'app/src/circMsgpack.ts',
  output: {
    file: 'app/dist/cjs/circMsgpack.js',
    format: 'cjs'
  },
})