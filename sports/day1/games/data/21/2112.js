var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  三级跳远  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	#	|	姓名	|	数据	|	班级	|\n\
|	-	|	-	|	- | - | -	|	-	|\n\
|	1	|	朱彦亦	|	7.60	|	1 | 7 | 高一7班	|\n\
|	2	|	林亭廷	|	7.17	|	2 | 5 | 高一2班	|\n\
|	3	|	潘思颖	|	6.48	|	3 | 4 | 高一13班	|\n\
|	4	|	郑恬静	|	-	|	- | - | 高一14班	|\n\
|	5	|	陈怡宁	|	5.91	|	4 | 3 | 高一15班	|\n\
|	6	|	周墨	|	-	|	- | - | 高一14班	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';