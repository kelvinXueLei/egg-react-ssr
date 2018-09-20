module.exports = {
    noLogin(str) {
        return {
            status: 403,
            Msg: str,
            data: null
        }
    },
    success(data) {
        return {
            status: 200,
            Msg: 'request ok',
            data: JSON.parse(JSON.stringify(data)),
        }
    },
    errHandler(error, type = false) {
        let Msg = '服务器错误!'
        if (type) {
            this.logger.error(new Error(error));
        } else {
            Msg = error;
        }
        return {
            status: 500,
            Msg: Msg,
            data: null
        }
    }
};