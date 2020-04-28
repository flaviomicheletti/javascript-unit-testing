let should = require('should');
let assert = require('assert');
// let expect = require('chai').expect

//
// https://stackoverflow.com/questions/21587122/mocha-chai-expect-to-throw-not-catching-thrown-errors
//
describe('Should', function () {
    it('Examples', function () {

        should.throws(() => x.y.z);
        should.throws(() => x.y.z, ReferenceError);
        should.throws(() => x.y.z, ReferenceError, /is not defined/);
        should.throws(() => x.y.z, /is not defined/);
        should.doesNotThrow(() => 42);
        should.throws(() => x.y.z, Error);
        // should.throws(() => model.get.z, /Property does not exist in model schema./)    

    })
})

describe('Should - Throw Other', () => {
    it('Should create a new lead', async () => {
        new Error("Some error message here")
    })
})

// describe('Chai', function () {
//     it('Examples', function () {

//         expect(() => x.y.z).to.throw();
//         expect(() => x.y.z).to.throw(ReferenceError);
//         expect(() => x.y.z).to.throw(ReferenceError, /is not defined/);
//         expect(() => x.y.z).to.throw(/is not defined/);
//         expect(() => 42).not.to.throw();
//         expect(() => x.y.z).to.throw(Error);
//         // expect(() => model.get.z).to.throw(/Property does not exist in model schema./);  

//     })
// })

