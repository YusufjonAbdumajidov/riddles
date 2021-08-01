const sentence = document.querySelector('.sentence');
const btn = document.querySelector('.btn');
const riddlesBtn = document.querySelector('.riddlesBtn');
const taleBtn = document.querySelector('.taleBtn');
const riddlesContainer = document.querySelector('.riddles');
const taleContainer = document.querySelector('.tale');
const underLine = document.querySelector('.line');
const rightBtn = document.querySelector('.rightBtn');
const leftBtn = document.querySelector('.leftBtn');
const counterDiv = document.querySelector('.counterDiv');
const counterShow = document.getElementById('counter');
const question = document.querySelector('.question');
const input = document.getElementById('input');
const submitBtn = document.querySelector('.submit');
const myForm = document.getElementById('myForm');
const qCounterDiv = document.querySelector('.qCounterDiv');
const qCounter = document.getElementById('qCounter');


let counter = 0;
let questionCounter = 0;


const arr = [
    "Ayrilmagin elingdan Quvvat ketar belingdan",
    "Begona tuproq — devona tuproq",
    "Ayrilganni ayiq yer, Bo'linganni bo'ri yer.",
    "Ayrilgan yo'lda qolar, Bo'lingan — do'lda.",
    "Baliqning kuni ko'l bilan, Botirning kuni el bilan. " ,  
    "Baraka — ko'pchilikda.",
    "Beshning boshi bo'lgancha, Oltining oyog'i bo'l.",
    "Bizniki — xaltada, Sizniki — o'rtada.",
    "Bilganingni eldan ayama.",
    "Bir kalla — kalla, Ikki kalla — tilla.",
    "Bir kishi ming kishi uchun, Ming kishi bir kishi uchun.",
    "Bir tovushni ko'p tovush yo'q qilar.",
    "Bir ko'zlilar eliga borsang, Bir ko'zingni qisib yur.",
    "Bir tupursa, ne bo'lar, El tupursa, ko'l bo'lar.",
    "Bir o'zing dono bo'lguncha, Ko'p bilan ahtnoq bo'l.",
    "Bir qarg'a bilan qish kelmas.",
    "Birlashmagan — to'zar.",
    "Birlik bor — tiriklik bor.",
    "Birlikda baraka bor.",
    "Birlikli uy — barakatli, G'ovg'ali uy — halokatli.",
    "Birliksiz kuch bo'lmas.",
    "Doshqozonda pishgan osh xom bo'lmas.",
    "Yettovdan birov — shayton.",
    "Yolg'iz botir yovga yo'q, Yolg'iz yigit dovga yo'q.",
    "Yolg'iz daraxt o'rmon bo'lmas.",
    "Yolg'iz yog'och pana bo'lmas. Yolg'iz biyaga sova to'lmas.",
    "Yolg'iz yog'och uy bo'lmas.",
    "Yolg'iz itning hurgani bilinmas, Yolg'iz kishining yurgani bilinmas.",
    "Yolg'iz yigit alp bo'lar, Alp bo'lsa ham, qalp bo'lar.",
    "Yolg'izning yoyi yo'qolsa, topilmas, Ko'pning o'qi yo'qolsa, topilar.",
    "Jiyan-tog'a el bo'lmas, Yakka tomchi sel bo'lmas.",
    "Ikki odam — bir odamning tangrisi.",
    "Ikki sirtlon bir sirtlonning sirtin yirtar.",
    "Ikkovga birov botolmas, Otliqqa yayov yetolmas.",
    "Indama ko'pga, Yiqitadi cho'pga.",
    "Inida yotganni el topar." ,
    "Yo'ldan chiqsang chiq, eldan chiqma.",
    "Yo'qotganingni ko'pdan so'ra.",
    "Mullaning qorni ochsa, nomozi tugar. ",
    "Mullasi ko'p elning to'qlisi haromga chiqar.",
    "Muttahamdan gap so'rasang, berasi ko'p, To'radan gap so'rasang, ertasi ko'p.",
    "Odamning buzug'i ham qozi, Buzg'unchisi ham.",
    "Odamning to'rasi xushmas,Otdan tushsa ham, egardan tushmas.",
    "Oy botsa ham, boy yotmas.",
    "Oy chiqsa ham, boyga chiqsin, Kun chiqsa ham, boyga chiqsin.",
    "Podsho zolim bo'lsa, yurt to'zar, Podsho odil bo'lsa, yurt o'zar.",
    "Podsho taxtidan toysa, Vaziri gado bo'lar.",
    "Podsho fuqaro bilan podsho." ,
    "Podshoning holi tang bo'lsa, Gadoni axtarar.",
    "Gadoning holi tang bo'lsa, Xudoni axtarar.",
    "Savodsiz mullaning sallasi katta.",
    "Sallaga boqma, kallaga boq.",
    "So'fi kavush o'g'irlar, Eski choponni o'g'ri qilar.",
    "So'fi so'g'on yer, Topilsa, yo'g'on yer.",
    "Taassub qilma boyga, Keting tegadi loyga.",
    "Tekin sharobni qozi ham ichar.",
    "Tuyaning dumi yerga tegar, Xo'janing qizi erga tegar.",
    "To'raga ishing tushsa, chaynamay yutar.",
    "To'g'ri gap eshon-u qoziga yoqmas.",
    "Bola bezori — kishi ozori.",
    "Bu dunyo o'tar-ketar, Yuzi qoralik qolar.",
    "Bug'doydan—bug'doy, Arpadan—arpa.",
    "Vijdonsiz kishidan o'pkalama.",
    "Gina — adovatning qo'shnisi.",
    "Gul tikanin zahri yomon, Qizmondaning qahri yomon.",
    "Gunohi — meniki, savobi — sizniki.",
    "Guruchning kurmagi bor, Yomonning to'qmog'i bor.",
    "Go'ringdan suv chiqmasin, Uyingdan — quv.",
    "Davlat bitsa yomonga, O'zin sanar xoqonga.",
    "Daryoga yaxshilik qilsang, Ajrini biyobondan topasan.",
    "Dili qora — till qora.",
    "Dili qoraning qilmishi — qiyiqlik.",
    "Dilozori — xudobezori.",
    "Dod qoldirma, ot qoldir.",
    "Dog' ostida dog' qolmas.",
    "Dunyo yorug' bo'lsin desang, Uyingga chiroq yoq.",
    "Dutorsiz baxshi bo'lmas, Yomonsiz — yaxshi.",
    "Dushmaningni asal bilan bo'g'.",
    "Dushmanni musht bilan urma, Osh bilan ur.",
    "Yer to'ydirar, o't kuydirar.",
    "Yer qattiq bo'lsa, ho'kiz ho'kizdan ko'rar.",
    "Yovdan yaxshilik chiqmas.",
    "Yovdan yaxshilik yuqmas.",
    "Yomon ayg'irda yol bo'lmas, O'larmonda hoi bo'lmas.",
    "Otni ham maydonda sina,Erni ham maydonda sina.",
    "Og'ir yukka nor kerak,Yov talashda er kerak.",
    "Og'ir yukni nor ko'tarar,El og'irin er ko'tarar.",
    "Piyozni mard artsin,Sabzini — nomard.",
    "Suv keltirar mard kishi,Ekin ekar har kishi.",
    "Suv keltirgan mard,Suv bermagan nomard.",
    "Suxan dur bo'lar,Aslning gapi bir bo'lar.",
    "Tangri berganning o'g'li to'rt bo'lar,Biri nomard bo'lsa, biri mard bo'lar.",
    "Tog' arqon bilan egilmas,Mard nomardga teng bo'lmas.",
    "Ur deganda nomard qochar,Mard qolar maydon ichida.",
    "Urishsang, mard bilan urish.",
    "Chigit bo'lsang ham, yigit bo'l.",
    "El tutganni er tutar.",
    "Er yigit el aybini ochmas.",
    "Er qayerda bo'lsa, sher panjasi o'sha yerda.",
    "Yuz nomarddan yuz qaytar,Bir mardni har kirn maqtar.",
    "Yaxshi it o'ligini ko'rsatmas.",
    "Yaxshilikka yaxshilik — Har kishining ishidir.",
    "Yomonlikka yaxshilik — Mard kishining ishidir.",
    "O'z aybini bilgan — mard.",
    "O'ldirsa ham, mard o'ldirsin.",
    "Qildan qiyiq axtarma.",
    "Qochganni quvlovchi bo'lma.",
    "Qo'lingni ber, mard bo'lsang,Qocha ber, nomard bo'lsang."
]

