var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初三年段</span>\n\
    <span class="txtb">男子组  实心球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|   排名 |  分数    |  	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	林志伟	|	-	|	- | - | 初三9班	|\n\
|	2	|	黄圣烨	|	12.15	|	5 | 2 | 初三12班	|\n\
|	3	|	林木淞	|	-	|	- | - | 初三5班	|\n\
|	4	|	刘宸华	|	-	|	- | - | 初三6班	|\n\
|	5	|	林子睿	|	12.50	|	4 | 3 | 初三3班	|\n\
|	6	|	陈宥廷	|	-	|	- | - | 初三7班	|\n\
|	7	|	肖淳昕	|	-	|	- | - | 初三7班	|\n\
|	8	|	邱浩刚	|	-	|	- | - | 初三10班	|\n\
|	9	|	李学睿	|	-	|	- | - | 初三11班	|\n\
|	10	|	刘林森	|	-	|	- | - | 初三2班	|\n\
|	11	|	陈卓	|	-	|	- | - | 初三12班	|\n\
|	12	|	危铠承	|	-	|	- | - | 初三2班	|\n\
|	13	|	陈思宇	|	-	|	- | - | 初三9班	|\n\
|	14	|	陈宇恒	|	-	|	- | - | 初三6班	|\n\
|	15	|	陈冕	|	-	|	- | - | 初三5班	|\n\
|	16	|	刘凯烨	|	12.13	|	6 | 1 | 初三1班	|\n\
|	17	|	林锦东	|	-	|	- | - | 初三4班	|\n\
|	18	|	张钱枨	|	-	|	- | - | 初三10班	|\n\
|	19	|	江理鹏	|	-	|	- | - | 初三4班	|\n\
|	20	|	刘昌烨	|	-	|	- | - | 初三7班	|\n\
|	21	|	余梓源	|	14.90	|	1 | 7 | 初三9班	|\n\
|	22	|	方宇辰	|	12.56	|	3 | 4 | 初三12班	|\n\
|	23	|	黄胜晨	|	-	|	- | - | 初三4班	|\n\
|	24	|	邱梓烨	|	-	|	- | - | 初三5班	|\n\
|	25	|	陈顺杰	|	12.85	|	2 | 5 | 初三8班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';