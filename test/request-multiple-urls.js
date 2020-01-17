const assert = require('chai').assert;
const urltest = require('../request-multiple-urls');

describe('urltest.js' , () =>
{
    it('Incorrect URL', () =>
    {
        var result=['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.jso'];
        urltest.requestMultipleUrls(result).then(urlContent => 
            console.log("The url is not correct")
            ).catch(err =>{assert.equal(err,new Error('403 Forbidden'))});
        
    });

    it('No input', () =>
    {
        urltest.requestMultipleUrls().then(urlContent => 
            console.log("No input provided")
            ).catch(err =>{assert.equal(err,"No input provided. Provide array of URLs")});
    });

    it('Incorrect input', () =>
    {
        urltest.requestMultipleUrls("random input").then(urlContent => 
            console.log("Incorrect input provided")
            ).catch(err =>{assert.equal(err,"Incorrect input. Provide array of URLs as input")});
    });
})