const questions = [
    {
        question: "Ko'zga ko'rinmas, qo'lga tutilmas?",
        answer: "havo",
    },
    {
        question: "Oyog'i yoq qochadi, Qanoti yo'q uchadi?",
        answer: "bulut",
    },
    {
        question: "Ko'msa ko'milmaydi?",
        answer: "soya",
    },
    {
        question: "O'tmas pichoq yer kovlar?",
        answer: "tomchi",
    },
    {
        question: "Ismi bor, jismi yo'q?",
        answer: "shamol",
    },
    {
        question: "Ikkita og'ayni bir-birini ko'rmaydi?",
        answer: "ko'z",
    },
    {
        question: "Temir qo'rg'on ichida, qizil toychoq o'yneydi?",
        answer: "til",
    },
    {
        question: "Soqoli bor, mo'ylovi yo'q?",
        answer: "echki",
    },
    {
        question: "Ovozi azonda, mazaligi qozonda?",
        answer: "xo'roz",
    },
    {
        question: "Kichkina mitti, echkini yiqitti?",
        answer: "pichoq",
    }
]



//Maqollar
taleBtn.addEventListener('click', ()=>{
    taleBtn.style.color = 'goldenrod';
    riddlesBtn.style.color = 'rgb(155, 151, 151)';
    riddlesContainer.style.transform = 'translateX(-920px)';
    taleContainer.style.transform = 'translateX(0px)';
    underLine.style.transform = 'translateX(0px)';
    underLine.style.width = '120px';
})

