function buttonClick(click_name, page_url){
    dataLayer.push({
         "event" : "testCustomEvent", // イベント名
         "click_name" : click_name,
         "page_url" : page_url
    });    
    console.log('test');
    alert('カスタムイベントが送信されました')
}