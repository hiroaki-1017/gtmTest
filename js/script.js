function buttonClick(page_url) {
  dataLayer.push({
    event: "stgCustomEvent", // 本番イベント
    click_name: page_url,
    event_category: page_url,
    elem_category: page_url,
    page_url: page_url,
    click_url: page_url,
    area_value: page_url,
    obsession_value: page_url,
    skill_value: page_url,
    position_value: page_url,
    free_word: page_url,
    article_title: page_url,
    current_number: page_url,
    page_title: page_url,
    before_station: page_url,
    after_station: page_url,
    before_worklocation: page_url,
    after_worklocation: page_url,
    before_operatingperiod: page_url,
    after_operatingperiod: page_url,
    before_monthlyremuneration: page_url,
    after_monthlyremuneration: page_url,
    auth_status: page_url,
  });
  console.log("test");
  alert("カスタムイベントが送信されました");
}
