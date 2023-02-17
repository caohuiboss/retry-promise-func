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
export declare const retry: <T>(fn: (params: any) => Promise<T>, params?: any, times?: number, delay?: number) => Promise<T>;
