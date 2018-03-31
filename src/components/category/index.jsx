import React from 'react';
import { Button } from "antd";
import Chart from "../chart/index"
import Conclusion from "../conclusion/index"
import "./index.css"

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.data = this.props.Data;
    }

    /**
     * 输出段落
     * 
     * @param {any} paras 段落数组
     * @returns 段落组件
     * @memberof Category
     */
    getParagraphs(paras) {
        return (
            <div className="category-paragraphs">
              { paras.map((text, index) => {
                    return (<p key={ index }>
                              { text } </p>)
                }) } </div>
        )
    }


    /**
     * 
     * 
     * @param {any} charts 
     * @memberof Category
     */
    getCharts(charts) {
        return (
            <div className="ChartContainer">
              { charts.map((chart, index) => {
                    return <Chart key={ index } ChartInfo={ chart }></Chart>
                }) }
            </div>
        )
    }


    /**
     * 
     * 
     * @param {any} conclusions {text:string,conclusionsitems:[]
     * @memberof Category
     */
    getConclusions(conclusions) {
        return (
            <div>
              <p>
                { conclusions.text }
              </p>
              { conclusions.conclusionsitems.map((item, index) => {
                    return <Conclusion key={ index } Item={ item }></Conclusion>
                }) }
            </div>
        )
    }

    render() {
        const hasText = this.data.text ? true : false;
        const hasBtn = this.data.button ? true : false;
        const hasParagrah = this.data.paragraphs ? true : false;
        const hasCharts = this.data.charts ? true : false;
        const hasConclusion = this.data.conclusions ? true : false;
        return (
            <div className="category">
              <div className="category-title">
                { hasText ? <span className="category-title-text">{ this.data.text }</span> : null }
                { hasBtn ? <Button type="primary" className="category-title-btn">Primary</Button> : null }
              </div>
              { hasParagrah ? this.getParagraphs(this.data.paragraphs.texts) : null }
              { hasCharts ? this.getCharts(this.data.charts.charts) : null }
              { hasConclusion ? this.getConclusions(this.data.conclusions) : null }
            </div>
        )
    }

}


export default Category;