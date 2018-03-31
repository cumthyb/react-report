const data =`{"blocks":[{"guid":"12ae7a4b-a401-4dad-8397-115db0c7f874","desc":"标题","level":0,"title":{"main":"智能决策分析报告 -","sub":"永久基本农田专题","align":"center","ico":null,"button":null},"content":null},{"guid":"0f9cb258-4c66-4d3c-bc61-d2872cd8851e","desc":"管理需求","level":1,"title":{"main":"管理需求 -","sub":"","align":"left","ico":{"uri":"","name":"management"},"button":null},"content":{"categories":[{"text":"管理需求","button":null,"paragraphs":{"texts":["永久基本农田即对基本农田实行永久性保护，无论什么情况下都不能改变其用途，不得以任何方式挪作它用的基本农田，","严控城市化进程加快对耕地尤其是对城市周边地区优质 耕地的挤占。"],"align":"left"},"charts":null,"conclusions":null},{"text":"调查需求","button":null,"paragraphs":{"texts":["在实时求是的原则下将基本农田范围内的地块调查认定为耕地。","调查耕地保护。"],"align":"left"},"charts":null,"conclusions":null}]}},{"guid":"9b718637-06f7-4b68-8a69-a4a2904e4404","desc":"数据分析","level":1,"title":{"main":"数据分析","sub":"","align":"left","ico":{"uri":"","name":"analysis"},"button":null},"content":{"categories":[{"text":"永久基本农田范围内2017年度现状分析","button":{"text":"地图浏览","classname":"","callback":""},"paragraphs":{"texts":["经分析，永久基本农田范围内，上年度耕地面积65570.44亩，占永久基本农田总量的97.86%。以下为永久基本农田范围内2017年度地类详细情况："],"align":"left"},"charts":{"charts":[{"chartype":"table","title":"表1","location":"top","layout":"inline-block","xaxis":"","yaxis":"","data":[{"品名":"花生","产地":"北京","价格":"644"},{"品名":"瓜子","产地":"河北","价格":"543"},{"品名":"啤酒","产地":"江苏","价格":"631"},{"品名":"八宝粥","产地":"四川","价格":"927"},{"品名":"可乐","产地":"黑龙江","价格":"683"},{"品名":"鸡翅","产地":"湖南","价格":"60"},{"品名":"矿泉水","产地":"福建","价格":"198"}]},{"chartype":"bar","title":"图1","location":"bottom","layout":"inline-block","xaxis":"品名","yaxis":"价格","data":[{"品名":"花生","产地":"北京","价格":"644"},{"品名":"瓜子","产地":"河北","价格":"543"},{"品名":"啤酒","产地":"江苏","价格":"631"},{"品名":"八宝粥","产地":"四川","价格":"927"},{"品名":"可乐","产地":"黑龙江","价格":"683"},{"品名":"鸡翅","产地":"湖南","价格":"60"},{"品名":"矿泉水","产地":"福建","价格":"198"}]},{"chartype":"pie","title":"图1","location":"bottom","layout":"inline-block","xaxis":"产地","yaxis":"价格","data":[{"品名":"花生","产地":"北京","价格":"644"},{"品名":"瓜子","产地":"河北","价格":"543"},{"品名":"啤酒","产地":"江苏","价格":"631"},{"品名":"八宝粥","产地":"四川","价格":"927"},{"品名":"可乐","产地":"黑龙江","价格":"683"},{"品名":"鸡翅","产地":"湖南","价格":"60"},{"品名":"矿泉水","产地":"福建","价格":"198"}]}]},"conclusions":null}]}},{"guid":"56d38a3a-c152-426c-997a-6152f9306d16","desc":"决策建议","level":1,"title":{"main":"决策建议","sub":"","align":"left","ico":{"uri":"","name":"advice"},"button":{"text":"添加建议","classname":"","callback":""}},"content":{"categories":[{"text":"","button":null,"paragraphs":null,"charts":null,"conclusions":{"text":"基于智能分析结果，结合国家政策及用地管理需求，给出决策建议如下：","conclusionsitems":[{"advice":{"id":"98d617af-d38a-492b-ac05-a695a6a96f7c","groupname":"基本农田分析专题","before":"耕地","current":"园地","type":0,"text":"前地类为耕地，后地类为园地的图斑，建议根据影像进行预判，如果是不典型的园地，建议根据影像情况预判为耕地；如果是典型的园地，建议先预判为耕地，但在耕地种植属性上标注园木属性。","dls":["耕地","园地","林地","草地","城镇村及工矿用地","交通运输用地","水域及水利设施用地","其他土地","专项用地"]},"btns":[{"text":"","classname":"edit","callback":""},{"text":"","classname":"delete","callback":""},{"text":"","classname":"view","callback":""}]},{"advice":{"id":"7eca9df9-fb00-47f0-ba00-ad8629800b6f","groupname":"基本农田分析专题","before":"耕地","current":"林地","type":1,"text":"前地类为耕地、园地，后地类为林地的图斑，建议根据影像进行预判，如果是不典型的林地，建议根据影像情况预判为耕地；如果是典型的林地，建议先预判为耕地，但在耕地种植属性上标注园木属性。","dls":["耕地","园地","林地","草地","城镇村及工矿用地","交通运输用地","水域及水利设施用地","其他土地","专项用地"]},"btns":[{"text":"","classname":"edit","callback":""},{"text":"","classname":"delete","callback":""},{"text":"","classname":"view","callback":""}]},{"advice":{"id":"5d787059-1013-4618-bae0-0d6a8b7118ff","groupname":"基本农田分析专题","before":"耕地","current":"草地","type":2,"text":"前地类为耕地、园地、林地、其他土地，后地类为草地的图斑，建议根据影像进行预判，如果是不典型的草地，建议根据影像情况预判为耕地；如果是典型的草地，建议外业核实。","dls":["耕地","园地","林地","草地","城镇村及工矿用地","交通运输用地","水域及水利设施用地","其他土地","专项用地"]},"btns":[{"text":"","classname":"edit","callback":""},{"text":"","classname":"delete","callback":""},{"text":"","classname":"view","callback":""}]},{"advice":{"id":"67704e04-1993-4914-9424-07a8fe6bdf06","groupname":"基本农田分析专题","before":"耕地","current":"草地","type":1,"text":"前地类为耕地、园地、林地、其他土地，后地类为建设用地的图斑，建议以实地调查为准。","dls":["耕地","园地","林地","草地","城镇村及工矿用地","交通运输用地","水域及水利设施用地","其他土地","专项用地"]},"btns":[{"text":"","classname":"edit","callback":""},{"text":"","classname":"delete","callback":""},{"text":"","classname":"view","callback":""}]}]}}]}}]}`;

var DataJson=JSON.parse(data);

export default DataJson;