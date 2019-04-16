var run=true

function response(room,msg,sender,isGroupChat,replier,imageDB) {
  if (run==true&&msg=="Non"){
    replier.reply("켜져있어 멍청아!");

  }

  if (run==false&&msg=="Non"){
    replier.reply("system booting...");
     java.lang.Thread.sleep(1*2000)
      replier.reply("ver:0.0.1 B");
       java.lang.Thread.sleep(1*1500)
        replier.reply("boot_sector:OK");
         java.lang.Thread.sleep(1*3000)
          replier.reply("disk0:OK");
           java.lang.Thread.sleep(1*5000)
            replier.reply("disk1:OK");
             java.lang.Thread.sleep(1*10000)
              replier.reply("system:OK");
               java.lang.Thread.sleep(1*5000)
                replier.reply("Network config");
                 java.lang.Thread.sleep(1*1000)
                  replier.reply("IP config:True");
                   java.lang.Thread.sleep(1*3000)
                    replier.reply("!!!warning!! this version is beta,so it can be unstable.")
                     java.lang.Thread.sleep(1*1000)
                      replier.reply("OS:android 9")
                       replier.reply("device:whyred")
                        java.lang.Thread.sleep(1*2000)
                         replier.reply("loading kakaobot.js ...")
                          java.lang.Thread.sleep(1*3000)
                          replier.reply("환영합니다 " +sender+ "님")
                  run=true;
  }
  if (msg == "나카노?") {
    replier.reply ("왜불러 귀찮게시리");

  }

  if (msg == "하이 빅스비?") {
    replier.reply ("...뒤질래?");

  }

  if (msg == "시리야?") {
    replier.reply ("죽고싶구나...진짜...");

  }

  if (msg == "오케이 구글?") {
    replier.reply ("ㅈ같은새끼 뒤져버려...");

  }

  if (msg == "힝...") {
    replier.reply ("귀여운척하지마...토나오니까...;;");

  }

  if (msg == "씨발") {
    replier.reply ("와 입 걸레냐...?");
     java.lang.Thread.sleep(1*1000)
      replier.reply("안그래도 찌질해보이는데 더 찌질해;;");

  }

  if (msg == "병신") {
    replier.reply ("자기소개?");

  }

  if (msg == "@버전") {
    replier.reply ("다음은 현재 소프트웨어의 버전입니다.");
     java.lang.Thread.sleep(1*1000)
    replier.reply ("소프트웨어버전:0.0.1 B\n빌드일자:2019년 4월 8일\n보안패치일자:2019년 4월 9일");

  }

  if (msg == "@현재시간") {
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

if (msg == "Noff") {
 run=false
  replier.reply ("꺼져줌 ㅅㄱ")

 }
}