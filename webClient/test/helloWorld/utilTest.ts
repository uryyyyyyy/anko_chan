import util = require("../../src/helloWorld/util");
import assert_ from 'power-assert';
let assert = assert_; // for fixing "assert" name;

describe('util', () => {

    describe('hello()', () => {
        it('should add return [2,3]', () => {
            let result = util.hello("hi");
            assert(result ===  "string");
        });
    });
});