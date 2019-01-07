const expect = require('chai').expect;

function myAsyncFunction(callback) {
    setTimeout(() => {
        callback('blah');
    }, 50);

}

function myAsyncPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('blah');
        }, 50);
    });
}

it('test_async', (done) => {
    myAsyncFunction((str) => {
        expect(str).to.equal('blah');
        done();
    });
});


it('test_promise', (done) => {
    myAsyncPromise().then((data) => {
        expect(data).to.equal('blah')  
    });
    done();      
});