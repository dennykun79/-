function response(room, msg, sender, isGroupChat, replier, imageDB) {
  if (msg == "나카노?"){
    replier.reply ("안녕하세요" +sender+ "님 나카노 봇입니다!");

  }

  if (msg == "@성능"){
    replier.reply ("현재 베타버전입니다\n\n기기:샤오미 홍미노트 5\nAP:퀄컴 스냅드래곤 636\nRAM:LPDDR4X 4gb\nstorage:emmc 64gb\n소프트웨어 버전:MIUI10 oreo");

  }

  if (msg == "@실검"){
    var html = Utils.getWebText("http://www.naver.com","Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",false,false)
.split("<h3 class=\"blind\">급상승 검색어 검색어</h3>")[1]
.split("</ul>")[0]
.replace(/(<([^>]+)>)/g, "")
.trim()
.split("\n");
for(var i = 0; i<=html.length-1; i++){
html[i] = html[i].trim()
}
replier.reply(html.join("\n"))
  }
}
