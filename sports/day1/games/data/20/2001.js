var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初一年段</span>\n\
    <span class="txtb">男子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 排名 | 分数 | 班级 |\n\
| - | - | - | - | - | - |\n\
| 1 | 李韪龙 | - | - | - | 初一4班 |\n\
| 2 | 张恩涤 | 14.11 | 4 | 3 | 初一7班 |\n\
| 3 | 彭欣乐 | 14.01 | 3 | 4 | 初一12班 |\n\
| 4 | 张珂源 | 13.65 | 2 | 5 | 初一12班 |\n\
| 5 | 郑谢伟 | 13.47 | 1 | 7 | 初一5班 |\n\
| 6 | 洪浩添 | 14.37 | 5 | 2 | 初一10班 |\n\
| 7 | 卓思承 | - | - | - | 初一11班 |\n\
| 8 | 郭雨洋 | 14.88 | 6 | 1 | 初一1班 |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';