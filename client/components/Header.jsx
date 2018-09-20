import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super();
        
    }
    render() {
        return (
            <header className="header-navigation" id="header">
                <nav>
                    <div className="logo">
                        <a href="/">ryankl的个人博客</a>
                    </div>
                    <h2 id="mnavh">
                        <span className="navicon"></span>
                    </h2>
                    <ul id="starlist">
                        <li>
                            <a href="/">网站首页</a>
                        </li>

                        <li>
                            <a href="/list.html">日志文章</a>
                        </li>
                        <li>
                            <a href="/about.html">关于我</a>
                        </li>

                    </ul>
                </nav>
            </header>
        );
    }
}
