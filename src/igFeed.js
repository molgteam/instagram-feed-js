/*!
 * instagram-feed - JavaScript plugin for Get instagram Feeds and User Profile without using the instagram API
 *
 * Copyright (c) 2020 ESTAID, jwgo
 *
 * Licensed under the MIT license:
 *
 */

var igFeed = (function () {
  // 변수 및 경로 설정
  var worker = new XMLHttpRequest();
  var responseData;
  var option = {
    a: {
      opt1: "",
      opt2: "",
    },
    b: {
      opt1: "",
      opt2: "",
    },
  };

  var _go = function () {
    var data = "";
    function reqListener() {
      data = this.responseText;
      data = data.split("window._sharedData = ")[1].split(";</script>")[0];
      data = JSON.parse(data);
      console.log(
        "프로필 사진",
        data.entry_data.ProfilePage[0].graphql.user.profile_pic_url_hd
      );
      console.log(
        "풀네임",
        data.entry_data.ProfilePage[0].graphql.user.full_name
      );
      console.log(
        "피드 첫번째",
        data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media
          .edges[0].node.display_url
      );
    }
    var worker = new XMLHttpRequest();
    worker.addEventListener("load", reqListener);
    worker.open("GET", "https://instagram.com/dlwlrma");
    worker.send();
  };

  var _cacheData = function () {};

  var initModule = function () {
    _go();
  };
  return {
    init: initModule,
  };
})().init();
