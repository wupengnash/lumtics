var responseExport = (result, model = {}, status = '200', msg = '') => {
    return {
        result: result,
        data: model,
        status: status,
        msg: msg
    }
}

module.exports = () => {
    return async (ctx, next) => {
        ctx.error = () => {
            ctx.body = responseExport('0', {}, '400', 'fuck')
        }
        ctx.success = (data) => {
            ctx.body = responseExport('1', data, '200', 'very good')
        }
        await next()
    }
}