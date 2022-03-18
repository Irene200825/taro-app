const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const getListData = require('./getList')

function getResult(data) {
    return {
        code: 200,
        msg: "成功",
        data
    }

}


const proxy = {
    'GET /api/getList': getResult(getListData)
}
module.exports = (noProxy ? {} : delay(proxy, 1000));
