function doPost() {
    var CHANNEL_ACCESS_TOKEN = 'g93gFjGS2nxtZtwdGYwFg2Sd+i7eO7C1imlK96heyVGV76dLwRPXO1qseNi4R7poSpv3P1KnNsQle4MStyTrTgd8O2eGK+6yUnJkTELfeQPp1y9hj/MB+S03z99VpKL3IO8JUbuS2G7jRwJ8WqmKSgdB04t89/1O/w1cDnyilFU=';
    var url = 'https://api.line.me/v2/bot/message/push';
    UrlFetchApp.fetch(url, {
        'headers': {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
        },
        'method': 'post',
        'payload': JSON.stringify({
            'to':  'Ueda05a37850a28b09cf8692f2b0c203d',
            'messages': [{
              "type": "image",
              "originalContentUrl": "https://bookzone.cwgv.com.tw/public/upload/pic/2018-06-26-1529999666.jpg",
              "previewImageUrl": "https://bookzone.cwgv.com.tw/public/upload/pic/2018-06-26-1529999666.jpg"
            }]
        }),
    });  
}