var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	林忠袁	|	-	|	- | 高三9班	|\n\
|	2	|	刘希宇	|	-	|	- | 高三1班	|\n\
|	3	|	吴彦辰	|	-	|	- | 高三15班	|\n\
|	4	|	兰孝浚	|	26.11	|	4 | 高三5班	|\n\
|	5	|	李柯	|	-	|	- | 高三11班	|\n\
|	6	|	范博远	|	-	|	- | 高三3班	|\n\
|	7	|	吴宇涵	|	-	|	- | 高三10班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	肖晨烨	|	-	|	- | 高三4班	|\n\
|	2	|	吴浩田	|	25.65	|	3 | 高三9班	|\n\
|	3	|	周梓昊	|	-	|	- | 高三7班	|\n\
|	4	|	黄泽凯	|	27.13	|	6 | 高三2班	|\n\
|	5	|	陈郁	|	-	|	- | 高三5班	|\n\
|	6	|	高书浩	|	-	|	- | 高三11班	|\n\
|	7	|	翁嘉辉	|	-	|	- | 高三12班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	冯耀元	|	-	|	- | 高三1班	|\n\
|	2	|	胡裕权	|	-	|	- | 高三4班	|\n\
|	3	|	邹振喆	|	-	|	- | 高三14班	|\n\
|	4	|	王铃淏	|	-	|	- | 高三13班	|\n\
|	5	|	黄瀚茗	|	24.77	|	1 | 高三2班	|\n\
|	6	|	蔡建煊	|	-	|	- | 高三6班	|\n\
|	7	|	王俊涛	|	25.00	|	2 | 高三5班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	蔡子轩	|	-	|	- | 高三1班	|\n\
|	3	|	肖砚泽	|	-	|	- | 高三3班	|\n\
|	4	|	陈志翔	|	-	|	- | 高三14班	|\n\
|	5	|	林新民	|	26.53	|	5 | 高三9班	|\n\
|	6	|	范书颜	|	27.14	|	7 | 高三10班	|\n\
|	7	|	甘岱涛	|	27.45	|	8 | 高三6班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';