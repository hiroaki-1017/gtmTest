function buttonClick(page_url){
    dataLayer.push({
         "event" : "stgCustomEvent", // イベント
         "page_url" : page_url,
         "obsession_value" : 'test'
    });    
    console.log('test');
    alert('カスタムイベントが送信されました')
}