'use strict';

/**
 * 尝试多次调用一个函数，如果失败则重试，直到成功或超过重试次数
 *
 * @param fn 需要调用的函数，它应该返回一个Promise
 * @param params 调用函数时使用的参数
 * @param times 最大重试次数，默认为40次
 * @param delay 每次重试之间的延迟时间（毫秒），默认为1600ms
 *
 * @returns 当函数调用成功时解决Promise，否则拒绝Promise
 */
const retry = async (fn, params = {}, times = 40, delay = 1600) => {
    return new Promise((resolve, reject) => {
        const tFn = function () {
            fn(params)
                .then(resolve)
                .catch((e) => {
                if (times-- > 0) {
                    console.log(`还有${times}次机会`);
                    setTimeout(tFn, delay);
                }
                else {
                    reject(e);
                }
            });
        };
        return tFn();
    });
};

exports.retry = retry;
//# sourceMappingURL=index.js.map
