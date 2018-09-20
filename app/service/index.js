const Service = require('beidou-core').Service;
class IndexService extends Service {
    async index() {
        let { ctx, app } = this;
        let result = {};
        try {
            result = {
                list: []
            }
        } catch (error) {
            result = {}
        }
        return result;
    }
}
module.exports = IndexService