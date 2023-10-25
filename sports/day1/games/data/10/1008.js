var m = document.querySelectorAll('code[markdown]');

var namelist = '\
<div id="_title">\n\
    <span class="txta">高一年段</span>\n\
    <span class="txtb">女子组  200M  预赛</span>\n\
    <a href="../menu.html"><button class="home">首页</button></a>\n\
</div>\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 黄梦雪 | - | 高一12班 |\n\
| 2 | 郑羽桐 | - | 高一7班 |\n\
| 3 | 潘璨铌 | - | 高一13班 |\n\
| 4 | 上官梦媛 | - | 高一14班 |\n\
| 5 | 俞悦 | - | 高一9班 |\n\
| 6 | 黄芊梦 | - | 高一2班 |\n\
| 7 | 吴旖珊 | - | 高一15班 |\n\
| 8 | - | - | - |\n\
\n\
&nbsp;\n\
\n\
| 赛道 | 姓名 | 数据 | 备注 |\n\
| - | - | - | - |\n\
| 1 | 程怡然 | - | 高一1班 |\n\
| 2 | 林修竹 | - | 高一4班 |\n\
| 3 | 杜筱北 | - | 高一7班 |\n\
| 4 | 王恺熙 | - | 高一2班 |\n\
| 5 | 谢佳馨 | - | 高一3班 |\n\
| 6 | 张可嘉 | - | 高一9班 |\n\
| 7 | 王子瑶 | - | 高一8班 |\n\
| 8 | - | - | - |\n\
';

m[0].innerHTML = namelist;
m[0].outerHTML = '<div>' + marked(m[0].innerHTML) + '</div>';