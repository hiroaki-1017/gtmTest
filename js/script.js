function buttonClick(page_url) {
  dataLayer.push({
    event: "myCustomEvent", // イベント名
    click_name: page_url,
    event_category: page_url,
    page_url: page_url,
    click_url: page_url,
    range_value: page_url,
    current_number: page_url,
    detail_number: page_url,
    detail_category: page_url,
    page_title: "aaaaaa",
  });
  console.log("test");
  alert("カスタムイベントが送信されました");
}
