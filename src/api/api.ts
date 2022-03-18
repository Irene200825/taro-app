import Taro from "@tarojs/taro";
import { Product } from "src/interface";
const host = 'http://192.168.115.210:3721';

function request(method, header, url, data): Promise<any> {
    return new Promise((resolve, reject) => {
        Taro.request({
            url: host + url,
            method,
            data,
            header,
            success: function (res) {
                let data = res.data;

                if (!data || data.code !== 200) {
                    throw new Error(data.msg)
                }

                resolve(data.data)

            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}


function get<T = any>(url:string, data:object): Promise<[T, any]> {
    return request('GET', {}, url, data)
}

function post<T = any>(url:string, data:object): Promise<[T, any]> {
    return request('POST', {}, url, data)
}
export default { get, post }


/**
 * 获取列表
 * @returns 
 */
export function getListApi(): Promise<Product[]>{
    return get<Product[]>('/api/getList',{})
}