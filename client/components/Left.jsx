import React from 'react';
import HeaderImg from '../images/my.jpg';
import Logo from '../images/qcode.jpg';

export default class Header extends React.Component {
    constructor(props) {
        super();
        let { data } = props;
        this.state = {
            typeList: data.typeList ,
            recommendList:data.recommendList ,
            isShow:data.isShow
        }
    }
    render() {
        return (
            <aside className="l_box">
                {
                    this.state.isShow && (
                        <div className="about_me">
                            <h2>关于我</h2>
                            <ul>
                                <i>
                                    <img src={HeaderImg} />
                                </i>
                                <p>
                                    <b>ryankl</b> 16年入行，主要从事大前端开发。一直致力于探索前端相关技术。对于node，小程序，前端相关技术有着自己的见解。
                        </p>
                            </ul>
                        </div>
                    )
                }
                <div className="search">
                    <input placeholder="请输入关键词" className="input_text" type="text" />
                    <input className="input_submit" value="搜索" type="submit" />
                </div>
                <div className="fenlei">
                    <h2>文章分类</h2>
                    <ul>
                        {
                            this.state.typeList.map((item)=>{
                                if(item.type==1){
                                    return <li key={item.type}><a href="">技术类 ({item.count})</a></li>
                                }else if(item.type==2){
                                    return <li key={item.type}><a href="">个人日志 ({item.count})</a></li>
                                }else{
                                    return <li key={item.type}><a href="">经验分享 ({item.count})</a></li>
                                }
                            })
                        }
                        
                    </ul>
                </div>
                <div className="tuijian">
                    <h2>文章推荐</h2>
                    <ul>
                        {
                            this.state.recommendList.map((item)=>{
                                return (<li key={item.id}><a href={`/details.html?id=${item.id}`}>{item.title}</a></li>)
                            })
                        }
                    </ul>
                </div>
                {
                    this.state.isShow && (
                        <div className="guanzhu">
                            <h2>关注我，么么哒</h2>
                            <ul>
                                <img src={Logo} />
                            </ul>
                        </div>
                    )
                }
                
            </aside>
        );
    }
}
