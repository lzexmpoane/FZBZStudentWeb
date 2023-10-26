var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	江理鹏	|	-	|	- | 初三4班	|\n\
|	2	|	余奕锋	|	25.45	|	2 | 初三6班	|\n\
|	3	|	王晖	|	-	|	- | 初三10班	|\n\
|	4	|	林琛奇	|	27.41	|	8 | 初三11班	|\n\
|	5	|	林后融	|	-	|	- | 初三1班	|\n\
|	6	|	刘科江	|	-	|	- | 初三7班	|\n\
|	7	|	黄熠	|	-	|	- | 初三8班	|\n\
|	8	|	雷博涛	|	27.27	|	7 | 初三9班	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	林宇轩	|	-	|	- | 初三12班	|\n\
|	2	|	邹铸星	|	25.09	|	1 | 初三4班	|\n\
|	3	|	庄浩轩	|	-	|	- | 初三6班	|\n\
|	4	|	林宸君	|	36.35	|	4 | 初三10班	|\n\
|	5	|	傅嘉俊	|	-	|	- | 初三3班	|\n\
|	6	|	林锦泓	|	26.92	|	6 | 初三1班	|\n\
|	7	|	林秀哲	|	26.37	|	5 | 初三7班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	陈凯	|	-	|	- | 初三8班	|\n\
|	2	|	林宇轩	|	-	|	- | 初三12班	|\n\
|	3	|	蒋仕铉	|	-	|	- | 初三11班	|\n\
|	4	|	乐涵	|	-	|	- | 初三2班	|\n\
|	5	|	郑志彬	|	-	|	- | 初三10班	|\n\
|	6	|	林锐成	|	-	|	- | 初三3班	|\n\
|	7	|	唐正	|	-	|	- | 初三1班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	王圣杰	|	-	|	- | 初三9班	|\n\
|	2	|	黄楚桐	|	-	|	- | 初三8班	|\n\
|	3	|	黄圣烨	|	-	|	- | 初三12班	|\n\
|	4	|	黄涵锘	|	-	|	- | 初三11班	|\n\
|	5	|	林礼贤	|	-	|	- | 初三2班	|\n\
|	6	|	刘浚铠	|	-	|	- | 初三7班	|\n\
|	7	|	叶文杰	|	25.69	|	3 | 初三3班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';