[TOC]
### ezhttp 库
该库由request库进行封装. 用于简易的调用http请求.

### 库的安装
`npm install ezhttp`

#### 1: GET 请求
`ezhttp.get(url, successCallBack, failCallBack)`

参数为:
```
url: get请求的地址
successCallBack:成功的回调．    
                回调内容为 body
failCallBack: 失败的回调
              当请求崩溃时: 回调内容为崩溃日志. 
              当请求失败时: 回调的内容为请求失败的内容.
```
例子: 
```
ezhttp.get('http://www.baidu.com',
    (res) => {
    console.log('成功:', res)
},
    (err) => {
    console.log('错误:', err)
    }
)
```
#### 2: POST 请求
`ezhttp.post(url, body, successCallBack, failCallBack)`
该请求用于一般的POST请求.非自定义Header的POST请求
参数为:
```
url: post请求的地址
body: 请求body的JSON体
successCallBack:成功的回调．    
                回调内容为 body
failCallBack: 失败的回调
              当请求崩溃时: 回调内容为崩溃日志. 
              当请求失败时: 回调的内容为请求失败的内容.
```
例子(以api接口为例):
```
// 请求的地址
var url = 'https://ts.api.com/api/user/login'
// 请求的body
var body = {
	password: "",
	username: ""
}
// 请求
ezhttp.post(url, body,
    (res) => {
        console.log("success:", res)
    },
    (err) => {
        console.log("fail", err)
    })
```
#### 3: 带HEADER的 POST 请求
`ezhttp.postWithHeader(url, headers, body, successCallBack, failCallBack)`
该方法用于调用需要自定义Header的POST请求
参数
```
url: post请求的地址
headers: 请求header
body: 请求body的JSON体
successCallBack:成功的回调．    
                回调内容为 body
failCallBack: 失败的回调
              当请求崩溃时: 回调内容为崩溃日志. 
              当请求失败时: 回调的内容为请求失败的内容.
```
例子(以api接口为例):
```
// 请求的地址
var url = 'https://ts.api.com/api/user/login'
// 请求的header
var headers = 
    {
        "content-type": "application/json",
    }
// 请求的body
var body = {
	password: "",
	username: ""
}
// 请求
ezhttp.postWithHeader(url, headers, body,
    (res) => {
        console.log("success:", res)
    },
    (err) => {
        console.log("fail", err)
    })
```

#### 4: POST 的表单 请求

`postForm(url, body, successCallback, failCallback)`
```
url: post请求的地址
body: 表单的json体
successCallBack:成功的回调．    
                回调内容为 body
failCallBack: 失败的回调
              当请求崩溃时: 回调内容为崩溃日志. 
              当请求失败时: 回调的内容为请求失败的内容.
```


```

```