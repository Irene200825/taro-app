

import Taro from "@tarojs/taro";

/**
 * 获取OpenID和session_key
 */
function getOpenID() {
    new Promise((resolve, reject) => {
        Taro.login({
            success: function (res) {

                if (!res.code) {
                    reject('登录失败:' + res.errMsg)
                }

                console.log(res)

                // 发起网络请求
                Taro.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session',
                    data: {
                        appid: 'wxa7f87798bca4a69b',
                        secret: '1700bc040b2f47ebd76a9fbc1a9ff01d',
                        js_code: res.code,
                        grant_type: 'authorization_code'
                    }
                }).then(({ data }) => {
                    let { openid, session_key } = data
                    Taro.setStorageSync('openid', openid)
                    Taro.setStorageSync('session_key', session_key)
                    resolve(data)
                }).catch((error) => {
                    reject('登录失败:' + error.errMsg)
                })

            }
        })
    })
}

/**
 * 登录
 */
function login() {
    Taro.checkSession({
        success: function () {
            console.log('=====Taro.checkSession检查登录态未过期')
        },
        fail: function () {
            getOpenID();
            //此处可以获取用户手机号自动登录
        }
    })
}


interface UserInfo {
    nickName: string,
    avatarUrl: string
}

function getUserProfile(isRefresh) {
    return new Promise<UserInfo>((resolve, reject) => {
        if (!isRefresh) {
            const userInfo: UserInfo = Taro.getStorageSync('userInfo')
            if (userInfo) {
                resolve(userInfo)
            }
        }

        Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log("======res", res.userInfo)
                Taro.setStorageSync('userInfo', res.userInfo)
                resolve(res.userInfo)
            },
            fail: function (error) {
                reject(error.errMsg)
            }
        })
    })
}


export {
    login,
    getUserProfile,
    UserInfo
}