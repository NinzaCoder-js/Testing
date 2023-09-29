let testSavollar = [
    {
      savollar: "Fransiyani poytaxti qayer?",
      variantlar: ["London", "Parij", "Berlin"],
      togriJavob: 2
    },
    {
      savollar: "Qaysi sayyora Quyoshga yaqinroq?",
      variantlar: ["Merkuriy", "Venera", "Mars"],
      togriJavob: 1
    },
    {
      savollar: "Apple kompaniyasi asoschisi kim?",
      variantlar: ["Mark Sukerberg", "Stiv Jobs", "Ilon Mask"],
      togriJavob: 2
    },
    {
      savollar: "Qaysi dasturlash tili 10 kun ichida yaratilgan?",
      variantlar: ["Python", "Swift", "JavaScript"],
      togriJavob: 3
    },
    {
      savollar: "Suvda atom bormi?",
      variantlar: ["iye Atom bombaku", "Sizdachi zizi bormi", "Albatta hama atom suvdaku"],
      togriJavob: 3
    },  
  ];
  
 let chekbox=true;
  function startTest() {
    
    while (chekbox){  
      let checking = +prompt("Testga kim sifatida kirmoqchisiz (1 , 2 yoki 3 )? \n 1)Talaba \n 2)O'qituvchi \n 3)Chiqish" );
      if (checking==1){
        alert("Testni boshlash uchun OK ni bosing !");

        let startTime = new Date(); 
  
    let togrijavob = 0;
  
    for (let i = 0; i < testSavollar.length; i++) {
      let savollar = testSavollar[i].savollar;
      let variantlar = testSavollar[i].variantlar;
  
  
      let userAnswer = +(prompt(`${i + 1}-savol: ${savollar} \nJavoblar: \n${1}. ${variantlar[0]} \n${2}. ${variantlar[1]} \n${3}. ${variantlar[2]} \nJavobingizni tanlang: (1, 2, yoki 3):`));
  
      if (userAnswer == testSavollar[i].togriJavob) {
        togrijavob++;
      }
    }
  
    let endTime = new Date(); 
    let workingTime = (endTime - startTime) / 1000; 
  
    let togrilikKoeffisenti = (togrijavob / testSavollar.length) * 100;

    alert(`Test natijalari: \nTest ${workingTime} sekund ichida tugadi. \nTo'g'ri javoblar soni: ${togrijavob} \nTo'g'ri javoblar koeffisienti: ${togrilikKoeffisenti}%`);

    chekbox=false;


      }

      else if (checking==2){
        let logincheck=true
        while (logincheck){

        
       let loginTeacher = +prompt("Assalomu alaykum ustoz !\nMarhamat Login parolizni kiriting (6 xonali son):");
       if (loginTeacher==654321){
        let chooseTecher = +prompt("Quydagilardan birini tanlang (1 yoki 2)!\n 1)Test qo'shish \n 2)Testni tahrirlash");
        
        if (chooseTecher==1) {
          alert("hali mavjudmas")
          logincheck=false
        }
        
        else if (chooseTecher==2) {
          alert("hali mavjudmas")
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
  
  startTest();