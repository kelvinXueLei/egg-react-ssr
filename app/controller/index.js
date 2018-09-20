const Controller = require('beidou-core').Controller;

class IndexController extends Controller {

    async index() {
        let { ctx } = this;
        let result = await ctx.service.index.index();
        let data = {
            title: '测试标题',
            description: '测试description',
            keywords: '测试keywords',
            list: result
        }
        await ctx.render('/index/index', {
            data
        });
    }
}

module.exports = IndexController;