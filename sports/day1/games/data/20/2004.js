var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">初二年段</span>\n\
    <span class="txtb">女子组  100M  决赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 曾欣妍 | - | 初二1班 |\n\
| 2 | 卢麒朵 | - | 初二2班 |\n\
| 3 | 林秋瑾 | - | 初二7班 |\n\
| 4 | 郑佳欣 | - | 初二3班 |\n\
| 5 | 许明阅 | - | 初二10班 |\n\
| 6 | 翁楚乔 | - | 初二9班 |\n\
| 7 | 林雨昕 | - | 初二2班 |\n\
| 8 | 刘睿涵 | - | 初二8班 |\n\
\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';