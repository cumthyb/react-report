import React from 'react';
import { Icon,Button } from "antd"
import Utils from "../../utils"
import Content from "../content/index.jsx"
import "./index.css";

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.level = this.props.Data.level;
        this.title = this.props.Data.title;
        this.content = this.props.Data.content;
        // console.log(this.props.Data)
    }

    getTitle() {
        const isLevel0 = this.level === 0;
        const hasIco = this.title.ico ? true : false;
        const hasBtn = this.title.button ? true : false;
        const hasContent=this.content? true : false;
        return (
            <div className={ isLevel0 ? "title-level-0" : "" }>
              <div>
                <span className="title title-main">{ hasIco ? <Icon type="windows" className="title-icon"></Icon> : null }{ Utils.trimEnd(this.title.main, '-') }</span>
                { isLevel0 ? <span className="title title-sub">-{ this.title.sub }</span> : null }
                {hasBtn?<Button type="primary" className="category-title-btn">{this.title.button.text}</Button>:null}
              </div>
              {hasContent?<Content categories={this.content.categories}></Content>:null} 
              <hr/>
            </div>
        )
    }

    render() {
        return (
            <div>
              { this.getTitle() }
            </div>
            );
    }


}

export default Block;