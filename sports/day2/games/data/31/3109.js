var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  实心球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	吴泓睿	|	-	|	初一1班	|\n\
|	2	|	林辰浩	|	-	|	初一14班	|\n\
|	3	|	林弘韬	|	-	|	初一1班	|\n\
|	4	|	陈泓炜	|	-	|	初一8班	|\n\
|	5	|	汪乐钦	|	-	|	初一13班	|\n\
|	6	|	郑上斌	|	-	|	初一7班	|\n\
|	7	|	吴皓轩	|	-	|	初一2班	|\n\
|	8	|	陈至一	|	-	|	初一13班	|\n\
|	9	|	林熠辉	|	-	|	初一10班	|\n\
|	10	|	郑名伦	|	-	|	初一11班	|\n\
|	11	|	苏琰之	|	-	|	初一14班	|\n\
|	12	|	张舒皓	|	-	|	初一5班	|\n\
|	13	|	陈子诚	|	-	|	初一9班	|\n\
|	14	|	缪恒杰	|	-	|	初一2班	|\n\
|	15	|	黄宇浩	|	-	|	初一3班	|\n\
|	16	|	林炯哲	|	-	|	初一12班	|\n\
|	17	|	蔡宗轩	|	-	|	初一12班	|\n\
|	18	|	刘思其	|	-	|	初一8班	|\n\
|	19	|	林浩曦	|	-	|	初一14班	|\n\
|	20	|	林则议	|	-	|	初一12班	|\n\
|	21	|	林铂炎	|	-	|	初一5班	|\n\
|	22	|	李冠睿	|	-	|	初一9班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';