using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Newtonsoft.Json;

namespace Report
{
    public class Block
    {
        public string guid = "";
        public string desc = "";
        public int level = -1;
        public Title title;
        public Content content;
    }


    public class Title
    {
        public string main = "";
        public string sub = "";
        public string align = "left";
        public Ico ico;
        public Btn button;
    }

    public class Ico
    {
        public string uri = "";
        public string name = "";
    }

    public class Btn
    {
        public string text = "按钮";
        public string classname = "";
        public string callback = "";
    }

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

    public class Category
    {
        public string text = "";
        public Btn button;
        public Paragraph paragraphs;
        public Charts charts;
        public Conclusion conclusions;
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

    public class Content
    {
        public List<Category> categories;
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
