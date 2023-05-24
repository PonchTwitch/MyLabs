function showDate() {
    let outru = document.getElementById('current-dateru');
    let outen = document.getElementById('current-dateen');
    let outar = document.getElementById('current-datear');
    let outel = document.getElementById('current-dateel');
    let outno = document.getElementById('current-dateno');
    let outzh = document.getElementById('current-datezh');
    let today = new Date();
    outru.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    outen.innerHTML = 'Дата и время для локали ЮАР: ' + today.toLocaleString('en-ZA');
    outar.innerHTML = 'Дата и время для локали Арабсих стран: ' + today.toLocaleString('ar-AA');
    outel.innerHTML = 'Дата и время для греческой локали: ' + today.toLocaleString('el-GR');
    outno.innerHTML = 'Дата и время для норвежской локали: ' + today.toLocaleString('no-NO');
    outzh.innerHTML = 'Дата и время для китайской локали: ' + today.toLocaleString('zh-CN');
}