// function buttonClick(page_url) {
//   dataLayer.push({
//     event: "myCustomEvent", // イベント名
//     click_name: page_url,
//     event_category: page_url,
//     page_url: page_url,
//     click_url: page_url,
//     range_value: page_url,
//     current_number: page_url,
//     detail_number: page_url,
//     detail_category: page_url,
//     page_title: "aaaaaa",
//   });
//   console.log("test");
//   alert("カスタムイベントが送信されました");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("aaaaa");
//   var stay_time = 0;

//   function stayTime() {
//     stay_time += 5;
//     console.log(stay_time);
//   }
//   setInterval(stayTime, 5000);

//   window.addEventListener("beforeunload", function () {
//     console.log(stay_time);
//     dataLayer.push({
//       event: "stayTime", // イベント名
//       stay_time: stay_time,
//       page_url: location.href,
//     });
//     stay_time = 0;
//   });
// });

window.onload = function () {
  console.log("aaaaa");
  var stay_time = 0;
  function stayTime() {
    stay_time += 5;
    console.log(stay_time);
  }
  setInterval(stayTime, 5000);

  window.addEventListener("beforeunload", function () {
    console.log(stay_time);
    dataLayer.push({
      event: "stayTime", // イベント名
      stay_time: stay_time,
      page_url: location.href,
    });
    stay_time = 0;
  });
};

// var stay_time = 0;
//   var current_url = location.href; 
 
//   console.log(current_url);
//   function stayTime() {
//     stay_time += 5;
//     console.log(stay_time);
//   }
//   setInterval(stayTime, 5000);
  
//   window.addEventListener("beforeunload", function () {
//     console.log(stay_time);
//     dataLayer.push({
//       event: "stayTime", // イベント名
//       stay_time: stay_time,
//       page_url: location.href,
//     });
//     stay_time = 0;
//   });

// var observer = new MutationObserver(function(){
//   /** DOMの変化が起こった時の処理 */
//   console.log('DOMが変化しました');
// });

// /** 監視対象の要素オブジェクト */
// const elem = document.getElementById('#__next');

// /** 監視時のオプション */
// const config = { 
//   attributes: true, 
//   childList: true, 
//   characterData: true,
//   subtree: true
// };

// /** 要素の変化監視をスタート */
// observer.observe(elem, config);
