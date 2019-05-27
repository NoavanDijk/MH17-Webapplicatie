window.onload = function(){

var volgendebegin = document.getElementById("volgende1");
var turnphone = document.getElementById("turnphone");
var turnachtergrond = document.getElementById("turnachtergrond");
var play = document.getElementById("js--start");
var uitzwaaien = document.getElementById("js--uitzwaaien");
var index = document.getElementById("js--index");

var puin = document.getElementById("js--puin");
var knuffelzoek = document.getElementById("knuffelzoek");
var uitleg = document.getElementById("uitleg");
var uitlegknuffel = document.getElementById("uitlegknuffel");
var startknuffel = document.getElementById("startknuffel");

var woonkamer = document.getElementById("js--woonkamer");
var accept = document.getElementById("accept");
var decline = document.getElementById("decline");
var telefoon = document.getElementById("js--telefoon");
var weeklater = document.getElementById("weeklater");
var volgendeweek = document.getElementById("volgendeweek");
var buk = document.getElementById("buk");
var chatten = document.getElementById("chatten");
var volgendjaar = document.getElementById("volgende6");
var volgendebuk = document.getElementById("volgende8");
var volgendeeinde = document.getElementById("volgende13");
var bellen = document.getElementById("js--bellen");
var ophangen = document.getElementById("ophangen");
var veelplezier = document.getElementById("veelplezier");
var gesprek = document.getElementById("gesprek");
var eindegesprek = document.getElementById("eindegesprek");
var neemjeop = document.getElementById("neemjeop");
var ofniet = document.getElementById("ofniet");
var allenamen = document.getElementById("allenamen");
var videonamen = document.getElementById("videonamen");
var videoconstructie = document.getElementById("videoconstructie");
var brief = document.getElementById("brief");
var envelop = document.getElementById("envelop");
var papier = document.getElementById("papier");
var briefopenen = document.getElementById("briefopenen");
var naarpresentatie = document.getElementById("naarpresentatie");
var presentatiegaan = document.getElementById("presentatiegaan");
var schrijven = document.getElementById("schrijven");
var openbrief = document.getElementById("openbrief");

var i = 0, tekstbrief;
tekstbrief = "Beste nabestaande van vlucht MH17, wij nodigen u uit om naar de MH17 presentatie te komen. Hierin zal worden verteld wat er mogelijk is gebeurd met vlucht MH17. Mvg het onderzoeksteam van MH17";

var zwarttussen = document.getElementById("zwarttussen");
var tijd = document.getElementById("tijd");
var eindetekst = document.getElementById("eindetekst");
var eindedatum = document.getElementById("eindedatum");

var terugkomst = document.getElementById("terugkomst");
var constructie = document.getElementById("constructie");

var jaarlater = document.getElementById("jaarlater");

var info = document.getElementById("info");
var informatie = document.getElementById("informatie");
var achterkantfoto = document.getElementById("achterkantfoto");
var vleugel2foto = document.getElementById("vleugel2foto");
var vleugelfoto = document.getElementById("vleugelfoto");
var voorkantfoto = document.getElementById("voorkantfoto");

var achterkant = document.getElementById("achterkant");
var vleugel2 = document.getElementById("vleugel2");
var vleugel = document.getElementById("vleugel");
var voorkant = document.getElementById("voorkant");

var woonkamerr = document.getElementById("js--woonkamerr");
var volgende12 = document.getElementById("volgende12");

var vier3 = document.getElementById("vier3");
var vier4 = document.getElementById("vier4");
var vier5 = document.getElementById("vier5");
var vier6 = document.getElementById("vier6");
var antw1 = document.getElementById("antw1");
var antw2 = document.getElementById("antw2");
var vier7 = document.getElementById("vier7");
var vier8 = document.getElementById("vier8");
var vier9 = document.getElementById("vier9");
var vier10 = document.getElementById("vier10");
var vier11 = document.getElementById("vier11");
var vier12 = document.getElementById("vier12");
var vier13 = document.getElementById("vier13");
var antw3 = document.getElementById("antw3");
var antw4 = document.getElementById("antw4");

var einde = document.getElementById("einde");

var start = document.getElementById("start");
var vid = document.getElementById("myVideo");
var video = document.getElementById("video");
var videoterug = document.getElementById("videoterug");
var start2 = document.getElementById("start2");
var pause2 = document.getElementById("pause2");
var start3 = document.getElementById("start3");
var pause3 = document.getElementById("pause3");
var start4 = document.getElementById("start4");
var pause4 = document.getElementById("pause4");
var videomonument = document.getElementById("videomonument");
var monument = document.getElementById("monument");

var audio = document.getElementById("ringtone");
var crash = document.getElementById("crash2");
var berichttoon = document.getElementById("berichttoon");

index.style.display = "none";
puin.style.display = "none";
zwarttussen.style.display = "none";

volgendebegin.onclick = function(){
  turnphone.style.display = "none";
  index.style.display = "block";
  turnachtergrond.style.display = "none";
};

uitzwaaien.style.display = "none";

  play.onclick = function(){
    uitzwaaien.style.display = "block";
    index.style.display = "none";
    veelplezier.play();
    setTimeout(function(){
      zwarttussen.style.display = "block";
      tijd.style.display = "block";
      crash.play();
      uitzwaaien.style.display = "none";
      puin.style.display = "none";
    }, 1600);
      setTimeout(function(){
        uitzwaaien.style.display = "none";
        zwarttussen.style.display = "none";
        tijd.style.display = "none";
        puin.style.display = "block";
        uitleg.style.display = "block";
        uitlegknuffel.style.display = "block";
        startknuffel.style.display = "block";
      }, 12000);
  };

startknuffel.onclick = function(){
  uitleg.style.display = "none";
  uitlegknuffel.style.display = "none";
  startknuffel.style.display = "none";
};

woonkamer.style.display = "none";
telefoon.style.display = "none";
weeklater.style.display = "none";

knuffelzoek.onclick = function(){
  puin.style.display = "none";
  woonkamer.style.display = "block";
  setTimeout(function(){
    woonkamer.style.display = "none";
    telefoon.style.display = "block";
  }, 1800);
  audio.play();
  audio.loop = true;
};

bellen.style.display = "none";

accept.onclick = function(){
  telefoon.style.display = "none";
  bellen.style.display = "block";
  neemjeop.style.display = "none";
  ofniet.style.display = "none";
  ophangen.disabled = true;
  audio.pause();
  gesprek.play();
  setTimeout(function(){
    eindegesprek.play();
    eindegesprek.loop = true;
    ophangen.disabled = false;
  }, 13000);
};

bellen.style.display = "none";

decline.onclick = function(){
  woonkamer.style.display = "block";
  telefoon.style.display = "none";
  audio.pause();
  setTimeout(function(){
  audio.play();
  }, 1000);
};

video.style.display = "none";

ophangen.onclick = function(){
  eindegesprek.pause();
  bellen.style.display = "none";
  telefoon.style.display = "none";
  video.style.display = "block";
  neemjeop.style.display = "none";
  ofniet.style.display = "none";
};

weeklater.style.display = "none";
terugkomst.style.display = "none";

volgendeweek.onclick = function(){
  video.style.display = "none";
  weeklater.style.display = "block";
  vid.pause();
  setTimeout(function(){
  weeklater.style.display = "none";
  terugkomst.style.display = "block";
}, 1000);
};

jaarlater.style.display = "none";
constructie.style.display = "none";
brief.style.display = "none";
papier.style.display = "none";
naarpresentatie.style.display = "none";
presentatiegaan.style.display = "none";

volgendjaar.onclick = function(){
  terugkomst.style.display = "none";
  jaarlater.style.display = "block";
  videoterug.pause();
  setTimeout(function(){
    brief.style.display = "block";
    jaarlater.style.display = "none";
}, 1000);
};

briefopenen.onclick = function(){
  function typing() {
    if(i < tekstbrief.length){
      document.getElementById("tekstbrief").innerHTML += tekstbrief.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
  papier.style.display = "block";
  envelop.style.display = "none";
  naarpresentatie.style.display = "block";
  presentatiegaan.style.display = "block";
  briefopenen.style.display = "none";
  openbrief.style.display = "none";
  schrijven.play();
};

constructie.style.display = "none";

naarpresentatie.onclick = function(){
  brief.style.display = "none";
  constructie.style.display = "block";
  schrijven.pause();
};

buk.style.display = "none";

volgendebuk.onclick = function(){
  constructie.style.display = "none";
  buk.style.display = "block";
  videoconstructie.pause();
};

achterkantfoto.style.display = "none";
vleugel2foto.style.display = "none";
vleugelfoto.style.display = "none";
voorkantfoto.style.display = "none";

achterkant.onclick = function(){
  achterkantfoto.style.display = "block";
  vleugel2foto.style.display = "none";
  vleugelfoto.style.display = "none";
  voorkantfoto.style.display = "none";
  info.style.display ="none";
  informatie.style.display ="block";
};

vleugel2.onclick = function(){
  achterkantfoto.style.display = "none";
  vleugel2foto.style.display = "block";
  vleugelfoto.style.display = "none";
  voorkantfoto.style.display = "none";
  info.style.display ="none";
  informatie.style.display ="block";
};

vleugel.onclick = function(){
  achterkantfoto.style.display = "none";
  vleugel2foto.style.display = "none";
  vleugelfoto.style.display = "block";
  voorkantfoto.style.display = "none";
  info.style.display ="none";
  informatie.style.display ="block";
};

voorkant.onclick = function(){
  achterkantfoto.style.display = "none";
  vleugel2foto.style.display = "none";
  vleugelfoto.style.display = "none";
  voorkantfoto.style.display = "block";
  info.style.display ="none";
  informatie.style.display ="block";
};

woonkamerr.style.display = "none";
chatten.style.display = "none";

volgende12.onclick = function(){
  buk.style.display = "none";
  achterkantfoto.style.display = "none";
  vleugelfoto.style.display = "none";
  voorkantfoto.style.display = "none";
  woonkamerr.style.display = "block";
  berichttoon.play();
  setTimeout(function(){
    woonkamerr.style.display = "none";
    chatten.style.display = "block";
  }, 1400);
};

vier3.style.display = "block";
vier4.style.display = "block";
vier6.style.display = "none";
antw1.style.display = "block";
vier5.style.display = "block";
antw2.style.display = "block";
vier7.style.display = "none";
vier8.style.display = "none";
vier9.style.display = "none";
vier10.style.display = "none";
vier11.style.display = "none";
vier12.style.display = "none";
vier13.style.display = "none";
antw3.style.display = "none";
antw4.style.display = "none";

antw1.onclick = function(){
  vier5.style.display = "none";
  vier3.style.display = "block";
  vier4.style.display = "none";
  vier6.style.display = "block";
  antw1.style.display = "none";
  antw2.style.display = "none";

  setTimeout(function(){
    vier5.style.display = "none";
    vier3.style.display= "none";
    vier4.style.display = "none";
    vier6.style.display = "none";
    antw1.style.display = "none";
    antw2.style.display = "none";
    vier7.style.display = "block";
    vier8.style.display = "block";
    vier9.style.display = "none";
    vier10.style.display = "block";
    vier11.style.display = "block";
    vier12.style.display = "block";
    vier13.style.display = "block";
    antw3.style.display = "block";
    antw4.style.display = "block";

  }, 1000);
};

antw2.onclick = function(){
  vier5.style.display = "none";
  vier3.style.display = "block";
  vier4.style.display = "block";
  vier6.style.display = "none";
  antw1.style.display = "none";
  antw2.style.display = "none";

  setTimeout(function(){
    vier5.style.display = "none";
    vier3.style.display= "none";
    vier4.style.display = "none";
    vier6.style.display = "none";
    antw1.style.display = "none";
    antw2.style.display = "none";
    vier7.style.display = "block";
    vier8.style.display = "none";
    vier9.style.display = "block";
    vier10.style.display = "block";
    vier11.style.display = "block";
    vier12.style.display = "block";
    vier13.style.display = "block";
    antw3.style.display = "block";
    antw4.style.display = "block";
  }, 1000);
};

monument.style.display = "none";

antw3.onclick = function(){
  vier10.style.display = "block";
  vier11.style.display = "none";
  vier12.style.display = "block";
  vier13.style.display = "none";
  setTimeout(function(){
    chatten.style.display = "none";
    monument.style.display = "block";
    vier10.style.display = "none";
    vier11.style.display = "none";
    vier12.style.display = "none";
    vier13.style.display = "none";
  }, 200);
};

antw4.onclick = function(){
  vier10.style.display = "block";
  vier11.style.display = "none";
  vier12.style.display = "none";
  vier13.style.display = "block";
  setTimeout(function(){
    chatten.style.display = "none";
    einde.style.display = "block";
    eindetekst.style.display = "block";
    eindedatum.style.display = "block";
    vier10.style.display = "none";
    vier11.style.display = "none";
    vier12.style.display = "none";
    vier13.style.display = "none";
  }, 200);
  setTimeout(function(){
    einde.style.display = "none";
    eindetekst.style.display = "none";
    eindedatum.style.display = "none";
    allenamen.style.display = "block";
    videonamen.style.display = "block";
    videonamen.play();
  }, 1500);
};

einde.style.display = "none";
allenamen.style.display = "none";

volgendeeinde.onclick = function(){
  monument.style.display = "none";
  einde.style.display = "block";
  eindetekst.style.display = "block";
  eindedatum.style.display = "block";
  videomonument.pause();
  setTimeout(function(){
    einde.style.display = "none";
    eindetekst.style.display = "none";
    eindedatum.style.display = "none";
    allenamen.style.display = "block";
    videonamen.style.display = "block";
    videonamen.play();
  }, 1500);
};

  start.onclick = function(){
    vid.play();
  };

  start2.onclick = function(){
    videoterug.play();
  };

  pause2.onclick = function(){
    videoterug.pause();
  };

  start3.onclick = function(){
    videoconstructie.play();
  };

  pause3.onclick = function(){
    videoconstructie.pause();
  };

  start4.onclick = function(){
    videomonument.play();
  };

  pause4.onclick = function(){
    videomonument.pause();
  };

};
