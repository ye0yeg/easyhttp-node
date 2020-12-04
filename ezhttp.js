var request = require('request');

var EasyyHttp = {
    /**
     * 普通的get请求
     * @param {string} url 
     * @param {Any} successCallback 
     * @param {Any} failCallback 
     */
    get(url, successCallback, failCallback) {
        request(url,
            function (error, response, body) {
                if (error) {
                    failCallback(error)
                    return
                } else {
                    if (response.statusCode == 200) {
                        successCallback(body)
                    } else {
                        failCallback(body)
                    }
                }
            })
    },
    /**
     * 普通的post请求
     * @param {string} url 
     * @param {JSON} body 
     * @param {Any} successCallback 
     * @param {Any} failCallback 
     */
    post(url, body, successCallback, failCallback) {
        var options = {
            url: url,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body)
        }
        request.post(options, function (error, response, body) {
            if (error) {
                failCallback(error)
            } else {
                if (response.statusCode == 200) {
                    successCallback(body)
                } else {
                    failCallback(response.statusCode)
                }
            }
        })
    },
    /**
     * 自定义header的post请求
     * @param {sting} url
     * @param {JSON} headers => headers: {'User-Agent': 'request'}
     * @param {JSON} body
     * @param {Any} successCallback
     * @param {Any} failCallback
     */
    postWithHeader(url, headers, body, successCallback, failCallback) {
        var options = {
            url: url,
            headers: headers,
            body:  JSON.stringify(body)
        }
        request.post(options, function (error, response, body) {
            if (error) {
                failCallback(error)
            } else {
                if (response.statusCode == 200) {
                    successCallback(body)
                } else {
                    failCallback(response.statusCode)
                }
            }
        })
    },
    postForm(url, bodys, successCallback, failCallback) {
        request.post(
            url,
            { form: bodys },
            function (error, response, body) {
                if(error){
                    failCallback(error)
                }else{
                    if(response.statusCode != 200){
                        failCallback(response.statusCode)
                    }else{
                        successCallback(body)
                    }
                }
            })
    }

}
module.exports = EasyyHttp