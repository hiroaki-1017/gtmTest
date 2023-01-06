function buttonClick(){
    dataLayer.push({
         "event" : "testCustomEvent", // イベント名
         "click_name" : "テストクリック",
         "page_url" : "https://hoge.com"
    });    
    console.log('test');
    alert('カスタムイベントが送信されました')
}