//Topishmoqlar
riddlesBtn.addEventListener('click', ()=>{
    riddlesBtn.style.color = 'goldenrod';
    taleBtn.style.color = 'rgb(155, 151, 151)';
    riddlesContainer.style.transform = 'translateX(0px)';
    taleContainer.style.transform = 'translateX(920px)';
    underLine.style.transform = 'translateX(150px)';
    underLine.style.width = '164px';
})

taleBtn.style.color = 'goldenrod';
sentence.innerHTML = arr[questionCounter];
counterShow.innerHTML = counter + 1;
counterDiv.innerHTML = `/${arr.length}`;
question.innerHTML = questions[questionCounter].question;
qCounter.innerHTML = questionCounter + 1;
qCounterDiv.innerHTML = `/${questions.length}`;



rightBtn.addEventListener('click', ()=>{
    if(counter === arr.length - 1){
        rightBtn.disabled = true;
        createNotification("Siz Hamma Maqollarni o'qib bo'ldingiz :)");
    }else if(counter < arr.length - 1){
        counter++;
        sentence.innerHTML = arr[counter];
        count();
    }
})


leftBtn.addEventListener('click', ()=>{
    if(counter === 0){
        leftBtn.disabled = true;
    }else if(counter > 0){
        counter--;
        sentence.innerHTML = arr[counter];
        count();
    }
    
})

const count = () =>{
    counterShow.innerHTML = counter + 1;
}


// Topishmoqlar 

const questionCount = () =>{
    if(questionCounter < questions.length){
        qCounter.innerHTML = questionCounter + 1;
        qCounterDiv.innerHTML = `/${questions.length}`;
    }else if(questionCounter == questions.length){
        questionCounter = 0;
        qCounter.innerHTML = questionCounter + 1;
        qCounterDiv.innerHTML = `/${questions.length}`;
    } 
    
}

const checkAnswer = (userAnswer) =>{
    if(userAnswer !== ''){
        if(userAnswer === questions[questionCounter].answer){
            createNotification("Javobingiz to'g'ri :)")
            questionCounter++;
            questionCount();
            question.innerHTML = questions[questionCounter].question;     
        }else if(userAnswer.charAt(0) == questions[questionCounter].answer.charAt(0) && userAnswer.slice(-1) == questions[questionCounter].answer.slice(-1)){
            if(userAnswer.length == questions[questionCounter].answer.length){
                createNotification("Javobingizda Imlo hato bor, Tekshirib qaytadan yozing :)")
            }else createNotification("Javobingiz noto'g'ri :)");
            
        } else createNotification("Javobingiz noto'g'ri :)");
    }else  createNotification("Iltimos Javobingizni Yozing :)");
    
}
function createNotification(notificationLetter){
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = notificationLetter;

    container.appendChild(notif);

    setTimeout(()=>{
        notif.remove();
    }, 3000)
}
submitBtn.addEventListener('click', ()=>{
    let userAnswer = input.value;
    myForm.reset();
    checkAnswer(userAnswer.toLowerCase());
    
})
















