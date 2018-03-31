/*
 * @Author: cumthyb 
 * @Date: 2018-03-27 23:52:06 
 * @Last Modified by: cumthyb
 * @Last Modified time: 2018-03-27 23:53:29
 * 
 * 工具类
 */

import UUID from "uuid/v4"


var Utils = {

    trimEnd: (str, char) => {
        if (!char)
            return str.trim();
        else {
            if (str.endsWith(char)) {
                var a = [...str].reverse();
                a.shift() //;
                a.reverse();
                let str2 = a.reduce((acc, item, index) => {
                    return acc + item;
                }, "")
                return str2;
            }
            else return str;
        }
    },

    
    GetUUID:()=>UUID(),

}
export default Utils;