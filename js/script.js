function buttonClick(page_url){
    dataLayer.push({
         "event" : "stgCustomEvent", // イベント
         "page_url" : page_url
    });    
    console.log('test');
    alert('カスタムイベントが送信されました')
}