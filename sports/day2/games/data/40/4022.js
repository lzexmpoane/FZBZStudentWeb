var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高二年段</span>\n\
    <span class="txtb">女子组  4X100M接力  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	高二7班	|	-	|	-	|\n\
|	2	|	高二4班	|	-	|	-	|\n\
|	3	|	高二2班	|	-	|	-	|\n\
|	4	|	高二16班	|	-	|	-	|\n\
|	5	|	高二3班	|	-	|	-	|\n\
|	6	|	高二8班	|	-	|	-	|\n\
|	7	|	高二15班	|	-	|	-	|\n\
|	8	|	高二11班	|	-	|	-	|\n\
\n\
&nbsp;\n\
\n\
|	赛道	|	班级	|	数据	|	备注	|\n\
|	-	|	-	|	-	|	-	|\n\
|	1	|	高二5班	|	-	|	-	|\n\
|	2	|	高二10班	|	-	|	-	|\n\
|	3	|	高二14班	|	-	|	-	|\n\
|	4	|	高二9班	|	-	|	-	|\n\
|	5	|	高二1班	|	-	|	-	|\n\
|	6	|	高二12班	|	-	|	-	|\n\
|	7	|	高二13班	|	-	|	-	|\n\
|	8	|	高二6班	|	-	|	-	|\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';