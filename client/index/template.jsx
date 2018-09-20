import React from 'react';
import Header from '../components/Header';
import Left from '../components/Left';
import Footer from '../components/Footer';
import List from '../components/List';
import Axios from 'axios';
import { Pagination } from 'antd';

export default class Template extends React.Component {
    constructor(props) {
        super();
        let { data } = props;
        this.state = {
            typeList: data.typeList || [],
            recommendList: data.recommendList || [],
            list:data.list.list || [],
            isShow:data.isShow,
            pageSize:data.list.pageSize || 10,
            total:data.list.total || 0,
            pageNo:data.list.pageNo
        }
        this.onChange = this.onChange.bind(this);
        this.ontest = this.ontest.bind(this);
    }
    render() {
        return (
            <div>
                <Header></Header>
                <article>
                    <Left data={this.state}></Left>
                    <div className="rightbox">
                        <List list={this.state.list}></List>
                        <Pagination className="page" current={this.state.pageNo} pageSize={this.state.pageSize} total={this.state.total} onChange={this.onChange} />
                    </div>
                </article>
                <Footer></Footer>
            </div>
        );
    }
    onChange(e){
        window.location.href = `/list.html?pageNo=${e}`
    }
    ontest(){
        Axios.get('/api/get/post/list?pageNo=1').then((res)=>{

        }).catch(err=>{

        })
    }
}
