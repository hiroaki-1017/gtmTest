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


window.onload = function(){
  console.log("aaaaa");
  let stay_time = 0;
  function stayTime() {
    stay_time += 5;
    console.log(stay_time);
  }
  setInterval(stayTime, 5000);

  window.addEventListener("beforeunload", () => {
    console.log(stay_time);
    dataLayer.push({
      event: "stayTime", // イベント名
      stay_time: stay_time,
    });
  });
}
