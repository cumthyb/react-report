using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Report
{
    public partial class Form1 : Form
    {
        public Page _page;
        public Form1()
        {
            InitializeComponent();
            _page = new Page();
        }

        public DataTable GetData()
        {
            List<string> cities = new List<string>() { "北京", "河北", "江苏", "四川", "黑龙江", "湖南", "福建" };
            List<string> names = new List<string>() { "花生", "瓜子", "啤酒", "八宝粥", "可乐", "鸡翅", "矿泉水" };
            DataTable table = new DataTable();
            DataColumn dc1 = new DataColumn("品名");
            DataColumn dc2 = new DataColumn("产地");
            DataColumn dc3 = new DataColumn("价格");
            table.Columns.Add(dc1);
            table.Columns.Add(dc2);
            table.Columns.Add(dc3);
            Random rd = new Random();
            for (int Index = 0; Index < 7; Index++)
            {
                DataRow dr = table.NewRow();
                dr[0] = names[Index];
                dr[1] = cities[Index];
                dr[2] = rd.Next(10, 1000);
                table.Rows.Add(dr);
            }

            return table;
        }

        /// <summary>
        /// 构造页面结构
        /// </summary>
        public void StructPage()
        {
            _page.blocks.Clear();
            #region 标题
            //标题
            Block block = new Block()
            {
                guid = Guid.NewGuid().ToString(),
                desc = "标题",
                level = 0,
                title = new Title()
                {
                    main = "智能决策分析报告 -",
                    sub = "永久基本农田专题",
                    align = "center"
                }
            };
            _page.blocks.Add(block);
            #endregion

            #region 需求管理
            block = new Block()
            {
                guid = Guid.NewGuid().ToString(),
                desc = "管理需求",
                level = 1,
                title = new Title()
                {
                    main = "管理需求 -",
                    align = "left",
                    ico = new Ico()
                    {
                        name = "management"
                    }
                },

                content = new Content()
                {
                    categories = new List<Category>()
                    {
                        new Category(){
                            text="管理需求",
                            paragraphs=new Paragraph()
                            {
                                texts=new List<string>()
                                {
                                    "永久基本农田即对基本农田实行永久性保护，无论什么情况下都不能改变其用途，不得以任何方式挪作它用的基本农田，",
                                    "严控城市化进程加快对耕地尤其是对城市周边地区优质 耕地的挤占。"
                                }
                            }
                        },
                           new Category(){
                            text="调查需求",
                            paragraphs=new Paragraph()
                            {
                                texts=new List<string>()
                                {
                                    "在实时求是的原则下将基本农田范围内的地块调查认定为耕地。",
                                    "调查耕地保护。"
                                }
                            }
                        },
                    }

                }

            };
            _page.blocks.Add(block);
            #endregion

            #region 数据分析
            block = new Block()
            {
                guid = Guid.NewGuid().ToString(),
                desc = "数据分析",
                level = 1,
                title = new Title()
                {
                    main = "数据分析",
                    align = "left",
                    ico = new Ico()
                    {
                        name = "analysis"
                    }
                },

                content = new Content()
                {
                    categories = new List<Category>()
                    {
                        new Category(){
                            text="永久基本农田范围内2017年度现状分析",
                            button=new Btn(){text="地图浏览" },
                            paragraphs=new Paragraph()
                            {
                                texts=new List<string>()
                                {
                                    "经分析，永久基本农田范围内，上年度耕地面积65570.44亩，占永久基本农田总量的97.86%。以下为永久基本农田范围内2017年度地类详细情况："
                                }
                            },
                            charts=new Charts()
                            {
                                charts=new List<Chart>(){
                                    new Chart()
                                    {
                                        chartype="table",
                                        location="top",
                                        title="表1",
                                        layout="inline-block",
                                        data=GetData()
                                    },
                                    new Chart()
                                    {
                                        chartype="bar",
                                        title="图1",
                                        layout="inline-block",
                                        data=GetData(),
                                        xAxis="品名",
                                        yAxis="价格"
                                    },
                                    new Chart()
                                    {
                                        chartype="pie",
                                        title="图1",
                                        layout="inline-block",
                                        data=GetData(),
                                        xAxis ="产地",
                                        yAxis="价格"
                                    },
                                }
                            }
                        }
                    }
                }
            };
            _page.blocks.Add(block);
            #endregion

            #region 决策建议
            block = new Block()
            {
                guid = Guid.NewGuid().ToString(),
                desc = "决策建议",
                level = 1,
                title = new Title()
                {
                    main = "决策建议",
                    align = "left",
                    ico = new Ico()
                    {
                        name = "advice"
                    },
                    button = new Btn()
                    {
                        text = "添加建议"
                    }
                },

                content = new Content()
                {
                    categories = new List<Category>()
                    {
                        new Category(){
                            conclusions=new Conclusion()
                            {
                                text="基于智能分析结果，结合国家政策及用地管理需求，给出决策建议如下：",
                                conclusionsItems=new List<ConsclusionItem>(){
                                    new ConsclusionItem()
                                    {
                                        advice=new Advice(){
                                            id=Guid.NewGuid().ToString(),
                                            before="耕地",
                                            current="园地",
                                            groupname="基本农田分析专题",
                                            type=0,
                                        text="前地类为耕地，后地类为园地的图斑，建议根据影像进行预判，如果是不典型的园地，建议根据影像情况预判为耕地；如果是典型的园地，建议先预判为耕地，但在耕地种植属性上标注园木属性。",
                                        },
                                        btns =new List<Btn>()
                                        {
                                            new Btn()
                                            {
                                                text="",
                                                classname="edit"
                                            },
                                            new Btn()
                                            {
                                                text="",
                                                classname="delete"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="view"
                                            }
                                        }
                                    },
                                     new ConsclusionItem()
                                    {
                                        advice=new Advice(){
                                            id=Guid.NewGuid().ToString(),
                                            before="耕地",
                                            current="林地",
                                            groupname="基本农田分析专题",
                                            type=1,


                                        text="前地类为耕地、园地，后地类为林地的图斑，建议根据影像进行预判，如果是不典型的林地，建议根据影像情况预判为耕地；如果是典型的林地，建议先预判为耕地，但在耕地种植属性上标注园木属性。"},
                                         btns =new List<Btn>()
                                        {
                                            new Btn()
                                            {
                                                text="",

                                                classname="edit"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="delete"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="view"
                                            }
                                        }
                                    },
                                      new ConsclusionItem()
                                    {
                                          advice=new Advice(){
                                            id=Guid.NewGuid().ToString(),
                                            before="耕地",
                                            current="草地",
                                            groupname="基本农田分析专题",
                                            type=2,
                                              text ="前地类为耕地、园地、林地、其他土地，后地类为草地的图斑，建议根据影像进行预判，如果是不典型的草地，建议根据影像情况预判为耕地；如果是典型的草地，建议外业核实。"},
                                          btns =new List<Btn>()
                                        {
                                            new Btn()
                                            {
                                                text="",

                                                classname="edit"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="delete"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="view"
                                            }
                                        }
                                    },
                                      new ConsclusionItem()
                                    {
                                          advice =new Advice(){
                                            id=Guid.NewGuid().ToString(),
                                            before="耕地",
                                            current="草地",
                                            groupname="基本农田分析专题",
                                            type=1,
                                               text ="前地类为耕地、园地、林地、其他土地，后地类为建设用地的图斑，建议以实地调查为准。"},
                                          btns =new List<Btn>()
                                        {
                                            new Btn()
                                            {
                                                text="",

                                                classname="edit"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="delete"
                                            },
                                            new Btn()
                                            {
                                                text="",

                                                classname="view"
                                            }
                                        }
                                    },
                                }

                            }

                        }
                    }

                }
            };
            _page.blocks.Add(block);
            #endregion

        }

        private void button1_Click(object sender, EventArgs e)
        {
            StructPage();
            string json = _page.SerializeJson();
        }
    }
}
