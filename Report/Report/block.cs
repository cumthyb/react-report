using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Newtonsoft.Json;

namespace Report
{
    /// <summary>
    /// Block 文章组织的最大单位 由标题和内容组成
    /// </summary>
    public class Block
    {
        /// <summary>
        /// id
        /// </summary>
        public string guid = "";
        /// <summary>
        /// 块级描述
        /// </summary>
        public string desc = "";
        /// <summary>
        /// Block级别
        /// </summary>
        public int level = -1;
        /// <summary>
        /// Block的标题
        /// </summary>
        public Title title;
        /// <summary>
        /// Block的内容
        /// </summary>
        public Content content;
    }


    public class Title
    {
        /// <summary>
        /// 主标题
        /// </summary>
        public string main = "";
        /// <summary>
        /// 副标题
        /// </summary>
        public string sub = "";
        /// <summary>
        /// 对其方式
        /// </summary>
        public string align = "left";
        /// <summary>
        /// 标题的图标
        /// </summary>
        public Ico ico;
        /// <summary>
        /// 标题的按钮
        /// </summary>
        public Btn button;
    }

    /// <summary>
    /// 图标
    /// </summary>
    public class Ico
    {
        /// <summary>
        /// 图标资源地址
        /// </summary>
        public string uri = "";
        /// <summary>
        /// 图标的名称 对应CSS中的class
        /// </summary>
        public string name = "";
    }

    /// <summary>
    /// 按钮
    /// </summary>
    public class Btn
    {
        /// <summary>
        /// 按钮上显示的文本
        /// </summary>
        public string text = "按钮";
        /// <summary>
        /// 按钮的classname 用于设置样式
        /// </summary>
        public string classname = "";
        /// <summary>
        /// 按钮的回掉函数 functionname_parm1_parm2
        /// </summary>
        public string callback = "";
    }

    /// <summary>
    /// Block中的内容 由多个Category组成
    /// </summary>
    public class Content
    {
        public List<Category> categories;
    }

    /// <summary>
    /// Content的组成单位
    /// 相当于二级Block
    /// </summary>
    public class Category
    {
        /// <summary>
        /// 二级Block的标题
        /// </summary>
        public string text = "";
        /// <summary>
        /// 二级Block的标题的按钮
        /// </summary>
        public Btn button;
        /// <summary>
        /// 段落 
        /// </summary>
        public Paragraph paragraphs;
        /// <summary>
        /// 图表
        /// </summary>
        public Charts charts;
        /// <summary>
        /// 
        /// </summary>
        public Conclusion conclusions;
    }

    /// <summary>
    /// Category中的段落
    /// </summary>
    public class Paragraph
    {
        public List<string> texts = new List<string>();
        public string align = "left";
    }

    public class ConsclusionItem
    {
        public Advice advice;
        public List<Btn> btns = new List<Btn>();
    }

    public class Advice
    {
        public string id;
        public string groupname;
        public string before;
        public string current;
        public int type;
        public string text;
        public List<string> dls = new List<string>() { "耕地", "园地", "林地", "草地", "城镇村及工矿用地", "交通运输用地", "水域及水利设施用地", "其他土地", "专项用地" };
    }


    public class Conclusion
    {
        public string text = "";
        public List<ConsclusionItem> conclusionsItems = new List<ConsclusionItem>();
    }


    public class Charts
    {
        public List<Chart> charts=new List<Chart>();
    }
    public class Chart
    {
        /// <summary>
        /// Chart类型 bar pie table
        /// </summary>
        public string chartype = "";
        /// <summary>
        /// 题注
        /// </summary>
        public string title;
        /// <summary>
        /// 题注位置
        /// </summary>
        public string location = "bottom";
        /// <summary>
        /// 布局方式 block inline-block
        /// </summary>
        public string layout = "block";
        public string xAxis = "";
        public string yAxis = "";
        /// <summary>
        /// 数据
        /// </summary>
        public DataTable data;

    }

    public class Page
    {
        public List<Block> blocks=new List<Block>();
        public string SerializeJson()
        {
            try
            {
                string stream = JsonConvert.SerializeObject(this);
                return stream.ToLower();
            }
            catch (Exception ex)
            {
                return string.Empty;
            }
        }
    }

}
