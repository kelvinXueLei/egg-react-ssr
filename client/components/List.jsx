import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super();
        let {list} = props;
        this.state = {
            list
        }
    }
    render() {
        return (
            <main className="r_box">
            {
                this.state.list.map((item)=>{
                    return (
                        <li key={item.id}>
                            <h3>
                                <a href={`/details.html?id=${item.id}`}>{item.title}</a>
                            </h3>
                            <p>{item.des}</p>
                        </li>
                    )
                })
            }    
            </main>  
        );
    }
}
