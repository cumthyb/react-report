import React from 'react';
import Category from "../category/index"
import "./index.css";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.categories = this.props.categories;
    }

    render() {
        return (
            <div>
              { this.categories.map((category, index) => {
                    return (<Category key={ index } Data={category} ></Category>)
                }) }
            </div>
        )
    }

}


export default Content