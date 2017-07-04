/**
 * Created by Anshi on 2017/7/4.
 */
const CONFIG = {
    url: "https://m.weibo.cn/api/container/getIndex?uid=5780432802&luicode=10000012&lfid=1005052854011612_-_FOLLOWERS&type=uid&value=5780432802&containerid=1076035780432802",
    cookie: "_T_WM=15847c1b59e828b1d765340fb474a72f; ALF=1501584350; SCF=AnuBF0CUhIcA75-2MDDW3gv4Hvrs9y_Gb0e0TvCF9JFCpyeAsJNJOM7blX6kdEN_RXjlbtU-08vBCALkjAlDIrI.; SUB=_2A250X3ceDeThGeRG7lYR8S_Kyj6IHXVXoBlWrDV6PUJbktBeLRfWkW1SvhSLkJNkZ4GLmuPBdvtj4YZlCg..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WF2RTmxiPbLgsPf_QD2CvIF5JpX5o2p5NHD95QE1h-Xeh2pSo2EWs4Dqcj_i--NiKnXi-2ci--Ri-zpiKnci--RiKnfiK.7i--Ni-z0iK.ci--RiKnXiK.p; SUHB=02M-uekc_I25qI; SSOLoginState=1499137870; M_WEIBOCN_PARAMS=luicode%3D10000012%26lfid%3D1005052854011612_-_FOLLOWERS%26fid%3D1005055780432802%26uicode%3D10000011"
};

const request = require('reuest');
const dataBase = require('../dataBase/weiboTest');
const documentCls = require('./documentCls');

module.exports = {
    getWebListFromUserPage(){
        return new Promise((resolve, reject) => {
            request({url: CONFIG.url, headers: {Cookie: CONFIG.cookie}}, (err, res, body) => {
                if (err) {
                    reject(err)
                } else if (res.statusCode === 200) {
                    resolve(documentCls.getUserListFromOrigin(JSON.parse(body)))
                }
            })
        })
    }
}
