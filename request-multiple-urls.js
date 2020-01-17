var https = require('https'); 
function fetchUrlData(url)
{
    return new Promise((resolve,reject) =>
    {
        https.get(url,function(res)
        {
            if(res.statusCode == 200)
            {
                res.on('data',(value)=>
                {
                    resolve(value.toString());
                })
            }
            else
            {
                reject(new Error(res.statusCode + " " +res.statusMessage))
            } 
        })
    })
}
requestMultipleUrls = (multipleUrls) => {
    if(multipleUrls != "" && multipleUrls != null )
    {
        if(Array.isArray(multipleUrls))
        {
            var multipleUrlsData = multipleUrls.map(url => 
                fetchUrlData(url).then(response => response)
                .catch(err => {return err}));
            return Promise.all(multipleUrlsData);
        }
        else
        {
            return Promise.reject("Incorrect input. Provide array of URLs as input");
        }
    }
    else
    {
       return Promise.reject("No input provided. Provide array of URLs");
    }
};

module.exports = {
    requestMultipleUrls : requestMultipleUrls
}

