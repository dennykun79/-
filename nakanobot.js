var run=true

function response(room,msg,sender,isGroupChat,replier,imageDB) {
  if (run==true&&msg=="Non"){
    replier.reply("켜져있눈뎅");

  }

  if (run==false&&msg=="Non"){
    replier.reply("system booting...");
     java.lang.Thread.sleep(1*2000)
      replier.reply("ver:0.0.1 B");
       java.lang.Thread.sleep(1*1500)
        replier.reply("boot_sector:OK");
         java.lang.Thread.sleep(1*2000)
          replier.reply("disk0:OK");
           java.lang.Thread.sleep(1*2000)
            replier.reply("disk1:OK");
             java.lang.Thread.sleep(1*1000)
              replier.reply("system:OK");
               java.lang.Thread.sleep(1*5000)
                replier.reply("Network config");
                 java.lang.Thread.sleep(1*1000)
                  replier.reply("IP config:True");
                     java.lang.Thread.sleep(1*1000)
                      replier.reply("OS:android 9");
                       replier.reply("device:whyred");
                        java.lang.Thread.sleep(1*2000)
                         replier.reply("loading kakaobot.js ...");
                          java.lang.Thread.sleep(1*2000)
                          replier.reply("환영합니다 " +sender+ "님");
                           run=true;
  }
  
  if (msg == "나카노?") {
    replier.reply ("웅?");

  }

  if (msg == "하이 빅스비?") {
    replier.reply ("...저기요오");

  }

  if (msg == "시리야?") {
    replier.reply ("하아?");

  }

  if (msg == "오케이 구글?") {
    replier.reply ("구글 아니라고오...");

  }

  if (msg == "힝...") {
    replier.reply ("...;;");

  }

  if (msg == "씨발") {
    replier.reply ("헤에...");
     java.lang.Thread.sleep(1*1000)
      replier.reply("에반데에...");

  }

  if (msg == "병신") {
    replier.reply ("저기요요?...");

  }

  if (msg == "N버전") {
    replier.reply ("다음은 현재 소프트웨어의 버전입니다.");
     java.lang.Thread.sleep(1*1000)
    replier.reply ("소프트웨어버전:0.0.1 B\n빌드일자:2019년 4월 8일\n보안패치일자:2019년 4월 9일");

  }

  if (msg == "N현재시간") {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = (dt.getMonth()+1);
    var date = dt.getDate();

    var hour = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();

    var day = dt.getDay();
    var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');

    if(hour>12){
      hour -= 12
  }
    replier.reply("오늘은" +year+ "년" +month+ "월" +date+ "일" +"("+week[day]+")\n" +hour+ "시" +minutes+ "분" +seconds+ "초 입니다");
  
  }
  
  try {
   if (msg.indexOf("N중식검색")==0){
	var day = new Date(); 
	 var m = (day.getMonth() + 1); 
	  var d = day.getDate(); 
	   var pap = (m+"월 "+d+"일 [중식]"); 
	    var u=Utils.getWebText("http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+ msg.substr(6) + "+급식");
	     var a=u.split(pap+"</strong>"); 
	      var b=a[1].split("</ul>");
	       b = b[0].replace(/(<([^>]+)>)/g, "");
	   replier.reply("["+msg.substr(6)+"]\n"+pap+"입니다.\n"+b+"※숫자는 식품 알레르기 식별 번호입니다.※\n1.난류 2.우유 3.메밀 4.땅콩 5.대두 6.밀 7.고등어 8.게 9.새우 10.돼지고기 11.복숭아 12.토마토 13.아황산류 14.호두 15.닭고기 16.쇠고기 17.오징어 18.조개류(굴,전복,홍합 포함)"); 

  } 

  
  }
  catch(e) {
	
  replier.reply("학교 정보가 없거나 식단이 없습니다.");
	
  }

  if (msg == "Noff") {
   run=false
    replier.reply ("이만 자러갈게요오...(꾸물꾸물)");

  }

}
