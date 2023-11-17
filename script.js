let testSavollar = [
    {
      savollar: "O'qitishning yetakchi tamoyillari deganda nimani tushunasiz?",
      variantlar: ["Quyidagilarning barchasi to'g'ri", "Tarbiyalovchi va kamol toptiruvchi Ko'rsatmalilik, tushunarlilik, puxtalik va mustahkamlik ", "llmiylik, tizimlilik, izchillik va o'qitishda individual yondashish","Onglilik, faollik vaamaliyot bilan bog'liqligi"],
      togriJavob: 1
    },
    {
      savollar: "Ta'lim mazmuni deganda nimani tushunasiz?",
      variantlar: ["Davlat ta' lim standarti", "O'quv rejasi va dasturlar, darsliklar", "O'quv qo'llanma va tavsiyanomalar","Yuqoridagilarning barchasi"],
      togriJavob: 4
    },
    {
      savollar: "Ta'lim jarayoni deganda nimani tushunasiz?",
      variantlar: ["Ta' limning maqsad, vazifalari, natijasi, nazorat va baholash uslublari", "Ta' lim beruvchi va ta' lim oluvchi", "Ta'lim metodlari, shakllari,vositalari va mazmuni","Yuqoridagilarning barchasi"],
      togriJavob: 4
    },
    {
      savollar: "Pedagogika fanining tarkibiy tuzilishi deganda nimani tushunasiz?",
      variantlar: ["Maktabgacha yoshdagi pedagogika va maktab pedagogikasi", "Katta yoshdagilar pedagogikasi, kasbiy va ijtimoiy pedagogika", "Defektologiya (surdopedagogika, tiflopedagogika, oligofrenopedagogika), innovasion pedagogika","Yuqoridagilarning barchasi"],
      togriJavob: 4
    },
    {
      savollar: "O'zbekistonda uzliksiz ta'lim tizimi deganda nimani tushunasiz?",
      variantlar: ["Maktabgacha tarbiya, umumiy o'rta ta'lim, o'rtamaxsus, kasb-hunar ta'limi, oliy ta'lim", "B .Maktabgacha tarbiya, boshlang'ich ta'lim, umumiy o'rta ta'lim, o'rta maxsus, kasb-hunar ta'limi, oliy ta'lim, maktabdan tashqarii ta'lim-tarbiya", "Maktabgacha tarbiya, boshlang'ich ta'lim, umumiy o'rta ta'lim, o'rta maxsus, kasb-hunar ta'limi, oliy ta'lim, o'quv yurtlaridan keyingi ta' lim, maktabdan tashqari ta' lim-tarbiya ","D .*Maktabgacha ta'lim-tarbiya, umumiy o'rta ta'lim, o'rta maxsus, kasb-hunar ta'limi, oliy ta'lim.oily ta'limdan keyingi ta'lim, kadrlar malakasini oshirish va qayta tayyorlash, maktabdan tashqari ta'lim kadrlarning malaka oshirish va ularni qayta tayyorlash, oiladagi ta'lim, mustaqil ta'lim"],
      togriJavob: 4
    },
    {
      savollar: "Optimallashtirish deganda nimani tushunasiz?",
      variantlar: ["Ta'limda fanlararo o'qitish nazariyasi", "Ta'lim berib, o'qitish nazariyasi", "Muammoli o'qitish","Ko'p sonli imkoniyatlardan eng qulayini tanlab olish"],
      togriJavob: 4
    },
    {
      savollar: "Ta'lim metodlari deganda nimani tushunasiz?",
      variantlar: ["Tushuntirish (muammoli bayon, xususiy qidirish yoki evristik hamda tadqiqot", "Og'zaki metodlar: hikoya, ma'ruza, suhbat ", "Ta’limda qiziqishni rag'batlantirish","Yuqoridagilarning barchasi"],
      togriJavob: 4
    },
    {
      savollar: "«Didaktika» termini yunoncha «didaktikos» degan so'zdan olingan bo'iib, qanday ma'noda tarjima qilinadi?",
      variantlar: ["O'qituvchi", "Ta'lim berish va o'qitish", "Ta'lim beruvchi va ta'lim oluvchi","Ta'lim oluvchi"],
      togriJavob: 2
    },
    {
      savollar: "«Buyuk didaktika» asarini kim yozgan?",
      variantlar: ["Suqrot", "Arastu", "Ya.A.Komenskiy","J.J.Russo"],
      togriJavob: 3
    },
    {
      savollar: "O'qitish jarayoni tushunchasi va mohiyati, o'qitishning tamoyillari, ta'lim mazmuni, ta'lim metodlari, o'qitish jarayonini tashkil etish shakllari pedagogikaning qaysi bo'limiga tegishli?",
      variantlar: ["Tarbiya nazariyasi", "Didaktika", "O'qitish vazifalari","Hamina javob to'g'ri"],
      togriJavob: 2
    },
    {
      savollar: "O'qituvchi faoliyati va o'quvchilar bilish faoliyatining  xususiyatini belgilaydigan asosiy qoidalar nima deb yuritiladi?",
      variantlar: ["O'qitish qoidalari", "O'qitish jarayoni", "Ta'lim metodlari","0'qitish tamoyillari"],
      togriJavob: 4
    },
    {
      savollar: "O'qituvchining  o'quvchilar  bilimlarini  chuqur,  ongli  va  mustaqil  egallab olishlariga  qaratilgan  va  o'quvchilar  bilish  faoiiyatini  boshqarishni  ta'minlaydigan faoliyat usullari uima deb yuritiladi?",
      variantlar: ["O'qitish qoidalari", "O'qitish jarayoni", "Ta'lim metodlari","O'qitish tamoyillari"],
      togriJavob: 3
    },
    {
      savollar: "Bilim olishning asosiy manbai bo'yicha o'qitish (ta'lim.) metodlariga  qaysilar kiradi? ",
      variantlar: ["Og'zaki, ko'rgazmali va amaliy", "Ta'lim mctodlari", "Reprodo'qtiv, izohli-ko'rgazmali","Induktiv"],
      togriJavob: 1
    },
    {
      savollar: "Fikrlash, eslab qolish va bilim olish faolligining xarakteri bo'yicha metodlarga qaysilar kiradi?",
      variantlar: ["Og'zaki, ko'rgazmali va amaliy", "Ta'lim metodlari", "Reproduktiv, izohli-ko'rgazmali, muammoli-izlanishli, tadqiqotli","Induktiv, deduktiv"],
      togriJavob: 3
    },
    {
      savollar: "Xulosa chiqarish turlari bo'yicha ta'lim metodlariga qaysilar kiradi?",
      variantlar: ["Og'zaki, ko'rgazmali va amaliy", "Ta'lim metodlari", "Reprodo'qtiv, izohli-ko'rgazmali, muammoli-izlanishli, tadqiqotii","Induktiv, deduktiv"],
      togriJavob: 4
    },
    {
      savollar: "Ta'lim jarayonida qo'llaniladigan ko'zgazmali qurollar va texnika vositalariga ko'p darajada bog'liq bo'lgaan  o'quv materialini o'zlashtirish metodi qaysi bandda ko'rsatilgan?",
      variantlar: ["Og'zaki, amaliy", "Ko'rgazmali", "Reproduktiv","Induqtiv, deduktiv"],
      togriJavob: 2
    },
    {
      savollar: "Ta'lim oluvchilarning nutq madaniyati va mantiqiy tafakkurini taraqqiy ettirish, ularning bilish imkoniyatlari bilan bog'liq usul qanday usul deyiladi?",
      variantlar: ["O'yin mashqi", "Og'zaki mashq", "Yozma mashq","Individual mashq"],
      togriJavob: 2
    },
    {
      savollar: "Pedagogikani asosiy prinsipi?",
      variantlar: ["O'quv-tarbiyaviy jarayonni, bolalarning jismoniy, badiiy, ijodiy, mehnat va boshqa har qanday faoliyatiga pedagogik rahbarlikni tashkil etishga bog'liq bo'lgan qonuniy aloqalardir.", "O'qituvchi tomonidan amaliy qonunlarni ijodiy va faol ravishda o'zlashtirish.", "Jamiyatning alohida bir olingan shaxsga bo'lgan ehtiyojlarini aks ettirishdir.","Hammasi to'g'ri."],
      togriJavob: 1
    },
    {
      savollar: "Pedagog, pedagogika atamalari qaysi so'zdan kelib chiqqan va qanday ma'noni bildiradi?",
      variantlar: ["Pedagogika atamasi qadimgi lotin tilidagi 'paydagogos' so'zidan kelib chiqqan bo'lib,'bola etaklovchi' degan ma'noni bildiradi.", "Qadimgi grek tilidagi paydogogoc so'zidan kelib chiqqan bo'lib, 'o'qitaman','o'rgataman' degan ma'noni anglatadi.", "Ingliz tilidagi 'payne' so'zidan olingan bo'lib, bolani rivojlantirish, yetaklash, tarbiyalash degan ma'nolarni bildiradi.","Qadimgi grek tilidagi paydogogos so'zidan kelib chiqqan bo'lib, 'bola etaklovchi' degan ma'noni bildiradi."],
      togriJavob: 4
    },
    {
      savollar: "Pedagogika qanday fan?",
      variantlar: ["Pedagogika tarbiyaning nazariy asoslarini tadqiq etuvchi ijtimoiy- gumanitar fan", "Pedagogika tarbiya jarayonining qonuniyatlari, prinsiplari, shakl va metodlari haqidagi gumanitar fan.", "Pedagogika ta'lim jarayonining mazmuni, qonuniyatlari, metodlarini o'rganuvchi, ijtimoiy, umumkasbiy fan.","Pedagogika ta'lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlari, metodlarini o'rganuvchi ijtimoiy, umumkasbiy fan."],
      togriJavob: 4
    },
    {
      savollar: "Demokratik jamiyat qanaqa pedagogikaga tayanadi?",
      variantlar: ["Demokratik tarbiya va avtoritar pedagogikaga ", "Avtoritar pedagogikaga va ilmiy, insonparvar tarbiya", "Totoletar tarbiya va demokratik  edagogikaga","Demokratik pedagogika va demokratik tarbiyaga"],
      togriJavob: 4
    },


    {
      savollar: "Pedagogik muhit nima?",
      variantlar: ["Bir butun o'quv-jarayonni tashkil etishning asosiy shaklidir.","Pedagogik maqsadlarga muvofiq ravishda maxsus tuzilgan shaxslararo munosabatlar sistemasidir.","Inson shaxsini shakllantiruchi tabiat,ijtimoiy munosabatlarning  sistemasidir.","shaxslararo munosabatning doirasi kabi omillarning bir-birini boyituvchi va muvofiq kelishdir."],
      togriJavob: 2
    },
    {
      savollar: "Pedagogik jarayon.",
      variantlar: ["Maxsus tashkil etilgan sistema, bolalar muhitida muloqot olib borishdir.","Inson shaxsini shakllantiruvchi tabiat.","Ma'lum bir maqsadga yo'naltirilgan kattalarning pedagogik faoliyati ta'sirida tashkiliy shakllantirilgan va mazmunan boyitilgan hamda tarbiyachining yo'naltiruvchi va olib boruvchi rahbarlik roli natijasida bolaning o'z-o'zini taraqqiy ettirishdir.","Hammasi to'g'ri..."],
      togriJavob: 3
    },
    {
      savollar: "Pedagogik jarayonning qonunyatlari nima?",
      variantlar: ["Hozirgi ta'limning ilmiylik qonuniyatlari, o'quvchilar imkoniyatlarini va yoki xususiyatlarini  hisobga olish, ko'rgazmalilik, ta'limda muntazamlilik, davomiylik, o'quvchilarning faolligi,   ongliligi, ta'lim va tarbiyaning tarbiyaviy xarakteri va boshqa.","Ta'lim-tarbiya jarayonining bir-biriga chambarchas bog'liqligi.","O'quvchi va o'qituvchining birgalikdagi faoliyati.","Hamma  javob to'g'ri."],
      togriJavob: 1
    },
    {
      savollar: "Pedagogika faniga berilgan quyidagi ta'riflardan qaysi birini to'g'ri deb hisoblaysiz? ",
      variantlar: ["Pedagogika uzluksiz ta'limni amalga oshirish, yosh avlodni tarbiyalash haqidagi fan","Pedagogika inson tarbiyasi haqidagi fan","Pedagogika ta'lim-tarbiya va ma'lumot,qonuniyatlari haqidagi fan","Pedagogika uzluksiz ta'lim-tarbiya tizimiriing nazariy asoslarini va prinsiplarini, ta'lim- tarbiya jarayonida inson shaxsini rivojlantirish, shakllantirishnirig mohiyati, qonuniyatlari haqidagi fan"],
      togriJavob: 4
    },
    {
      savollar: "Pedagogik jarayonning bosqichlarini ayting?",
      variantlar: ["Go'dak dunyoga kelgan kundan boshlab to umrining oxrigacha bo'lgan davrdan tarbiyalanishi va ta'lim olishini  aytishimiz mumkin.","Pedagogikada tarbiyalanuvchilarning yoshiga ko'ra maktabgacha yoshdagi, maktab yoshdagi ya katta yoshdagilar.","Pedagogik jarayon bosqichlari deyarli hamma bosqichlari.o'zining turli riyojlanish,  taraqqiyot bosqichlariga egadir.","Hamma  javoblar to'g'ri."],
      togriJavob: 4
    },
    {
      savollar: "Pedagogik muloqot nima?",
      variantlar: ["O'quv-tarbiya jarayoni davomida o'qituvchining o'quvchilar bilan kasbiy muloqoti hisoblanadi.","O'zaro munosabatlar, ta'sirlar ularning aloqalarini amalga  oshirishdir.","Jamoa guruhlarning hamkorligi, ularning shaxsga ta'siri.","Hamma  javoblar to'g'ri."],
      togriJavob: 1
    },
    {
      savollar: "Tarbiyaning asosiy vazifasi nima?",
      variantlar: ["Tarbiya yosh avlodni jamiyatimizda   qabul qilingan odob-axloq qoidalariga mos  keladigan  e'tiqodini, axloqiy ko'nikma va malakalarini, extiyoji va intilishlarini tarkib toptirishdan iborat","Odamlaming dunyo bilan munosabatlarining bir butun sistemasini ta'minlovchi, vosita ","Zarurat, ehtiyojlilik-qandaydir bir vosita, o'zga narsaga javob berish, insonning ruhiy holatini to'g'rilovchi omil","Odamning  jamiyat a'zosi sifatida o'z-o'zini anglash va  tafakkurini, faoljyatining ob'yektivligini biluvchanlik  tushunchasidir"],
      togriJavob: 1
    },
    {
      savollar: "Umuminsoniy tarbiya va qadriyatlarga  nimalar kiradi?",
      variantlar: ["Butun insoniyatning ta'lim-tarbiya sohasidagi tajribalari","Barcha xalqlar uchun umumiy bo'lgan ilg'or tarbiyaviy g'oyalar, an'analar","Tarbiyada barcha insonlarning qadr - qimmatini hurmat qilish","Barsha millatlarga xos axloqiy normalar "],
      togriJavob: 4
    },
    {
      savollar: "Shaxs kamolotiga qanday omillar ta'sir etadi?",
      variantlar: ["bola shaxsining ribojlanishiga muhit ba tarbiya kabi omillar.","shaxsning kamol topishida ijtimoiy ba biologik omillar ta'sir etadi.","odamlarning munosabati.","biologik omil, ijtimoiy omil va tarbiya ta'sir etadi."],
      togriJavob: 4
    },

  ];


  

  function getRandomisedQuestions(testSavollar) {
    let randomisedQuestions = new Set();
  
    do {
      let randomisedIndex = Math.floor(Math.random() * testSavollar.length);
      randomisedQuestions.add(testSavollar[randomisedIndex]);
    } while (randomisedQuestions.size != testSavollar.length);
  
      for (let i = 0; i < testSavollar.length; i++) {
        let randomisedIndex = Math.floor(Math.random() * testSavollar.length);
        randomisedQuestions.add(testSavollar[randomisedIndex]);
      }
  
    return randomisedQuestions;
  }

  function editTest(testSavollar) {
    let n = prompt(
      "Tahrirlamochi bo'lgan testni raqamini kiriting\n" +
        getQuestionsList(testSavollar)
    );
    testSavollar[n - 1] = {
      savollar: prompt("Savolni kiriting: ", testSavollar[n - 1].savollar),
      variantlar: [
        prompt("1. variatni kiriting: ", testSavollar[n - 1].variantlar[0]),
        prompt("2. variatni kiriting: ", testSavollar[n - 1].variantlar[1]),
        prompt("3. variatni kiriting: ", testSavollar[n - 1].variantlar[2]),
      ],
      togriJavob: prompt("to'g'ri javob: ", testSavollar[n - 1].togriJavob),
    };
    alert(getQuestionsList(testSavollar));
  }
  
  function getQuestionsList(savollar) {
    let list = "";
    for (let i = 0; i < savollar.length; i++) {
      list += i + 1 + savollar[i].savollar + "\n";
    }
    return list;
  }
  

  let newRandomisedQuestions = Array.from(getRandomisedQuestions(testSavollar));
  testSavollar = newRandomisedQuestions;

  
  let wellcome = +prompt("Assalamu alaykum \nPed testing - saytimizga Xush kelibsiz hurmatli mijoz \nPed testing - sayti bilan tanishsh => 1 \nTestni boshlash => 2");

  if(wellcome==2){
    let student=prompt("Iltimos ism familyangizni to'liq kiriting !!!");
    function startTest() {
      let chekbox=true;
      while (chekbox){  
        let checking = +prompt("Testga kim sifatida kirmoqchisiz (1 , 2 yoki 3 )? \n 1)Talaba \n 2)O'qituvchi \n 3)Chiqish" );
        if (checking==1){
          alert("Testni boshlash uchun OK ni bosing !");
  
      let startTime = new Date(); 
      let togrijavob = 0;
    
      for (let i = 0; i < testSavollar.length; i++) {
        let savollar = testSavollar[i].savollar;
        let variantlar = testSavollar[i].variantlar;
    
    
        let userAnswer = +(prompt(`${i + 1}-savol: ${savollar} \nJavoblar: \n${1}. ${variantlar[0]} \n${2}. ${variantlar[1]} \n${3}. ${variantlar[2]} \n${4}. ${variantlar[3]} \nJavobingizni tanlang: (1, 2, 3 yoki 4):`));
    
        if (userAnswer == testSavollar[i].togriJavob) {
          togrijavob++;
        }
      }
    
      let endTime = new Date(); 
      let workingTime = (endTime - startTime) / 1000; 
    
      let togrilikKoeffisenti = (togrijavob / testSavollar.length) * 100;
  
      alert(`Test topshiruvchi ${student} \n Test natijalari: \nTest ${workingTime} sekund ichida tugadi. \nTo'g'ri javoblar soni: ${togrijavob} \nTo'g'ri javoblar koeffisienti: ${togrilikKoeffisenti}%`);
  
      chekbox=false;
  
  
        }
  
        else if (checking==2){
          let logincheck=true
          while (logincheck){
  
          
         let loginTeacher = +prompt("Assalomu alaykum ustoz !\nMarhamat Login parolizni kiriting (6 xonali son):");
         if (loginTeacher==654321){
          let chooseTecher = +prompt("Quydagilardan birini tanlang (1 yoki 2)!\n 1)Test qo'shish \n2)Testni tahrirlash\n3)Chiqish");
          
          if (chooseTecher==1) {
          
            againAddQue = true;
            while(againAddQue){
              let savol = prompt("Savolni kiriting :");
              let var1 = prompt("1 - variantni kiriting :");
              let var2 = prompt("2 - variantni kiriting :");
              let var3 = prompt("3 - variantni kiriting :");
              let var4 = prompt("4 - variantni kiriting :");

              togri = +prompt(`${savol} \n1. ${var1}\n2. ${var2}\n3 .${var3}\n4 .${var4} \nto'g'ri javobni tanlang : (1 , 2 , 3 yoki 4)`) ;
              let arr = [];
              arr.push(var1,var2,var3,var4);
              testSavollar.push ({
                  savollar: savol,
                  variantlar: arr,
                  togriJavob: togri,
                });

              let addAgainQue = +prompt("Yana savol kiritishni xoxlaysizmi ? \n1) Ha \n2)Yo'q yetarli ");
              if (addAgainQue==2){againAddQue=false;}
              else if (addAgainQue==1) {
                againAddQue=true;
              }

              else {againAddQue=false;}

            }
            logincheck=false
          }

          else if (chooseTecher==2){
            editTest(testSavollar);
          }
          
          else if (chooseTecher==3) {
            chekbox=false;
            logincheck=false
          }
  
          logincheck=false
         }
  
         else {
          alert("Sizning login paroliz => 654321 qaytadan urunib ko'ring ! \nP/S : Login parolizni unutmang* !")
         }
  
        }
       }
  
        else if (checking==3){
          chekbox=false;
        }
  
        else {
          alert("Sizni 1 , 2 va 3 dan boshqa raqam kiritishga haqqiz yo'q !! \n Mayli sizga yana bir marta imkon beramiz :)  OK ni bosing xo'jayin");
        }
      }
      
      
    }
  }
 
  startTest();