import React from 'react';
import Header from '../components/Header';
import Left from '../components/Left';
import Footer from '../components/Footer';
import List from '../components/List';
import { Pagination } from 'antd';
export default class Template extends React.Component {
    constructor(props) {
        super();
        let { data } = props;
        this.state = {
            typeList: data.typeList || [],
            recommendList: data.recommendList || [],
            ...data.list
        }
        this.onChange = this.onChange.bind(this);
    }
    render() {
        return (
            <div>
                <Header></Header>
                <article>
                    <Left data={this.state}></Left>
                    <div className="rightbox">
                        <List list={this.state.list}></List>
                        <Pagination className="page" current={this.state.pageNo} pageSize={this.state.pageSize} total={this.state.total} onChange={this.onChange}  />
                    </div>
                </article>
                <Footer></Footer>
            </div>
        );
    }
    onChange(e) {
        window.location.href = `/list.html?pageNo=${e}`
    }
}
