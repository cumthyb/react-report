/*
 * @Author: cumthyb 
 * @Date: 2018-03-27 23:54:05 
 * @Last Modified by: cumthyb
 * @Last Modified time: 2018-03-28 00:05:15
 * 
 * Chart组件 输出 Table Bar Pie中的一类
 */


import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

// 引入提示框、标题组件、图例组件 不引入不显示 不报错 
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import "echarts/lib/component/legend"
import { Table } from 'antd';
import Utils from "../../utils"
import "./index.css"

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.ChartInfo = this.props.ChartInfo;
        this.key = Utils.GetUUID();
    }

    componentDidMount() {
        let ele = document.getElementById(this.key);
        if (!ele) return;
        let myChart = echarts.init(ele);
        if (this.ChartInfo.chartype === "bar") {
            let options = this.getBar();

            myChart.setOption(options);
        } else if (this.ChartInfo.chartype === "pie") {
            let options = this.getPie();
            myChart.setOption(options);
        }
    }

    /**
     * Echart Pie
     * 
     * @returns Options:{}
     * @memberof Chart
     */
    getPie() {
        let option = {
            title: {
                text: this.ChartInfo.title,
                subtext: 'X*X*X*',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.ChartInfo.data.reduce((acc, item, index) => {
                    return acc.concat([item[this.ChartInfo.xaxis]])
                }, [])
            },
            series: [
                {
                    name: this.ChartInfo.yaxis,
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: this.ChartInfo.data.reduce((acc, item, index) => {
                        return acc.concat([{
                            value: parseFloat(item[this.ChartInfo.yaxis]),
                            name: item[this.ChartInfo.xaxis]
                        }])
                    }, []),

                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    }

    /**
     * Echart Bar
     * 
     * @returns Options:{}
     * @memberof Chart
     */
    getBar() {
        let options = {};
        options.title = {
            text: this.ChartInfo.title,
            x: 'center'
        };
        options.xAxis = {
            type: 'category',
            data: this.ChartInfo.data.reduce((acc, item, index) => {
                return acc.concat([item[this.ChartInfo.xaxis]])
            }, [])
        };
        options.yAxis = {
            type: "value"
        };
        options.series = [{
            data: this.ChartInfo.data.reduce((acc, item, index) => {
                return acc.concat([parseFloat(item[this.ChartInfo.yaxis])])
            }, []),
            type: this.ChartInfo.chartype
        }];
        options.tooltip = {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        };
        return options;
    }


    /**
     * 输出AntD表格 
     * 
     * @param {any} datasource 
     * @returns 
     * @memberof Chart
     */
    getTable(datasource) {
        const row0 = datasource[0];
        let columns = [];
        for (let col in row0) {
            columns.push(
                {
                    title: col,
                    dataIndex: col
                }
            )
        }
        datasource.map((row, index) => {
            row.key = index;
        })
        return (
            <Table columns={ columns } dataSource={ datasource } pagination={ { "pageSize": 5 } } size="middle" />
        )
    }

    render() {
        const isTable = this.ChartInfo.chartype === "table";
        return (
        isTable ? this.getTable(this.ChartInfo.data) : <div id={ this.key } style={ { width: 800, height: 500 } }></div>
        )
    }

}

export default Chart;