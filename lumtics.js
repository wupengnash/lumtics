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
            ctx.body = responseExport('0', {}, '400', 'there is an error,baby you make me crazy!')
        }
        ctx.success = (data) => {
            ctx.body = responseExport('1', data, '200', 'there is the love ,baby you save my life!')
        }
        await next()
    }
}
