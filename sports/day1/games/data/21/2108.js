var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">女子组  实心球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	林晞	|	-	|	初三11班	|\n\
|	2	|	黄圣鑫	|	-	|	初三7班	|\n\
|	3	|	叶若希	|	-	|	初三12班	|\n\
|	4	|	王馨媛	|	-	|	初三5班	|\n\
|	5	|	薛雯月	|	-	|	初三9班	|\n\
|	6	|	王紫菡	|	-	|	初三12班	|\n\
|	7	|	高琳菲	|	-	|	初三1班	|\n\
|	8	|	郑昕栎	|	-	|	初三1班	|\n\
|	9	|	江昕诺	|	-	|	初三5班	|\n\
|	10	|	林畅	|	-	|	初三2班	|\n\
|	11	|	任若析	|	-	|	初三5班	|\n\
|	12	|	许茗静	|	-	|	初三4班	|\n\
|	13	|	胡艺龄	|	-	|	初三8班	|\n\
|	14	|	刘文君	|	-	|	初三3班	|\n\
|	15	|	谢叶燊	|	-	|	初三7班	|\n\
|	16	|	陈思婷	|	-	|	初三4班	|\n\
|	17	|	江宥彤	|	-	|	初三8班	|\n\
|	18	|	胡钰灵	|	-	|	初三1班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';