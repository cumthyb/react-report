/*
 * @Author: hyb 
 * @Date: 2018-03-28 11:02:18 
 * @Last Modified by: hyb
 * @Last Modified time: 2018-03-28 11:02:56
 * 
 * 导出页面为PDF文件 默认文件名Report.pdf
 */


define(['jsPdf', 'html2canvas'], function(jsPdf, html2canvas) {

    /**
     * 
     */
    var module = {};

    /**
     * 刷新
     */
    var init = function(options) {
        var ele = document.getElementById("export-pdf");
        ele.addEventListener("click", function() {
            /*
            document.querySelectorAll("button").forEach((ele, index) => {
                ele.style.display = "none";
            })*/

            [].forEach.call(document.querySelectorAll("button"), function(ele) {
                ele.style.display = "none";
            })


            document.getElementById("root").style.width = "1310px";
            document.getElementById("root").style.margin = "0 auto";

            /*
            $("#root").css({
                "width": "1310px",
                "margin": "0 auto"
            });*/

            setTimeout(() => {
                html2canvas(document.querySelector("#root")).then(function(canvas) {
                    var contentWidth = canvas.width;
                    var contentHeight = canvas.height;
                    //一页pdf显示html页面生成的canvas高度;
                    var pageHeight = contentWidth / 595.28 * 841.89;
                    //未生成pdf的html页面高度
                    var leftHeight = contentHeight;
                    //pdf页面偏移
                    var position = 0;
                    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    var imgWidth = 555.28;
                    var imgHeight = 555.28 / contentWidth * contentHeight;
                    // var pageData = cacheExternalImage(canvas);
                    var pageData = canvas.toDataURL('image/jpeg', 1.0);
                    var pdf = new jsPdf('', 'pt', 'a4');
                    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                    //当内容未超过pdf一页显示的范围，无需分页
                    if (leftHeight < pageHeight) {
                        pdf.addImage(pageData, 'JPEG', 20, 100, imgWidth, imgHeight);
                    } else {
                        while (leftHeight > 0) {
                            pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            //避免添加空白页
                            if (leftHeight > 0) {
                                pdf.addPage();
                            }
                        }
                    }
                    pdf.save('Report.pdf');
                }).then(() => {
                    /*
                    $("#root").css("width", "100%");
                    $("button").css("display", "inline-block");
                    */

                    /*
                    document.querySelectorAll("button").forEach((ele, index) => {
                        ele.style.display = "inline-block";
                    })*/
                    [].forEach.call(document.querySelectorAll("button"), function(ele) {
                        ele.style.display = "inline-block";
                    })

                    document.getElementById("root").style.width = "100%";

                }).catch(function(err) {
                    console.log(err)
                })
            }, 1000);


        });

    /*
    $('#export-pdf').click(function() {
        // $("button").css("display", "none");

    });*/
    }

    /**
     * 
     */

    module.init = init;

    return module;

});