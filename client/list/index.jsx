import React from 'react';
import ReactDOM from 'react-dom';
import Template from './template';
import './index.less';
export default class View extends React.Component {
    constructor() {
        super()
    }
    static getPartial(props) {
        const { data } = props;
        return {
            html: <Template data={data} />,
        };
    }
    render() {
        let { helper, data, html } = this.props;

        return (
            <html>
                <head>
                    <title>{data.title}</title>
                    <meta name="description" itemprop="description" content={data.description} />
                    <meta name="keywords" itemprop="keywords" content={data.keywords} />
                    <link rel="stylesheet" href={helper.asset('/index.css')} />
                    <link rel="stylesheet" href={helper.asset('/list.css')} />
                    <link rel="stylesheet" href={helper.asset('/manifest.css')} />
                </head>
                <body>
                    <div id="container" dangerouslySetInnerHTML={{ __html: html }}></div>
                    <script dangerouslySetInnerHTML={{ __html: `window.$$data=${JSON.stringify(data)}` }} />
                    <script src={helper.asset('/manifest.js')} />
                    <script src={helper.asset('/list.js')} />
                </body>
            </html>
        );
    }
}


if (__CLIENT__) {
    const data = window.$$data;
    ReactDOM.hydrate(<Template data={data} />, document.getElementById('container'));
}
