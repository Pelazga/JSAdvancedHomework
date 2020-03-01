    // Напишите регулярные выражения, которые будут выбирать 
    // индекс - 55535 - 5 numbers
    // ip адресс, пример 255.255.255.255
    // цены в долларах - $0.84, $2.84, $4
    // дата в виде - 30/12/2016 - день, месяц, год

var patternIndex = /\d{5}/;
var patternIp = /\d{3}\.\d{3}\.\d{3}\.\d{3}/;
var patternPrice = /\$\d*\.\d{2}|\$\d*/;
var patternDate = /\d{2}\/\d{2}\/\d{4}/;
