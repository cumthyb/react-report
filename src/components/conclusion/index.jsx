import React from 'react';
import {
    Button,
    Modal,
    Form,
    Select,
    Radio,
    Input,
    AutoComplete
} from "antd";
import Advice from "../adviceform/index"
import "./index.css"
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;
const {TextArea} = Input;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 6
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 18
        }
    }
};

class Conclusion extends React.Component {
    constructor(props) {
        super(props);
        this.advice = this.props.Item.advice;
        this.btns = this.props.Item.btns; //解构赋值怎么用？
        this.dls = this.props.Item.dls;
        this.state = {
            editVisible: false,
            delVisible: false,
            viewVisible: false,
            value: 1
        }
    }

    /**
     * 输出编辑窗体
     *
     * @returns
     * @memberof Conclusion
     */
    getEditMoal() {
        return (
            <Advice Visible={this.state.editVisible} Advice={this.advice}></Advice>
        )
    }

    getDelMoal() {
        return (
            <Modal
                title="删除建议"
                visible={this.state.delVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                <p>是否删除此条建议?</p>
            </Modal>
        );
    }

    onRadioChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
    }

    handEditBtnClick = () => {
        this.setState({editVisible: true})
    }

    handDelBtnClick = () => {
        this.setState({delVisible: true})
    }

    handleCancel = () => {
        this.setState({editVisible: false, delVisible: false})
    }

    render() {
        let icomap = {
            "edit": "code-o",
            "delete": "close",
            "view": "search"
        }
        return (
            <div className="advice-item">
                <span className="advice-item-text">{this.advice.text}</span>
                <span className="advice-item-btns-container">
                    <Button
                        shape="circle"
                        data={1}
                        onClick={this.handEditBtnClick}
                        icon={icomap["edit"]}
                        className="advice-item-btn"/> {this.getEditMoal()}
                    <Button
                        shape="circle"
                        data={5}
                        onClick={this.handDelBtnClick}
                        icon={icomap["delete"]}
                        className="advice-item-btn"/> {this.getDelMoal()}
                    <Button
                        shape="circle"
                        data={3}
                        onClick={this.handViewBtnClick}
                        icon={icomap["view"]}
                        className="advice-item-btn"/>

                </span>
            </div>
        )
    }
}

export default Form.create()(Conclusion);