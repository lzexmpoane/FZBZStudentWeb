var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">男子组  铅球  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	| 排名 | 分数 |	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	林宇鹏	|	-	|	- | - | 高三6班	|\n\
|	2	|	何昱辰	|	8.79	|	5 | 2 | 高三9班	|\n\
|	3	|	林西就	|	-	|	- | - | 高三1班	|\n\
|	4	|	白君逸	|	-	|	- | - | 高三1班	|\n\
|	5	|	王宏	|	8.74	|	6 | 1 | 高三11班	|\n\
|	6	|	陈佳乐	|	-	|	- | - | 高三11班	|\n\
|	7	|	柳宇杰	|	-	|	- | - | 高三14班	|\n\
|	8	|	陈溪岭	|	-	|	- | - | 高三9班	|\n\
|	9	|	付和乐	|	-	|	- | - | 高三14班	|\n\
|	10	|	林鹏	|	-	|	- | - | 高三1班	|\n\
|	11	|	吴思远	|	-	|	- | - | 高三9班	|\n\
|	12	|	汪晰	|	9.93	|	2 | 5 | 高三6班	|\n\
|	13	|	王瀚之	|	-	|	- | - | 高三15班	|\n\
|	14	|	王中豪	|	-	|	- | - | 高三2班	|\n\
|	15	|	王弘亮	|	10.29	|	1 | 7 | 高三5班	|\n\
|	16	|	郑宏涛	|	-	|	- | - | 高三4班	|\n\
|	17	|	罗光皓	|	-	|	- | - | 高三4班	|\n\
|	18	|	高铭	|	8.79	|	4 | 3 | 高三10班	|\n\
|	19	|	胡奇睿	|	-	|	- | - | 高三3班	|\n\
|	20	|	吕宇豪	|	-	|	- | - | 高三10班	|\n\
|	21	|	张浩喆	|	-	|	- | - | 高三2班	|\n\
|	22	|	林福祥	|	9.16	|	3 | 4 | 高三13班	|\n\
|	23	|	杨博渊	|	-	|	- | - | 高三6班	|\n\
|	24	|	夏佳乐	|	-	|	- | - | 高三4班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';