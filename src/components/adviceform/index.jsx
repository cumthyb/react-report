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

class Advice extends React.Component {
    constructor(props) {
        super(props);
        this.advice = this.props.Advice;
        this.state = {
            visible: this.props.Visible
        }
    }

    handleOk() {
       console.log(this.advice)
        console.log(this.advicetext)
    }

    handleCancel() {
        console.log(this)
        this.setState({visible: false})
    }


    handleChange1(value){
        this.advice.before=value
    }
    handleChange2(value){
        this.advice.current=value
    }
    onRadioChange(vaule){
        this.advice.type=vaule-1;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            visible: nextProps.Visible
        })
    }



    render() {
        const {getFieldDecorator} = this.props.form;
        const title = this.props.Edit
            ? "添加建议"
            : "修改建议"
        return (
            <Modal
                title={title}
                okText="确认"
                cancelText="取消"
                visible={this.state.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}>

                <Form className="edit-form" onSubmit={this.handleSubmit}>

                    <FormItem {...formItemLayout} label="前地类">
                        <Select
                            mode="multiple"
                            defaultValue={this.advice.before}
                            className="selection"
                            onChange={this.handleChange1.bind(this)}>
                            {this
                                .advice
                                .dls
                                .map((dl, index) => {
                                    return <Option key={index} value={dl}>{dl}</Option>
                                })}

                        </Select>
                    </FormItem>
                    <FormItem {...formItemLayout} label="后地类">
                        <Select
                            defaultValue={this.advice.current}
                            className="selection"
                            onChange={this.handleChange2.bind(this)}>
                            {this
                                .advice
                                .dls
                                .map((dl, index) => {
                                    return <Option key={index} value={dl}>{dl}</Option>
                                })}
                        </Select>
                    </FormItem>
                    <FormItem {...formItemLayout} label="建议类型">
                        <RadioGroup onChange={this.onRadioChange.bind(this)} defaultValue={this.advice.type + 1}>
                            <Radio value={1}>直接确认</Radio>
                            <Radio value={2}>外业调查</Radio>
                            <Radio value={3}>内业重判</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="建议">
                        <TextArea className="textarea" rows={5} value={this.advice.text} ref={node => this.advicetext = node}/>
                    </FormItem>
                </Form>

            </Modal>
        )
    }

}

export default Form.create()(Advice);