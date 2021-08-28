/**
 * ajv 测试使用
 * node
 */

const schema = {
  type: "string",
  minLength: 10,
};

const Ajv = require("ajv");
const ajv = new Ajv();
const validata = ajv.compile(schema);
const valid = validata("gxb");
if (!valid) {
  console.log(validata.errors);
}
