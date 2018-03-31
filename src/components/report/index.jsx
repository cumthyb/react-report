import React from 'react'
import Block from "../block/index"
import "./index.css"

class Report extends React.Component{

   getBlocks(){
    return this.props.Data.blocks;
   }

   render(){
       const blocks=this.getBlocks();
       return(
           <div id="report">
               {
                   blocks.map((block,index)=>{
                       return (<Block Data={block} key={index}></Block>)                      
                   })
               }
           </div>
       )
   }

}


export default Report;