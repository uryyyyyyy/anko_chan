import util = require("../../src/util/Util");
import assert = require("assert");

describe('util', () => {
    describe('hello()', () => {
        it('should add return [2,3]', () => {
            let result = util.hello("hi");
            assert(result ===  "string");
        });
    });
});