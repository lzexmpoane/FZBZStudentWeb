var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">女子组  50M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	陈菲雨	|	-	|	初一13班	|\n\
|	2	|	陈潘璐佳	|	-	|	初一3班	|\n\
|	3	|	钟颖	|	-	|	初一6班	|\n\
|	4	|	王雨欣	|	-	|	初一14班	|\n\
|	5	|	卢滢	|	-	|	初一7班	|\n\
|	6	|	郭耀婷	|	-	|	初一11班	|\n\
|	7	|	戴子诺	|	-	|	初一12班	|\n\
|	8	|	-	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	林乐瑶	|	-	|	初一12班	|\n\
|	2	|	陈思敏	|	-	|	初一13班	|\n\
|	3	|	陈沛灵	|	-	|	初一3班	|\n\
|	4	|	陈佳滢	|	-	|	初一6班	|\n\
|	5	|	池沐澄	|	-	|	初一4班	|\n\
|	6	|	吴佳颖	|	-	|	初一9班	|\n\
|	7	|	梁予涵	|	-	|	初一11班	|\n\
|	8	|	-	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	-	|	-	|	-	|\n\
|	2	|	林睿馨	|	-	|	初一2班	|\n\
|	3	|	李梓瑶	|	-	|	初一3班	|\n\
|	4	|	陈玥妤	|	-	|	初一6班	|\n\
|	5	|	刘涵婧	|	-	|	初一11班	|\n\
|	6	|	张宸嫣	|	-	|	初一7班	|\n\
|	7	|	叶夏冉	|	-	|	初一13班	|\n\
|	8	|	-	|	-	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';