var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高三年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	金婉欣	|	-	|	- | 高三12班	|\n\
|	3	|	陈可歆	|	33.24	|	2 | 高三2班	|\n\
|	4	|	俞欣柠	|	35.30	|	6 | 高三6班	|\n\
|	5	|	林子旻	|	-	|	- | 高三11班	|\n\
|	6	|	张瑾璘	|	33.43	|	3 | 高三12班	|\n\
|	7	|	郑宇晴	|	36.36	|	7 | 高三3班	|\n\
|	8	|	-	|	- | -	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	姓名	|	数据	| 排名 |	班级	|\n\
|	-	|	-	|	- | -	|	-	|\n\
|	1	|	-	|	- | -	|	-	|\n\
|	2	|	石可欣	|	33.44	|	4 | 高三12班	|\n\
|	3	|	曹羽涵	|	31.40	|	1 | 高三9班	|\n\
|	4	|	翁可欣	|	36.61	|	8 | 高三2班	|\n\
|	5	|	郑迪文	|	-	|	- | 高三15班	|\n\
|	6	|	黄子晗	|	35.05	|	5 | 高三5班	|\n\
|	7	|	-	|	- | -	|	-	|\n\
|	8	|	-	|	- | -	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';