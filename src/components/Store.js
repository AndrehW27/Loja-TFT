import { useState, useEffect } from 'react';
import '../styles/store.css';

import imgInicial from '../assets/tft.jpg';
// import imgInicial from '../assets/dado.jpg';

import set4Sound from '../assets/set4.mp3';
import paperSound from '../assets/paper.mp3';
import herewego from '../assets/herewego.mp3';
import legendsSound from '../assets/legends.mp3';
import paperSound2 from '../assets/paper2.mp3';
import moneySound from '../assets/money.mp3';
import padlockSound from '../assets/padlock.mp3';
import clickSound from '../assets/click-sound.mp3';
import letsgo from '../assets/letsGo.mp3';

// import champs from '../champs.json';
import champsTier1Arr from '../champsTier1.json';
import champsTier2Arr from '../champsTier2.json';
import champsTier3Arr from '../champsTier3.json';
import champsTier4Arr from '../champsTier4.json';
import champsTier5Arr from '../champsTier5.json';

export default function Store() {

    const [sorteio1, setSorteio1] = useState("");
    const [sorteio2, setSorteio2] = useState("");
    const [sorteio3, setSorteio3] = useState("");
    const [sorteio4, setSorteio4] = useState("");
    const [sorteio5, setSorteio5] = useState("");
    const [champ1, setchamp1] = useState("");
    const [champ2, setchamp2] = useState("");
    const [champ3, setchamp3] = useState("");
    const [champ4, setchamp4] = useState("");
    const [champ5, setchamp5] = useState("");

    const [gold, setGold] = useState(50);
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [maxExp, setMaxExp] = useState(2);
    const [lockedIsOpen, setLockedIsOpen] = useState(true);


    const [oddsOneStar, setOddsOneStar] = useState(100);
    const [oddsTwoStar, setOddsTwoStar] = useState(0);
    const [oddsThreeStar, setOddsThreeStar] = useState(0);
    const [oddsFourStar, setOddsFourStar] = useState(0);
    const [oddsFiveStar, setOddsFiveStar] = useState(0);

    const [championNome1, setChampionNome1] = useState("Welcome");
    const [origem1, setOrigem1] = useState("");
    const [classe1, setClasse1] = useState("");
    const [champImg1, setChampImg1] = useState(imgInicial);
    const [starNumber1, setStarNumber1] = useState();
    const [cor1, setCor1] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder1, setCorBorder1] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome2, setChampionNome2] = useState("Welcome");
    const [origem2, setOrigem2] = useState("");
    const [classe2, setClasse2] = useState("");
    const [champImg2, setChampImg2] = useState(imgInicial);
    const [starNumber2, setStarNumber2] = useState();
    const [cor2, setCor2] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder2, setCorBorder2] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome3, setChampionNome3] = useState("Welcome");
    const [origem3, setOrigem3] = useState("");
    const [classe3, setClasse3] = useState("");
    const [champImg3, setChampImg3] = useState(imgInicial);
    const [starNumber3, setStarNumber3] = useState();
    const [cor3, setCor3] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder3, setCorBorder3] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome4, setChampionNome4] = useState("Welcome");
    const [origem4, setOrigem4] = useState("");
    const [classe4, setClasse4] = useState("");
    const [champImg4, setChampImg4] = useState(imgInicial);
    const [starNumber4, setStarNumber4] = useState();
    const [cor4, setCor4] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder4, setCorBorder4] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome5, setChampionNome5] = useState("Welcome");
    const [origem5, setOrigem5] = useState("");
    const [classe5, setClasse5] = useState("");
    const [champImg5, setChampImg5] = useState(imgInicial);
    const [starNumber5, setStarNumber5] = useState();
    const [cor5, setCor5] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder5, setCorBorder5] = useState("rgba(21, 54, 54, 0.836)");

    // const legendsPause = () => {
    //     new Audio(legendsSound).pause();
    // }
    const set4 = () => {
        new Audio(set4Sound).play();
    }
    const legends = () => {
        new Audio(legendsSound).play();
    }
    const letsGo = () => {
        new Audio(letsgo).play();
    }
    const hereWeGo = () => {
        new Audio(herewego).play();
    }
    const startClick = () => {
        new Audio(clickSound).play();
    }
    const startMoney = () => {
        new Audio(moneySound).play();
    }
    const startPadlock = () => {
        new Audio(padlockSound).play();
    }
    const startPaper = () => {
        new Audio(paperSound).play();
    }
    const startPaper2 = () => {
        new Audio(paperSound2).play();
    }

    // START
    const start = () => {
        let sorteioOdds1 = Math.floor(Math.random() * (100 - 1)) + 1
        setSorteio1(sorteioOdds1);
        let sorteioOdds2 = Math.floor(Math.random() * (100 - 1)) + 1
        setSorteio2(sorteioOdds2);
        let sorteioOdds3 = Math.floor(Math.random() * (100 - 1)) + 1
        setSorteio3(sorteioOdds3);
        let sorteioOdds4 = Math.floor(Math.random() * (100 - 1)) + 1
        setSorteio4(sorteioOdds4);
        let sorteioOdds5 = Math.floor(Math.random() * (100 - 1)) + 1
        setSorteio5(sorteioOdds5);

        document.getElementById("iconInicial1").style.display = "flex";
        document.getElementById("iconInicial2").style.display = "flex";
        document.getElementById("iconInicial3").style.display = "flex";
        document.getElementById("iconInicial4").style.display = "flex";
        document.getElementById("iconInicial5").style.display = "flex";

        document.getElementById("startId").classList.add("botaoDestivadoStart");

        if (championNome1 === "Welcome") {


            let randomBox1 = Math.floor(Math.random() * (13 - 1)) + 1
            setchamp1(randomBox1);
            let novoChampBox1 = champsTier1Arr[randomBox1].nome;
            let novoImg1 = champsTier1Arr[randomBox1].imagem;
            let novoStar1 = champsTier1Arr[randomBox1].star;
            let novoCor1 = champsTier1Arr[randomBox1].cor;
            let novoCorBorder1 = champsTier1Arr[randomBox1].corBorda;
            let novoOrigem1 = champsTier1Arr[randomBox1].origem;
            let novoClasse1 = champsTier1Arr[randomBox1].classe;
            setOrigem1(novoOrigem1);
            setClasse1(novoClasse1);
            setCorBorder1(novoCorBorder1);
            setCor1(novoCor1);
            setChampImg1(novoImg1);
            setChampionNome1(novoChampBox1);
            setStarNumber1(novoStar1);

            let randomBox2 = Math.floor(Math.random() * (13 - 1)) + 1
            setchamp2(randomBox2);
            let novoChampBox2 = champsTier1Arr[randomBox2].nome;
            let novoImg2 = champsTier1Arr[randomBox2].imagem;
            let novoStar2 = champsTier1Arr[randomBox2].star;
            let novoCor2 = champsTier1Arr[randomBox2].cor;
            let novoCorBorder2 = champsTier1Arr[randomBox2].corBorda;
            let novoOrigem2 = champsTier1Arr[randomBox2].origem;
            let novoClasse2 = champsTier1Arr[randomBox2].classe;
            setOrigem2(novoOrigem2);
            setClasse2(novoClasse2);
            setCorBorder2(novoCorBorder2);
            setCor2(novoCor2);
            setChampImg2(novoImg2);
            setChampionNome2(novoChampBox2);
            setStarNumber2(novoStar2);

            let randomBox3 = Math.floor(Math.random() * (13 - 1)) + 1
            setchamp3(randomBox3);
            let novoChampBox3 = champsTier1Arr[randomBox3].nome;
            let novoImg3 = champsTier1Arr[randomBox3].imagem;
            let novoStar3 = champsTier1Arr[randomBox3].star;
            let novoCor3 = champsTier1Arr[randomBox3].cor;
            let novoCorBorder3 = champsTier1Arr[randomBox3].corBorda;
            let novoOrigem3 = champsTier1Arr[randomBox3].origem;
            let novoClasse3 = champsTier1Arr[randomBox3].classe;
            setOrigem3(novoOrigem3);
            setClasse3(novoClasse3);
            setCorBorder3(novoCorBorder3);
            setCor3(novoCor3);
            setChampImg3(novoImg3);
            setChampionNome3(novoChampBox3);
            setStarNumber3(novoStar3);

            let randomBox4 = Math.floor(Math.random() * (13 - 1)) + 1
            setchamp4(randomBox4);
            let novoChampBox4 = champsTier1Arr[randomBox4].nome;
            let novoImg4 = champsTier1Arr[randomBox4].imagem;
            let novoStar4 = champsTier1Arr[randomBox4].star;
            let novoCor4 = champsTier1Arr[randomBox4].cor;
            let novoCorBorder4 = champsTier1Arr[randomBox4].corBorda;
            let novoOrigem4 = champsTier1Arr[randomBox4].origem;
            let novoClasse4 = champsTier1Arr[randomBox4].classe;
            setOrigem4(novoOrigem4);
            setClasse4(novoClasse4);
            setCorBorder4(novoCorBorder4);
            setCor4(novoCor4);
            setChampImg4(novoImg4);
            setChampionNome4(novoChampBox4);
            setStarNumber4(novoStar4);

            let randomBox5 = Math.floor(Math.random() * (13 - 1)) + 1
            setchamp5(randomBox5);
            let novoChampBox5 = champsTier1Arr[randomBox5].nome;
            let novoImg5 = champsTier1Arr[randomBox5].imagem;
            let novoStar5 = champsTier1Arr[randomBox5].star;
            let novoCor5 = champsTier1Arr[randomBox5].cor;
            let novoCorBorder5 = champsTier1Arr[randomBox5].corBorda;
            let novoOrigem5 = champsTier1Arr[randomBox5].origem;
            let novoClasse5 = champsTier1Arr[randomBox5].classe;
            setOrigem5(novoOrigem5);
            setClasse5(novoClasse5);
            setCorBorder5(novoCorBorder5);
            setCor5(novoCor5);
            setChampImg5(novoImg5);
            setChampionNome5(novoChampBox5);
            setStarNumber5(novoStar5);

        }
    }
    // RESTART
    const reloadPage = () => {
        // document.location.reload(true);        
        // window.location.reload(true);

        window.location.href = window.location.href;
    }
    // Cadeado
    const cadeado = () => {
        if (lockedIsOpen === true) {
            setLockedIsOpen(false);
        }
        else {
            setLockedIsOpen(true);
        }

        document.getElementById("cadeadoFechadoId").classList.toggle("trancarCadeado");

        document.getElementById("box1").classList.toggle("botaoDestivado");
        document.getElementById("box2").classList.toggle("botaoDestivado");
        document.getElementById("box3").classList.toggle("botaoDestivado");
        document.getElementById("box4").classList.toggle("botaoDestivado");
        document.getElementById("box5").classList.toggle("botaoDestivado");

        document.getElementById("refreshId").classList.toggle("botaoDestivado");


    }

    //COMPRANDO CHAMP
    const BuyChamp1 = () => {
        if (championNome1 != "Welcome" && gold >= starNumber1 && lockedIsOpen === true) {
            setGold(gold - starNumber1)
            document.getElementById("box1").classList.add("none");
        }
    }
    const BuyChamp2 = () => {
        if (championNome1 != "Welcome" && gold >= starNumber2 && lockedIsOpen === true) {
            setGold(gold - starNumber2)
            document.getElementById("box2").classList.add("none");
        }
    }
    const BuyChamp3 = () => {
        if (championNome1 != "Welcome" && gold >= starNumber3 && lockedIsOpen === true) {
            setGold(gold - starNumber3)
            document.getElementById("box3").classList.add("none");
        }
    }
    const BuyChamp4 = () => {
        if (championNome1 != "Welcome" && gold >= starNumber4 && lockedIsOpen === true) {
            setGold(gold - starNumber4)
            document.getElementById("box4").classList.add("none");
        }
    }
    const BuyChamp5 = () => {
        if (championNome1 != "Welcome" && gold >= starNumber5 && lockedIsOpen === true) {
            setGold(gold - starNumber5)
            document.getElementById("box5").classList.add("none");
        }
    }

    // ALTERANDO O GOLD
    const plusFiveGold = () => {
        if (championNome1 != "Welcome") {
            if (gold < 96) {
                setGold(gold + 5)
            }
        }
    }
    const minusFiveGold = () => {
        if (championNome1 != "Welcome") {
            if (gold > 4) {
                setGold(gold - 5)
            }
        }
    }
    const maximo = () => {
        if (championNome1 != "Welcome") {
            setGold(100)
        }
    }
    const minimo = () => {
        if (championNome1 != "Welcome") {
            setGold(0)
        }
    }
    const resetGold = () => {
        if (championNome1 != "Welcome") {
            setGold(50)
        }
    }

    // ALTERANDO O LEVEL
    const levelUp = () => {
        if (championNome1 != "Welcome") {
            if (level < 9) {
                setLevel(level + 1);
                if (level === 2) {
                    setMaxExp(6)
                } else if (level === 3) {
                    setMaxExp(10)
                } else if (level === 4) {
                    setMaxExp(20)
                } else if (level === 5) {
                    setMaxExp(36)
                } else if (level === 6) {
                    setMaxExp(56)
                } else if (level === 7) {
                    setMaxExp(80)
                } else if (level === 8) {
                    setMaxExp(80)
                }
            }
        }
    }
    const levelDown = () => {
        if (championNome1 != "Welcome") {
            if (currentExp >= maxExp) {
                setCurrentExp(0)
            }
            if (level > 1) {

                setLevel(level - 1)

                if (level === 2) {
                    setMaxExp(2)
                } else if (level === 3) {
                    setMaxExp(2)
                } else if (level === 4) {
                    setMaxExp(6)
                } else if (level === 5) {
                    setMaxExp(10)
                } else if (level === 6) {
                    setMaxExp(20)
                } else if (level === 7) {
                    setMaxExp(36)
                } else if (level === 8) {
                    setMaxExp(56)
                } else if (level === 9) {
                    setMaxExp(80)
                }
            }
        }
    }
    const resetLevel = () => {
        if (championNome1 != "Welcome") {
            setLevel(1);
            setCurrentExp(0);
            setMaxExp(2);
            document.getElementById("maisUmXpId").classList.remove("botaoDestivado");
        }
    }

    // COMPRANDO XP
    const buyXP = () => {
        if (championNome1 != "Welcome" && level < 9) {
            if (gold > 3) {
                setGold(gold - 4)
                setCurrentExp(currentExp + 4);
            }
        }
    }

    // MONITORARANDO XP ATUAL
    useEffect(() => {
        if (currentExp >= maxExp) {
            setLevel(level + 1)
        }
    }, [currentExp])

    // MONITORARANDO LEVEL
    useEffect(() => {

        if (currentExp >= maxExp) {
            setCurrentExp(currentExp - maxExp);
            setCurrentExp(0)
        }

        if (level === 1) {
            setOddsOneStar(100);
            setOddsTwoStar(0);
            setOddsThreeStar(0);
            setOddsFourStar(0);
            setOddsFiveStar(0);

            document.getElementById("menosUmXpId").classList.add("botaoDestivado");

        } else if (level === 2) {
            setOddsOneStar(100);
            setOddsTwoStar(0);
            setOddsThreeStar(0);
            setOddsFourStar(0);
            setOddsFiveStar(0);

            document.getElementById("menosUmXpId").classList.remove("botaoDestivado");

        } else if (level === 3) {
            setOddsOneStar(75);
            setOddsTwoStar(25);
            setOddsThreeStar(0);
            setOddsFourStar(0);
            setOddsFiveStar(0);
            setMaxExp(6)
        } else if (level === 4) {
            setOddsOneStar(55);
            setOddsTwoStar(30);
            setOddsThreeStar(15);
            setOddsFourStar(0);
            setOddsFiveStar(0);
            setMaxExp(10)
        } else if (level === 5) {
            setOddsOneStar(45);
            setOddsTwoStar(33);
            setOddsThreeStar(20);
            setOddsFourStar(2);
            setOddsFiveStar(0);
            setMaxExp(20)
        } else if (level === 6) {
            setOddsOneStar(35);
            setOddsTwoStar(35);
            setOddsThreeStar(25);
            setOddsFourStar(5);
            setOddsFiveStar(0);
            setMaxExp(36)
        } else if (level === 7) {
            setOddsOneStar(19);
            setOddsTwoStar(35);
            setOddsThreeStar(30);
            setOddsFourStar(15);
            setOddsFiveStar(1);
            setMaxExp(56)
        } else if (level === 8) {
            setOddsOneStar(15);
            setOddsTwoStar(20);
            setOddsThreeStar(35);
            setOddsFourStar(25);
            setOddsFiveStar(5);
            setMaxExp(80)
            document.getElementById("maisUmXpId").classList.remove("botaoDestivado");
        } else if (level >= 9) {
            setOddsOneStar(10);
            setOddsTwoStar(15);
            setOddsThreeStar(30);
            setOddsFourStar(30);
            setOddsFiveStar(15);

            setLevel(9);
            setMaxExp(0)
            setCurrentExp(0)
            document.getElementById("maisUmXpId").classList.add("botaoDestivado");
        }

    }, [level])

    // MONITORANDO GOLD
    useEffect(() => {
        if (gold <= 4) {
            document.getElementById("minusFiveId").classList.add("botaoDestivado");
            // document.getElementById("minusFiveId").setAttribute("disabled", true);

            if (gold <= 3) {
                document.getElementById("buyXpId").classList.add("botaoDestivado");
                document.getElementById("buyXpId").setAttribute("disabled", true);
            }
            if (gold <= 1) {
                document.getElementById("refreshId").classList.add("botaoDestivado");
                document.getElementById("refreshId").setAttribute("disabled", true);
            }
            if (gold === 0) {
                document.getElementById("minimoId").classList.add("botaoDestivado");
                document.getElementById("maxId").classList.remove("botaoDestivado");
                document.getElementById("plusFiveId").classList.remove("botaoDestivado");
                // document.getElementById("minusFiveId").setAttribute("disabled", true);
            }
        }

        else if (gold === 100) {
            document.getElementById("plusFiveId").classList.add("botaoDestivado");
            document.getElementById("maxId").classList.add("botaoDestivado");
            document.getElementById("minimoId").classList.remove("botaoDestivado");
            document.getElementById("minusFiveId").classList.remove("botaoDestivado");
            document.getElementById("buyXpId").classList.remove("botaoDestivado");
            document.getElementById("refreshId").classList.remove("botaoDestivado");
            document.getElementById("buyXpId").removeAttribute("disabled");
            document.getElementById("refreshId").removeAttribute("disabled");
        } else {
            document.getElementById("buyXpId").classList.remove("botaoDestivado");
            document.getElementById("refreshId").classList.remove("botaoDestivado");
            document.getElementById("maxId").classList.remove("botaoDestivado");
            document.getElementById("plusFiveId").classList.remove("botaoDestivado");
            document.getElementById("minusFiveId").classList.remove("botaoDestivado");
            document.getElementById("minimoId").classList.remove("botaoDestivado");

            document.getElementById("buyXpId").removeAttribute("disabled");
            document.getElementById("refreshId").removeAttribute("disabled");
        }



        // if (gold < starNumber1) {
        //     document.getElementById("box1").classList.add("botaoDestivadoChamp");
        // }
        // if (gold < starNumber2) {
        //     document.getElementById("box2").classList.add("botaoDestivadoChamp");
        // }
        // if (gold < starNumber3) {
        //     document.getElementById("box3").classList.add("botaoDestivadoChamp");
        // }
        // if (gold < starNumber4) {
        //     document.getElementById("box4").classList.add("botaoDestivadoChamp");
        // }
        // if (gold < starNumber5) {
        //     document.getElementById("box5").classList.add("botaoDestivadoChamp");
        // }

        // else{
        //     document.getElementById("box1").classList.remove("botaoDestivadoChamp");
        //     document.getElementById("box2").classList.remove("botaoDestivadoChamp");
        //     document.getElementById("box3").classList.remove("botaoDestivadoChamp");
        //     document.getElementById("box4").classList.remove("botaoDestivadoChamp");
        //     document.getElementById("box5").classList.remove("botaoDestivadoChamp");
        // }

    }, [gold])

    // ATUALIZAR LOJA
    const refreshStore = () => {

        if (championNome1 != "Welcome" && lockedIsOpen === true) {
            if (gold > 1) {
                setGold(gold - 2)
            }
            let sorteioOdds1 = Math.floor(Math.random() * (100 - 1)) + 1
            setSorteio1(sorteioOdds1);
            let sorteioOdds2 = Math.floor(Math.random() * (100 - 1)) + 1
            setSorteio2(sorteioOdds2);
            let sorteioOdds3 = Math.floor(Math.random() * (100 - 1)) + 1
            setSorteio3(sorteioOdds3);
            let sorteioOdds4 = Math.floor(Math.random() * (100 - 1)) + 1
            setSorteio4(sorteioOdds4);
            let sorteioOdds5 = Math.floor(Math.random() * (100 - 1)) + 1
            setSorteio5(sorteioOdds5);

            document.getElementById("box1").classList.remove("none");
            document.getElementById("box2").classList.remove("none");
            document.getElementById("box3").classList.remove("none");
            document.getElementById("box4").classList.remove("none");
            document.getElementById("box5").classList.remove("none");

            // document.getElementById("refreshId").setAttribute("disabled", true);
            // document.getElementById("refreshId").classList.toggle("teste");  
            document.getElementById("iconInicial1").style.display = "flex";
            document.getElementById("iconInicial2").style.display = "flex";
            document.getElementById("iconInicial3").style.display = "flex";
            document.getElementById("iconInicial4").style.display = "flex";
            document.getElementById("iconInicial5").style.display = "flex";

            // LEVEL 1 E 2
            if ((level === 1 || level === 2) && gold > 1) {
                let randomBox1 = Math.floor(Math.random() * (13 - 1)) + 1
                setchamp1(randomBox1);

                let novoChampBox1 = champsTier1Arr[randomBox1].nome;
                let novoImg1 = champsTier1Arr[randomBox1].imagem;
                let novoStar1 = champsTier1Arr[randomBox1].star;
                let novoCor1 = champsTier1Arr[randomBox1].cor;
                let novoCorBorder1 = champsTier1Arr[randomBox1].corBorda;
                let novoOrigem1 = champsTier1Arr[randomBox1].origem;
                let novoClasse1 = champsTier1Arr[randomBox1].classe;
                setOrigem1(novoOrigem1);
                setClasse1(novoClasse1);
                setCorBorder1(novoCorBorder1);
                setCor1(novoCor1);
                setChampImg1(novoImg1);
                setChampionNome1(novoChampBox1);
                setStarNumber1(novoStar1);

                let randomBox2 = Math.floor(Math.random() * (13 - 1)) + 1
                setchamp2(randomBox2);
                let novoChampBox2 = champsTier1Arr[randomBox2].nome;
                let novoImg2 = champsTier1Arr[randomBox2].imagem;
                let novoStar2 = champsTier1Arr[randomBox2].star;
                let novoCor2 = champsTier1Arr[randomBox2].cor;
                let novoCorBorder2 = champsTier1Arr[randomBox2].corBorda;
                let novoOrigem2 = champsTier1Arr[randomBox2].origem;
                let novoClasse2 = champsTier1Arr[randomBox2].classe;
                setOrigem2(novoOrigem2);
                setClasse2(novoClasse2);
                setCorBorder2(novoCorBorder2);
                setCor2(novoCor2);
                setChampImg2(novoImg2);
                setChampionNome2(novoChampBox2);
                setStarNumber2(novoStar2);

                let randomBox3 = Math.floor(Math.random() * (13 - 1)) + 1
                setchamp3(randomBox3);
                let novoChampBox3 = champsTier1Arr[randomBox3].nome;
                let novoImg3 = champsTier1Arr[randomBox3].imagem;
                let novoStar3 = champsTier1Arr[randomBox3].star;
                let novoCor3 = champsTier1Arr[randomBox3].cor;
                let novoCorBorder3 = champsTier1Arr[randomBox3].corBorda;
                let novoOrigem3 = champsTier1Arr[randomBox3].origem;
                let novoClasse3 = champsTier1Arr[randomBox3].classe;
                setOrigem3(novoOrigem3);
                setClasse3(novoClasse3);
                setCorBorder3(novoCorBorder3);
                setCor3(novoCor3);
                setChampImg3(novoImg3);
                setChampionNome3(novoChampBox3);
                setStarNumber3(novoStar3);

                let randomBox4 = Math.floor(Math.random() * (13 - 1)) + 1
                setchamp4(randomBox4);
                let novoChampBox4 = champsTier1Arr[randomBox4].nome;
                let novoImg4 = champsTier1Arr[randomBox4].imagem;
                let novoStar4 = champsTier1Arr[randomBox4].star;
                let novoCor4 = champsTier1Arr[randomBox4].cor;
                let novoCorBorder4 = champsTier1Arr[randomBox4].corBorda;
                let novoOrigem4 = champsTier1Arr[randomBox4].origem;
                let novoClasse4 = champsTier1Arr[randomBox4].classe;
                setOrigem4(novoOrigem4);
                setClasse4(novoClasse4);
                setCorBorder4(novoCorBorder4);
                setCor4(novoCor4);
                setChampImg4(novoImg4);
                setChampionNome4(novoChampBox4);
                setStarNumber4(novoStar4);

                let randomBox5 = Math.floor(Math.random() * (13 - 1)) + 1
                setchamp5(randomBox5);
                let novoChampBox5 = champsTier1Arr[randomBox5].nome;
                let novoImg5 = champsTier1Arr[randomBox5].imagem;
                let novoStar5 = champsTier1Arr[randomBox5].star;
                let novoCor5 = champsTier1Arr[randomBox5].cor;
                let novoCorBorder5 = champsTier1Arr[randomBox5].corBorda;
                let novoOrigem5 = champsTier1Arr[randomBox5].origem;
                let novoClasse5 = champsTier1Arr[randomBox5].classe;
                setOrigem5(novoOrigem5);
                setClasse5(novoClasse5);
                setCorBorder5(novoCorBorder5);
                setCor5(novoCor5);
                setChampImg5(novoImg5);
                setChampionNome5(novoChampBox5);
                setStarNumber5(novoStar5);

            }

            // LEVEL 3
            else if (level === 3 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 75) {
                    let champ1Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(champ1Lvl3);

                    let novoChampBox1 = champsTier1Arr[champ1Lvl3].nome;
                    let novoImg1 = champsTier1Arr[champ1Lvl3].imagem;
                    let novoStar1 = champsTier1Arr[champ1Lvl3].star;
                    let novoCor1 = champsTier1Arr[champ1Lvl3].cor;
                    let novoCorBorder1 = champsTier1Arr[champ1Lvl3].corBorda;
                    let novoOrigem1 = champsTier1Arr[champ1Lvl3].origem;
                    let novoClasse1 = champsTier1Arr[champ1Lvl3].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else {
                    let champ2Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(champ2Lvl3);

                    let novoChampBox1 = champsTier2Arr[champ2Lvl3].nome;
                    let novoImg1 = champsTier2Arr[champ2Lvl3].imagem;
                    let novoStar1 = champsTier2Arr[champ2Lvl3].star;
                    let novoCor1 = champsTier2Arr[champ2Lvl3].cor;
                    let novoCorBorder1 = champsTier2Arr[champ2Lvl3].corBorda;
                    let novoOrigem1 = champsTier2Arr[champ2Lvl3].origem;
                    let novoClasse1 = champsTier2Arr[champ2Lvl3].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 75) {
                    let champ1Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(champ1Lvl3);

                    let novoChampBox2 = champsTier1Arr[champ1Lvl3].nome;
                    let novoImg2 = champsTier1Arr[champ1Lvl3].imagem;
                    let novoStar2 = champsTier1Arr[champ1Lvl3].star;
                    let novoCor2 = champsTier1Arr[champ1Lvl3].cor;
                    let novoCorBorder2 = champsTier1Arr[champ1Lvl3].corBorda;
                    let novoOrigem2 = champsTier1Arr[champ1Lvl3].origem;
                    let novoClasse2 = champsTier1Arr[champ1Lvl3].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else {
                    let champ2Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(champ2Lvl3);

                    let novoChampBox2 = champsTier2Arr[champ2Lvl3].nome;
                    let novoImg2 = champsTier2Arr[champ2Lvl3].imagem;
                    let novoStar2 = champsTier2Arr[champ2Lvl3].star;
                    let novoCor2 = champsTier2Arr[champ2Lvl3].cor;
                    let novoCorBorder2 = champsTier2Arr[champ2Lvl3].corBorda;
                    let novoOrigem2 = champsTier2Arr[champ2Lvl3].origem;
                    let novoClasse2 = champsTier2Arr[champ2Lvl3].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 75) {
                    let champ1Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(champ1Lvl3);

                    let novoChampBox3 = champsTier1Arr[champ1Lvl3].nome;
                    let novoImg3 = champsTier1Arr[champ1Lvl3].imagem;
                    let novoStar3 = champsTier1Arr[champ1Lvl3].star;
                    let novoCor3 = champsTier1Arr[champ1Lvl3].cor;
                    let novoCorBorder3 = champsTier1Arr[champ1Lvl3].corBorda;
                    let novoOrigem3 = champsTier1Arr[champ1Lvl3].origem;
                    let novoClasse3 = champsTier1Arr[champ1Lvl3].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else {
                    let champ2Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(champ2Lvl3);

                    let novoChampBox3 = champsTier2Arr[champ2Lvl3].nome;
                    let novoImg3 = champsTier2Arr[champ2Lvl3].imagem;
                    let novoStar3 = champsTier2Arr[champ2Lvl3].star;
                    let novoCor3 = champsTier2Arr[champ2Lvl3].cor;
                    let novoCorBorder3 = champsTier2Arr[champ2Lvl3].corBorda;
                    let novoOrigem3 = champsTier2Arr[champ2Lvl3].origem;
                    let novoClasse3 = champsTier2Arr[champ2Lvl3].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 75) {
                    let champ1Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(champ1Lvl3);

                    let novoChampBox4 = champsTier1Arr[champ1Lvl3].nome;
                    let novoImg4 = champsTier1Arr[champ1Lvl3].imagem;
                    let novoStar4 = champsTier1Arr[champ1Lvl3].star;
                    let novoCor4 = champsTier1Arr[champ1Lvl3].cor;
                    let novoCorBorder4 = champsTier1Arr[champ1Lvl3].corBorda;
                    let novoOrigem4 = champsTier1Arr[champ1Lvl3].origem;
                    let novoClasse4 = champsTier1Arr[champ1Lvl3].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else {
                    let champ2Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(champ2Lvl3);

                    let novoChampBox4 = champsTier2Arr[champ2Lvl3].nome;
                    let novoImg4 = champsTier2Arr[champ2Lvl3].imagem;
                    let novoStar4 = champsTier2Arr[champ2Lvl3].star;
                    let novoCor4 = champsTier2Arr[champ2Lvl3].cor;
                    let novoCorBorder4 = champsTier2Arr[champ2Lvl3].corBorda;
                    let novoOrigem4 = champsTier2Arr[champ2Lvl3].origem;
                    let novoClasse4 = champsTier2Arr[champ2Lvl3].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);


                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 75) {
                    let champ1Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(champ1Lvl3);

                    let novoChampBox5 = champsTier1Arr[champ1Lvl3].nome;
                    let novoImg5 = champsTier1Arr[champ1Lvl3].imagem;
                    let novoStar5 = champsTier1Arr[champ1Lvl3].star;
                    let novoCor5 = champsTier1Arr[champ1Lvl3].cor;
                    let novoCorBorder5 = champsTier1Arr[champ1Lvl3].corBorda;
                    let novoOrigem5 = champsTier1Arr[champ1Lvl3].origem;
                    let novoClasse5 = champsTier1Arr[champ1Lvl3].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else {
                    let champ2Lvl3 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(champ2Lvl3);

                    let novoChampBox5 = champsTier2Arr[champ2Lvl3].nome;
                    let novoImg5 = champsTier2Arr[champ2Lvl3].imagem;
                    let novoStar5 = champsTier2Arr[champ2Lvl3].star;
                    let novoCor5 = champsTier2Arr[champ2Lvl3].cor;
                    let novoCorBorder5 = champsTier2Arr[champ2Lvl3].corBorda;
                    let novoOrigem5 = champsTier2Arr[champ2Lvl3].origem;
                    let novoClasse5 = champsTier2Arr[champ2Lvl3].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }

            }

            // LEVEL 4
            else if (level === 4 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 55) {
                    let champ1Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(champ1Lvl4);

                    let novoChampBox1 = champsTier1Arr[champ1Lvl4].nome;
                    let novoImg1 = champsTier1Arr[champ1Lvl4].imagem;
                    let novoStar1 = champsTier1Arr[champ1Lvl4].star;
                    let novoCor1 = champsTier1Arr[champ1Lvl4].cor;
                    let novoCorBorder1 = champsTier1Arr[champ1Lvl4].corBorda;
                    let novoOrigem1 = champsTier1Arr[champ1Lvl4].origem;
                    let novoClasse1 = champsTier1Arr[champ1Lvl4].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 56 && sorteioOdds1 <= 85) {
                    let champ2Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(champ2Lvl4);

                    let novoChampBox1 = champsTier2Arr[champ2Lvl4].nome;
                    let novoImg1 = champsTier2Arr[champ2Lvl4].imagem;
                    let novoStar1 = champsTier2Arr[champ2Lvl4].star;
                    let novoCor1 = champsTier2Arr[champ2Lvl4].cor;
                    let novoCorBorder1 = champsTier2Arr[champ2Lvl4].corBorda;
                    let novoOrigem1 = champsTier2Arr[champ2Lvl4].origem;
                    let novoClasse1 = champsTier2Arr[champ2Lvl4].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else {
                    let champ3Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(champ3Lvl4);

                    let novoChampBox1 = champsTier3Arr[champ3Lvl4].nome;
                    let novoImg1 = champsTier3Arr[champ3Lvl4].imagem;
                    let novoStar1 = champsTier3Arr[champ3Lvl4].star;
                    let novoCor1 = champsTier3Arr[champ3Lvl4].cor;
                    let novoCorBorder1 = champsTier3Arr[champ3Lvl4].corBorda;
                    let novoOrigem1 = champsTier3Arr[champ3Lvl4].origem;
                    let novoClasse1 = champsTier3Arr[champ3Lvl4].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 55) {
                    let champ2Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(champ2Lvl4);

                    let novoChampBox2 = champsTier1Arr[champ2Lvl4].nome;
                    let novoImg2 = champsTier1Arr[champ2Lvl4].imagem;
                    let novoStar2 = champsTier1Arr[champ2Lvl4].star;
                    let novoCor2 = champsTier1Arr[champ2Lvl4].cor;
                    let novoCorBorder2 = champsTier1Arr[champ2Lvl4].corBorda;
                    let novoOrigem2 = champsTier1Arr[champ2Lvl4].origem;
                    let novoClasse2 = champsTier1Arr[champ2Lvl4].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else if (sorteioOdds2 >= 56 && sorteioOdds2 <= 85) {
                    let champ2Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(champ2Lvl4);

                    let novoChampBox2 = champsTier2Arr[champ2Lvl4].nome;
                    let novoImg2 = champsTier2Arr[champ2Lvl4].imagem;
                    let novoStar2 = champsTier2Arr[champ2Lvl4].star;
                    let novoCor2 = champsTier2Arr[champ2Lvl4].cor;
                    let novoCorBorder2 = champsTier2Arr[champ2Lvl4].corBorda;
                    let novoOrigem2 = champsTier2Arr[champ2Lvl4].origem;
                    let novoClasse2 = champsTier2Arr[champ2Lvl4].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else {
                    let champ3Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(champ3Lvl4);

                    let novoChampBox2 = champsTier3Arr[champ3Lvl4].nome;
                    let novoImg2 = champsTier3Arr[champ3Lvl4].imagem;
                    let novoStar2 = champsTier3Arr[champ3Lvl4].star;
                    let novoCor2 = champsTier3Arr[champ3Lvl4].cor;
                    let novoCorBorder2 = champsTier3Arr[champ3Lvl4].corBorda;
                    let novoOrigem2 = champsTier3Arr[champ3Lvl4].origem;
                    let novoClasse2 = champsTier3Arr[champ3Lvl4].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 55) {
                    let champ3Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(champ3Lvl4);

                    let novoChampBox3 = champsTier1Arr[champ3Lvl4].nome;
                    let novoImg3 = champsTier1Arr[champ3Lvl4].imagem;
                    let novoStar3 = champsTier1Arr[champ3Lvl4].star;
                    let novoCor3 = champsTier1Arr[champ3Lvl4].cor;
                    let novoCorBorder3 = champsTier1Arr[champ3Lvl4].corBorda;
                    let novoOrigem3 = champsTier1Arr[champ3Lvl4].origem;
                    let novoClasse3 = champsTier1Arr[champ3Lvl4].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 56 && sorteioOdds3 <= 85) {
                    let champ2Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(champ2Lvl4);

                    let novoChampBox3 = champsTier2Arr[champ2Lvl4].nome;
                    let novoImg3 = champsTier2Arr[champ2Lvl4].imagem;
                    let novoStar3 = champsTier2Arr[champ2Lvl4].star;
                    let novoCor3 = champsTier2Arr[champ2Lvl4].cor;
                    let novoCorBorder3 = champsTier2Arr[champ2Lvl4].corBorda;
                    let novoOrigem3 = champsTier2Arr[champ2Lvl4].origem;
                    let novoClasse3 = champsTier2Arr[champ2Lvl4].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);


                } else {
                    let champ3Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(champ3Lvl4);

                    let novoChampBox3 = champsTier3Arr[champ3Lvl4].nome;
                    let novoImg3 = champsTier3Arr[champ3Lvl4].imagem;
                    let novoStar3 = champsTier3Arr[champ3Lvl4].star;
                    let novoCor3 = champsTier3Arr[champ3Lvl4].cor;
                    let novoCorBorder3 = champsTier3Arr[champ3Lvl4].corBorda;
                    let novoOrigem3 = champsTier3Arr[champ3Lvl4].origem;
                    let novoClasse3 = champsTier3Arr[champ3Lvl4].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 55) {
                    let champ4Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(champ4Lvl4);

                    let novoChampBox4 = champsTier1Arr[champ4Lvl4].nome;
                    let novoImg4 = champsTier1Arr[champ4Lvl4].imagem;
                    let novoStar4 = champsTier1Arr[champ4Lvl4].star;
                    let novoCor4 = champsTier1Arr[champ4Lvl4].cor;
                    let novoCorBorder4 = champsTier1Arr[champ4Lvl4].corBorda;
                    let novoOrigem4 = champsTier1Arr[champ4Lvl4].origem;
                    let novoClasse4 = champsTier1Arr[champ4Lvl4].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else if (sorteioOdds4 >= 56 && sorteioOdds4 <= 85) {
                    let champ2Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(champ2Lvl4);

                    let novoChampBox4 = champsTier2Arr[champ2Lvl4].nome;
                    let novoImg4 = champsTier2Arr[champ2Lvl4].imagem;
                    let novoStar4 = champsTier2Arr[champ2Lvl4].star;
                    let novoCor4 = champsTier2Arr[champ2Lvl4].cor;
                    let novoCorBorder4 = champsTier2Arr[champ2Lvl4].corBorda;
                    let novoOrigem4 = champsTier2Arr[champ2Lvl4].origem;
                    let novoClasse4 = champsTier2Arr[champ2Lvl4].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);


                } else {
                    let champ3Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(champ3Lvl4);

                    let novoChampBox4 = champsTier3Arr[champ3Lvl4].nome;
                    let novoImg4 = champsTier3Arr[champ3Lvl4].imagem;
                    let novoStar4 = champsTier3Arr[champ3Lvl4].star;
                    let novoCor4 = champsTier3Arr[champ3Lvl4].cor;
                    let novoCorBorder4 = champsTier3Arr[champ3Lvl4].corBorda;
                    let novoOrigem4 = champsTier3Arr[champ3Lvl4].origem;
                    let novoClasse4 = champsTier3Arr[champ3Lvl4].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 55) {
                    let champ5Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(champ5Lvl4);

                    let novoChampBox5 = champsTier1Arr[champ5Lvl4].nome;
                    let novoImg5 = champsTier1Arr[champ5Lvl4].imagem;
                    let novoStar5 = champsTier1Arr[champ5Lvl4].star;
                    let novoCor5 = champsTier1Arr[champ5Lvl4].cor;
                    let novoCorBorder5 = champsTier1Arr[champ5Lvl4].corBorda;
                    let novoOrigem5 = champsTier1Arr[champ5Lvl4].origem;
                    let novoClasse5 = champsTier1Arr[champ5Lvl4].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 56 && sorteioOdds5 <= 85) {
                    let champ2Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(champ2Lvl4);

                    let novoChampBox5 = champsTier2Arr[champ2Lvl4].nome;
                    let novoImg5 = champsTier2Arr[champ2Lvl4].imagem;
                    let novoStar5 = champsTier2Arr[champ2Lvl4].star;
                    let novoCor5 = champsTier2Arr[champ2Lvl4].cor;
                    let novoCorBorder5 = champsTier2Arr[champ2Lvl4].corBorda;
                    let novoOrigem5 = champsTier2Arr[champ2Lvl4].origem;
                    let novoClasse5 = champsTier2Arr[champ2Lvl4].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else {
                    let champ3Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(champ3Lvl4);

                    let novoChampBox5 = champsTier3Arr[champ3Lvl4].nome;
                    let novoImg5 = champsTier3Arr[champ3Lvl4].imagem;
                    let novoStar5 = champsTier3Arr[champ3Lvl4].star;
                    let novoCor5 = champsTier3Arr[champ3Lvl4].cor;
                    let novoCorBorder5 = champsTier3Arr[champ3Lvl4].corBorda;
                    let novoOrigem5 = champsTier3Arr[champ3Lvl4].origem;
                    let novoClasse5 = champsTier3Arr[champ3Lvl4].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }

            }

            // LEVEL 5
            else if (level === 5 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 45) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier1Arr[chosen].nome;
                    let novoImg1 = champsTier1Arr[chosen].imagem;
                    let novoStar1 = champsTier1Arr[chosen].star;
                    let novoCor1 = champsTier1Arr[chosen].cor;
                    let novoCorBorder1 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier1Arr[chosen].origem;
                    let novoClasse1 = champsTier1Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 46 && sorteioOdds1 <= 78) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier2Arr[chosen].nome;
                    let novoImg1 = champsTier2Arr[chosen].imagem;
                    let novoStar1 = champsTier2Arr[chosen].star;
                    let novoCor1 = champsTier2Arr[chosen].cor;
                    let novoCorBorder1 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier2Arr[chosen].origem;
                    let novoClasse1 = champsTier2Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 79 && sorteioOdds1 <= 98) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier3Arr[chosen].nome;
                    let novoImg1 = champsTier3Arr[chosen].imagem;
                    let novoStar1 = champsTier3Arr[chosen].star;
                    let novoCor1 = champsTier3Arr[chosen].cor;
                    let novoCorBorder1 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier3Arr[chosen].origem;
                    let novoClasse1 = champsTier3Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier4Arr[chosen].nome;
                    let novoImg1 = champsTier4Arr[chosen].imagem;
                    let novoStar1 = champsTier4Arr[chosen].star;
                    let novoCor1 = champsTier4Arr[chosen].cor;
                    let novoCorBorder1 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier4Arr[chosen].origem;
                    let novoClasse1 = champsTier4Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 45) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier1Arr[chosen].nome;
                    let novoImg2 = champsTier1Arr[chosen].imagem;
                    let novoStar2 = champsTier1Arr[chosen].star;
                    let novoCor2 = champsTier1Arr[chosen].cor;
                    let novoCorBorder2 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier1Arr[chosen].origem;
                    let novoClasse2 = champsTier1Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else if (sorteioOdds2 >= 46 && sorteioOdds2 <= 78) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier2Arr[chosen].nome;
                    let novoImg2 = champsTier2Arr[chosen].imagem;
                    let novoStar2 = champsTier2Arr[chosen].star;
                    let novoCor2 = champsTier2Arr[chosen].cor;
                    let novoCorBorder2 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier2Arr[chosen].origem;
                    let novoClasse2 = champsTier2Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 79 && sorteioOdds2 <= 98) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier3Arr[chosen].nome;
                    let novoImg2 = champsTier3Arr[chosen].imagem;
                    let novoStar2 = champsTier3Arr[chosen].star;
                    let novoCor2 = champsTier3Arr[chosen].cor;
                    let novoCorBorder2 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier3Arr[chosen].origem;
                    let novoClasse2 = champsTier3Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier4Arr[chosen].nome;
                    let novoImg2 = champsTier4Arr[chosen].imagem;
                    let novoStar2 = champsTier4Arr[chosen].star;
                    let novoCor2 = champsTier4Arr[chosen].cor;
                    let novoCorBorder2 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier4Arr[chosen].origem;
                    let novoClasse2 = champsTier4Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 45) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier1Arr[chosen].nome;
                    let novoImg3 = champsTier1Arr[chosen].imagem;
                    let novoStar3 = champsTier1Arr[chosen].star;
                    let novoCor3 = champsTier1Arr[chosen].cor;
                    let novoCorBorder3 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier1Arr[chosen].origem;
                    let novoClasse3 = champsTier1Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 46 && sorteioOdds3 <= 78) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier2Arr[chosen].nome;
                    let novoImg3 = champsTier2Arr[chosen].imagem;
                    let novoStar3 = champsTier2Arr[chosen].star;
                    let novoCor3 = champsTier2Arr[chosen].cor;
                    let novoCorBorder3 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier2Arr[chosen].origem;
                    let novoClasse3 = champsTier2Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 79 && sorteioOdds3 <= 98) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier3Arr[chosen].nome;
                    let novoImg3 = champsTier3Arr[chosen].imagem;
                    let novoStar3 = champsTier3Arr[chosen].star;
                    let novoCor3 = champsTier3Arr[chosen].cor;
                    let novoCorBorder3 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier3Arr[chosen].origem;
                    let novoClasse3 = champsTier3Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                } else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier4Arr[chosen].nome;
                    let novoImg3 = champsTier4Arr[chosen].imagem;
                    let novoStar3 = champsTier4Arr[chosen].star;
                    let novoCor3 = champsTier4Arr[chosen].cor;
                    let novoCorBorder3 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier4Arr[chosen].origem;
                    let novoClasse3 = champsTier4Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 45) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier1Arr[chosen].nome;
                    let novoImg4 = champsTier1Arr[chosen].imagem;
                    let novoStar4 = champsTier1Arr[chosen].star;
                    let novoCor4 = champsTier1Arr[chosen].cor;
                    let novoCorBorder4 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier1Arr[chosen].origem;
                    let novoClasse4 = champsTier1Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else if (sorteioOdds4 >= 46 && sorteioOdds4 <= 78) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier2Arr[chosen].nome;
                    let novoImg4 = champsTier2Arr[chosen].imagem;
                    let novoStar4 = champsTier2Arr[chosen].star;
                    let novoCor4 = champsTier2Arr[chosen].cor;
                    let novoCorBorder4 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier2Arr[chosen].origem;
                    let novoClasse4 = champsTier2Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 79 && sorteioOdds4 <= 98) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier3Arr[chosen].nome;
                    let novoImg4 = champsTier3Arr[chosen].imagem;
                    let novoStar4 = champsTier3Arr[chosen].star;
                    let novoCor4 = champsTier3Arr[chosen].cor;
                    let novoCorBorder4 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier3Arr[chosen].origem;
                    let novoClasse4 = champsTier3Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier4Arr[chosen].nome;
                    let novoImg4 = champsTier4Arr[chosen].imagem;
                    let novoStar4 = champsTier4Arr[chosen].star;
                    let novoCor4 = champsTier4Arr[chosen].cor;
                    let novoCorBorder4 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier4Arr[chosen].origem;
                    let novoClasse4 = champsTier4Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 45) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier1Arr[chosen].nome;
                    let novoImg5 = champsTier1Arr[chosen].imagem;
                    let novoStar5 = champsTier1Arr[chosen].star;
                    let novoCor5 = champsTier1Arr[chosen].cor;
                    let novoCorBorder5 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier1Arr[chosen].origem;
                    let novoClasse5 = champsTier1Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 46 && sorteioOdds5 <= 78) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier2Arr[chosen].nome;
                    let novoImg5 = champsTier2Arr[chosen].imagem;
                    let novoStar5 = champsTier2Arr[chosen].star;
                    let novoCor5 = champsTier2Arr[chosen].cor;
                    let novoCorBorder5 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier2Arr[chosen].origem;
                    let novoClasse5 = champsTier2Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 79 && sorteioOdds5 <= 98) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier3Arr[chosen].nome;
                    let novoImg5 = champsTier3Arr[chosen].imagem;
                    let novoStar5 = champsTier3Arr[chosen].star;
                    let novoCor5 = champsTier3Arr[chosen].cor;
                    let novoCorBorder5 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier3Arr[chosen].origem;
                    let novoClasse5 = champsTier3Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                }
                else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier4Arr[chosen].nome;
                    let novoImg5 = champsTier4Arr[chosen].imagem;
                    let novoStar5 = champsTier4Arr[chosen].star;
                    let novoCor5 = champsTier4Arr[chosen].cor;
                    let novoCorBorder5 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier4Arr[chosen].origem;
                    let novoClasse5 = champsTier4Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }

            }

            // LEVEL 6
            else if (level === 6 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier1Arr[chosen].nome;
                    let novoImg1 = champsTier1Arr[chosen].imagem;
                    let novoStar1 = champsTier1Arr[chosen].star;
                    let novoCor1 = champsTier1Arr[chosen].cor;
                    let novoCorBorder1 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier1Arr[chosen].origem;
                    let novoClasse1 = champsTier1Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 36 && sorteioOdds1 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier2Arr[chosen].nome;
                    let novoImg1 = champsTier2Arr[chosen].imagem;
                    let novoStar1 = champsTier2Arr[chosen].star;
                    let novoCor1 = champsTier2Arr[chosen].cor;
                    let novoCorBorder1 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier2Arr[chosen].origem;
                    let novoClasse1 = champsTier2Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 71 && sorteioOdds1 <= 95) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier3Arr[chosen].nome;
                    let novoImg1 = champsTier3Arr[chosen].imagem;
                    let novoStar1 = champsTier3Arr[chosen].star;
                    let novoCor1 = champsTier3Arr[chosen].cor;
                    let novoCorBorder1 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier3Arr[chosen].origem;
                    let novoClasse1 = champsTier3Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier4Arr[chosen].nome;
                    let novoImg1 = champsTier4Arr[chosen].imagem;
                    let novoStar1 = champsTier4Arr[chosen].star;
                    let novoCor1 = champsTier4Arr[chosen].cor;
                    let novoCorBorder1 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier4Arr[chosen].origem;
                    let novoClasse1 = champsTier4Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier1Arr[chosen].nome;
                    let novoImg2 = champsTier1Arr[chosen].imagem;
                    let novoStar2 = champsTier1Arr[chosen].star;
                    let novoCor2 = champsTier1Arr[chosen].cor;
                    let novoCorBorder2 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier1Arr[chosen].origem;
                    let novoClasse2 = champsTier1Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else if (sorteioOdds2 >= 36 && sorteioOdds2 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier2Arr[chosen].nome;
                    let novoImg2 = champsTier2Arr[chosen].imagem;
                    let novoStar2 = champsTier2Arr[chosen].star;
                    let novoCor2 = champsTier2Arr[chosen].cor;
                    let novoCorBorder2 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier2Arr[chosen].origem;
                    let novoClasse2 = champsTier2Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 71 && sorteioOdds2 <= 95) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier3Arr[chosen].nome;
                    let novoImg2 = champsTier3Arr[chosen].imagem;
                    let novoStar2 = champsTier3Arr[chosen].star;
                    let novoCor2 = champsTier3Arr[chosen].cor;
                    let novoCorBorder2 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier3Arr[chosen].origem;
                    let novoClasse2 = champsTier3Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier4Arr[chosen].nome;
                    let novoImg2 = champsTier4Arr[chosen].imagem;
                    let novoStar2 = champsTier4Arr[chosen].star;
                    let novoCor2 = champsTier4Arr[chosen].cor;
                    let novoCorBorder2 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier4Arr[chosen].origem;
                    let novoClasse2 = champsTier4Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier1Arr[chosen].nome;
                    let novoImg3 = champsTier1Arr[chosen].imagem;
                    let novoStar3 = champsTier1Arr[chosen].star;
                    let novoCor3 = champsTier1Arr[chosen].cor;
                    let novoCorBorder3 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier1Arr[chosen].origem;
                    let novoClasse3 = champsTier1Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 36 && sorteioOdds3 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier2Arr[chosen].nome;
                    let novoImg3 = champsTier2Arr[chosen].imagem;
                    let novoStar3 = champsTier2Arr[chosen].star;
                    let novoCor3 = champsTier2Arr[chosen].cor;
                    let novoCorBorder3 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier2Arr[chosen].origem;
                    let novoClasse3 = champsTier2Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 71 && sorteioOdds3 <= 95) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier3Arr[chosen].nome;
                    let novoImg3 = champsTier3Arr[chosen].imagem;
                    let novoStar3 = champsTier3Arr[chosen].star;
                    let novoCor3 = champsTier3Arr[chosen].cor;
                    let novoCorBorder3 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier3Arr[chosen].origem;
                    let novoClasse3 = champsTier3Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                } else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier4Arr[chosen].nome;
                    let novoImg3 = champsTier4Arr[chosen].imagem;
                    let novoStar3 = champsTier4Arr[chosen].star;
                    let novoCor3 = champsTier4Arr[chosen].cor;
                    let novoCorBorder3 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier4Arr[chosen].origem;
                    let novoClasse3 = champsTier4Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier1Arr[chosen].nome;
                    let novoImg4 = champsTier1Arr[chosen].imagem;
                    let novoStar4 = champsTier1Arr[chosen].star;
                    let novoCor4 = champsTier1Arr[chosen].cor;
                    let novoCorBorder4 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier1Arr[chosen].origem;
                    let novoClasse4 = champsTier1Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else if (sorteioOdds4 >= 36 && sorteioOdds4 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier2Arr[chosen].nome;
                    let novoImg4 = champsTier2Arr[chosen].imagem;
                    let novoStar4 = champsTier2Arr[chosen].star;
                    let novoCor4 = champsTier2Arr[chosen].cor;
                    let novoCorBorder4 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier2Arr[chosen].origem;
                    let novoClasse4 = champsTier2Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 71 && sorteioOdds4 <= 95) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier3Arr[chosen].nome;
                    let novoImg4 = champsTier3Arr[chosen].imagem;
                    let novoStar4 = champsTier3Arr[chosen].star;
                    let novoCor4 = champsTier3Arr[chosen].cor;
                    let novoCorBorder4 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier3Arr[chosen].origem;
                    let novoClasse4 = champsTier3Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier4Arr[chosen].nome;
                    let novoImg4 = champsTier4Arr[chosen].imagem;
                    let novoStar4 = champsTier4Arr[chosen].star;
                    let novoCor4 = champsTier4Arr[chosen].cor;
                    let novoCorBorder4 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier4Arr[chosen].origem;
                    let novoClasse4 = champsTier4Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier1Arr[chosen].nome;
                    let novoImg5 = champsTier1Arr[chosen].imagem;
                    let novoStar5 = champsTier1Arr[chosen].star;
                    let novoCor5 = champsTier1Arr[chosen].cor;
                    let novoCorBorder5 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier1Arr[chosen].origem;
                    let novoClasse5 = champsTier1Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 36 && sorteioOdds5 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier2Arr[chosen].nome;
                    let novoImg5 = champsTier2Arr[chosen].imagem;
                    let novoStar5 = champsTier2Arr[chosen].star;
                    let novoCor5 = champsTier2Arr[chosen].cor;
                    let novoCorBorder5 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier2Arr[chosen].origem;
                    let novoClasse5 = champsTier2Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 71 && sorteioOdds5 <= 95) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier3Arr[chosen].nome;
                    let novoImg5 = champsTier3Arr[chosen].imagem;
                    let novoStar5 = champsTier3Arr[chosen].star;
                    let novoCor5 = champsTier3Arr[chosen].cor;
                    let novoCorBorder5 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier3Arr[chosen].origem;
                    let novoClasse5 = champsTier3Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                }
                else {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier4Arr[chosen].nome;
                    let novoImg5 = champsTier4Arr[chosen].imagem;
                    let novoStar5 = champsTier4Arr[chosen].star;
                    let novoCor5 = champsTier4Arr[chosen].cor;
                    let novoCorBorder5 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier4Arr[chosen].origem;
                    let novoClasse5 = champsTier4Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
            }

            // LEVEL 7
            else if (level === 7 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 19) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier1Arr[chosen].nome;
                    let novoImg1 = champsTier1Arr[chosen].imagem;
                    let novoStar1 = champsTier1Arr[chosen].star;
                    let novoCor1 = champsTier1Arr[chosen].cor;
                    let novoCorBorder1 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier1Arr[chosen].origem;
                    let novoClasse1 = champsTier1Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 20 && sorteioOdds1 <= 54) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier2Arr[chosen].nome;
                    let novoImg1 = champsTier2Arr[chosen].imagem;
                    let novoStar1 = champsTier2Arr[chosen].star;
                    let novoCor1 = champsTier2Arr[chosen].cor;
                    let novoCorBorder1 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier2Arr[chosen].origem;
                    let novoClasse1 = champsTier2Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 55 && sorteioOdds1 <= 84) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier3Arr[chosen].nome;
                    let novoImg1 = champsTier3Arr[chosen].imagem;
                    let novoStar1 = champsTier3Arr[chosen].star;
                    let novoCor1 = champsTier3Arr[chosen].cor;
                    let novoCorBorder1 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier3Arr[chosen].origem;
                    let novoClasse1 = champsTier3Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 85 && sorteioOdds1 <= 99) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier4Arr[chosen].nome;
                    let novoImg1 = champsTier4Arr[chosen].imagem;
                    let novoStar1 = champsTier4Arr[chosen].star;
                    let novoCor1 = champsTier4Arr[chosen].cor;
                    let novoCorBorder1 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier4Arr[chosen].origem;
                    let novoClasse1 = champsTier4Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                } else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier5Arr[chosen].nome;
                    let novoImg1 = champsTier5Arr[chosen].imagem;
                    let novoStar1 = champsTier5Arr[chosen].star;
                    let novoCor1 = champsTier5Arr[chosen].cor;
                    let novoCorBorder1 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier5Arr[chosen].origem;
                    let novoClasse1 = champsTier5Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 19) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier1Arr[chosen].nome;
                    let novoImg2 = champsTier1Arr[chosen].imagem;
                    let novoStar2 = champsTier1Arr[chosen].star;
                    let novoCor2 = champsTier1Arr[chosen].cor;
                    let novoCorBorder2 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier1Arr[chosen].origem;
                    let novoClasse2 = champsTier1Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else if (sorteioOdds2 >= 20 && sorteioOdds2 <= 54) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier2Arr[chosen].nome;
                    let novoImg2 = champsTier2Arr[chosen].imagem;
                    let novoStar2 = champsTier2Arr[chosen].star;
                    let novoCor2 = champsTier2Arr[chosen].cor;
                    let novoCorBorder2 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier2Arr[chosen].origem;
                    let novoClasse2 = champsTier2Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 55 && sorteioOdds2 <= 84) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier3Arr[chosen].nome;
                    let novoImg2 = champsTier3Arr[chosen].imagem;
                    let novoStar2 = champsTier3Arr[chosen].star;
                    let novoCor2 = champsTier3Arr[chosen].cor;
                    let novoCorBorder2 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier3Arr[chosen].origem;
                    let novoClasse2 = champsTier3Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 85 && sorteioOdds2 <= 99) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier4Arr[chosen].nome;
                    let novoImg2 = champsTier4Arr[chosen].imagem;
                    let novoStar2 = champsTier4Arr[chosen].star;
                    let novoCor2 = champsTier4Arr[chosen].cor;
                    let novoCorBorder2 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier4Arr[chosen].origem;
                    let novoClasse2 = champsTier4Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier5Arr[chosen].nome;
                    let novoImg2 = champsTier5Arr[chosen].imagem;
                    let novoStar2 = champsTier5Arr[chosen].star;
                    let novoCor2 = champsTier5Arr[chosen].cor;
                    let novoCorBorder2 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier5Arr[chosen].origem;
                    let novoClasse2 = champsTier5Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 19) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier1Arr[chosen].nome;
                    let novoImg3 = champsTier1Arr[chosen].imagem;
                    let novoStar3 = champsTier1Arr[chosen].star;
                    let novoCor3 = champsTier1Arr[chosen].cor;
                    let novoCorBorder3 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier1Arr[chosen].origem;
                    let novoClasse3 = champsTier1Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 20 && sorteioOdds3 <= 54) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier2Arr[chosen].nome;
                    let novoImg3 = champsTier2Arr[chosen].imagem;
                    let novoStar3 = champsTier2Arr[chosen].star;
                    let novoCor3 = champsTier2Arr[chosen].cor;
                    let novoCorBorder3 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier2Arr[chosen].origem;
                    let novoClasse3 = champsTier2Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 55 && sorteioOdds3 <= 84) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier3Arr[chosen].nome;
                    let novoImg3 = champsTier3Arr[chosen].imagem;
                    let novoStar3 = champsTier3Arr[chosen].star;
                    let novoCor3 = champsTier3Arr[chosen].cor;
                    let novoCorBorder3 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier3Arr[chosen].origem;
                    let novoClasse3 = champsTier3Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                }
                else if (sorteioOdds3 >= 85 && sorteioOdds3 <= 99) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier4Arr[chosen].nome;
                    let novoImg3 = champsTier4Arr[chosen].imagem;
                    let novoStar3 = champsTier4Arr[chosen].star;
                    let novoCor3 = champsTier4Arr[chosen].cor;
                    let novoCorBorder3 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier4Arr[chosen].origem;
                    let novoClasse3 = champsTier4Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier5Arr[chosen].nome;
                    let novoImg3 = champsTier5Arr[chosen].imagem;
                    let novoStar3 = champsTier5Arr[chosen].star;
                    let novoCor3 = champsTier5Arr[chosen].cor;
                    let novoCorBorder3 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier5Arr[chosen].origem;
                    let novoClasse3 = champsTier5Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 19) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier1Arr[chosen].nome;
                    let novoImg4 = champsTier1Arr[chosen].imagem;
                    let novoStar4 = champsTier1Arr[chosen].star;
                    let novoCor4 = champsTier1Arr[chosen].cor;
                    let novoCorBorder4 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier1Arr[chosen].origem;
                    let novoClasse4 = champsTier1Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else if (sorteioOdds4 >= 20 && sorteioOdds4 <= 54) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier2Arr[chosen].nome;
                    let novoImg4 = champsTier2Arr[chosen].imagem;
                    let novoStar4 = champsTier2Arr[chosen].star;
                    let novoCor4 = champsTier2Arr[chosen].cor;
                    let novoCorBorder4 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier2Arr[chosen].origem;
                    let novoClasse4 = champsTier2Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 55 && sorteioOdds4 <= 84) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier3Arr[chosen].nome;
                    let novoImg4 = champsTier3Arr[chosen].imagem;
                    let novoStar4 = champsTier3Arr[chosen].star;
                    let novoCor4 = champsTier3Arr[chosen].cor;
                    let novoCorBorder4 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier3Arr[chosen].origem;
                    let novoClasse4 = champsTier3Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 85 && sorteioOdds4 <= 99) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier4Arr[chosen].nome;
                    let novoImg4 = champsTier4Arr[chosen].imagem;
                    let novoStar4 = champsTier4Arr[chosen].star;
                    let novoCor4 = champsTier4Arr[chosen].cor;
                    let novoCorBorder4 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier4Arr[chosen].origem;
                    let novoClasse4 = champsTier4Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier5Arr[chosen].nome;
                    let novoImg4 = champsTier5Arr[chosen].imagem;
                    let novoStar4 = champsTier5Arr[chosen].star;
                    let novoCor4 = champsTier5Arr[chosen].cor;
                    let novoCorBorder4 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier5Arr[chosen].origem;
                    let novoClasse4 = champsTier5Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 19) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier1Arr[chosen].nome;
                    let novoImg5 = champsTier1Arr[chosen].imagem;
                    let novoStar5 = champsTier1Arr[chosen].star;
                    let novoCor5 = champsTier1Arr[chosen].cor;
                    let novoCorBorder5 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier1Arr[chosen].origem;
                    let novoClasse5 = champsTier1Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 20 && sorteioOdds5 <= 54) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier2Arr[chosen].nome;
                    let novoImg5 = champsTier2Arr[chosen].imagem;
                    let novoStar5 = champsTier2Arr[chosen].star;
                    let novoCor5 = champsTier2Arr[chosen].cor;
                    let novoCorBorder5 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier2Arr[chosen].origem;
                    let novoClasse5 = champsTier2Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 55 && sorteioOdds5 <= 84) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier3Arr[chosen].nome;
                    let novoImg5 = champsTier3Arr[chosen].imagem;
                    let novoStar5 = champsTier3Arr[chosen].star;
                    let novoCor5 = champsTier3Arr[chosen].cor;
                    let novoCorBorder5 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier3Arr[chosen].origem;
                    let novoClasse5 = champsTier3Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
                else if (sorteioOdds5 >= 85 && sorteioOdds5 <= 99) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier4Arr[chosen].nome;
                    let novoImg5 = champsTier4Arr[chosen].imagem;
                    let novoStar5 = champsTier4Arr[chosen].star;
                    let novoCor5 = champsTier4Arr[chosen].cor;
                    let novoCorBorder5 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier4Arr[chosen].origem;
                    let novoClasse5 = champsTier4Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier5Arr[chosen].nome;
                    let novoImg5 = champsTier5Arr[chosen].imagem;
                    let novoStar5 = champsTier5Arr[chosen].star;
                    let novoCor5 = champsTier5Arr[chosen].cor;
                    let novoCorBorder5 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier5Arr[chosen].origem;
                    let novoClasse5 = champsTier5Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
            }

            // LEVEL 8
            else if (level === 8 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 15) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier1Arr[chosen].nome;
                    let novoImg1 = champsTier1Arr[chosen].imagem;
                    let novoStar1 = champsTier1Arr[chosen].star;
                    let novoCor1 = champsTier1Arr[chosen].cor;
                    let novoCorBorder1 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier1Arr[chosen].origem;
                    let novoClasse1 = champsTier1Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 16 && sorteioOdds1 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier2Arr[chosen].nome;
                    let novoImg1 = champsTier2Arr[chosen].imagem;
                    let novoStar1 = champsTier2Arr[chosen].star;
                    let novoCor1 = champsTier2Arr[chosen].cor;
                    let novoCorBorder1 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier2Arr[chosen].origem;
                    let novoClasse1 = champsTier2Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 36 && sorteioOdds1 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier3Arr[chosen].nome;
                    let novoImg1 = champsTier3Arr[chosen].imagem;
                    let novoStar1 = champsTier3Arr[chosen].star;
                    let novoCor1 = champsTier3Arr[chosen].cor;
                    let novoCorBorder1 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier3Arr[chosen].origem;
                    let novoClasse1 = champsTier3Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 71 && sorteioOdds1 <= 95) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier4Arr[chosen].nome;
                    let novoImg1 = champsTier4Arr[chosen].imagem;
                    let novoStar1 = champsTier4Arr[chosen].star;
                    let novoCor1 = champsTier4Arr[chosen].cor;
                    let novoCorBorder1 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier4Arr[chosen].origem;
                    let novoClasse1 = champsTier4Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                } else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier5Arr[chosen].nome;
                    let novoImg1 = champsTier5Arr[chosen].imagem;
                    let novoStar1 = champsTier5Arr[chosen].star;
                    let novoCor1 = champsTier5Arr[chosen].cor;
                    let novoCorBorder1 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier5Arr[chosen].origem;
                    let novoClasse1 = champsTier5Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 15) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier1Arr[chosen].nome;
                    let novoImg2 = champsTier1Arr[chosen].imagem;
                    let novoStar2 = champsTier1Arr[chosen].star;
                    let novoCor2 = champsTier1Arr[chosen].cor;
                    let novoCorBorder2 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier1Arr[chosen].origem;
                    let novoClasse2 = champsTier1Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else if (sorteioOdds2 >= 16 && sorteioOdds2 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier2Arr[chosen].nome;
                    let novoImg2 = champsTier2Arr[chosen].imagem;
                    let novoStar2 = champsTier2Arr[chosen].star;
                    let novoCor2 = champsTier2Arr[chosen].cor;
                    let novoCorBorder2 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier2Arr[chosen].origem;
                    let novoClasse2 = champsTier2Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 36 && sorteioOdds2 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier3Arr[chosen].nome;
                    let novoImg2 = champsTier3Arr[chosen].imagem;
                    let novoStar2 = champsTier3Arr[chosen].star;
                    let novoCor2 = champsTier3Arr[chosen].cor;
                    let novoCorBorder2 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier3Arr[chosen].origem;
                    let novoClasse2 = champsTier3Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 71 && sorteioOdds2 <= 95) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier4Arr[chosen].nome;
                    let novoImg2 = champsTier4Arr[chosen].imagem;
                    let novoStar2 = champsTier4Arr[chosen].star;
                    let novoCor2 = champsTier4Arr[chosen].cor;
                    let novoCorBorder2 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier4Arr[chosen].origem;
                    let novoClasse2 = champsTier4Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier5Arr[chosen].nome;
                    let novoImg2 = champsTier5Arr[chosen].imagem;
                    let novoStar2 = champsTier5Arr[chosen].star;
                    let novoCor2 = champsTier5Arr[chosen].cor;
                    let novoCorBorder2 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier5Arr[chosen].origem;
                    let novoClasse2 = champsTier5Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 15) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier1Arr[chosen].nome;
                    let novoImg3 = champsTier1Arr[chosen].imagem;
                    let novoStar3 = champsTier1Arr[chosen].star;
                    let novoCor3 = champsTier1Arr[chosen].cor;
                    let novoCorBorder3 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier1Arr[chosen].origem;
                    let novoClasse3 = champsTier1Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 16 && sorteioOdds3 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier2Arr[chosen].nome;
                    let novoImg3 = champsTier2Arr[chosen].imagem;
                    let novoStar3 = champsTier2Arr[chosen].star;
                    let novoCor3 = champsTier2Arr[chosen].cor;
                    let novoCorBorder3 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier2Arr[chosen].origem;
                    let novoClasse3 = champsTier2Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 36 && sorteioOdds3 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier3Arr[chosen].nome;
                    let novoImg3 = champsTier3Arr[chosen].imagem;
                    let novoStar3 = champsTier3Arr[chosen].star;
                    let novoCor3 = champsTier3Arr[chosen].cor;
                    let novoCorBorder3 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier3Arr[chosen].origem;
                    let novoClasse3 = champsTier3Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                }
                else if (sorteioOdds3 >= 71 && sorteioOdds3 <= 95) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier4Arr[chosen].nome;
                    let novoImg3 = champsTier4Arr[chosen].imagem;
                    let novoStar3 = champsTier4Arr[chosen].star;
                    let novoCor3 = champsTier4Arr[chosen].cor;
                    let novoCorBorder3 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier4Arr[chosen].origem;
                    let novoClasse3 = champsTier4Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier5Arr[chosen].nome;
                    let novoImg3 = champsTier5Arr[chosen].imagem;
                    let novoStar3 = champsTier5Arr[chosen].star;
                    let novoCor3 = champsTier5Arr[chosen].cor;
                    let novoCorBorder3 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier5Arr[chosen].origem;
                    let novoClasse3 = champsTier5Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 15) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier1Arr[chosen].nome;
                    let novoImg4 = champsTier1Arr[chosen].imagem;
                    let novoStar4 = champsTier1Arr[chosen].star;
                    let novoCor4 = champsTier1Arr[chosen].cor;
                    let novoCorBorder4 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier1Arr[chosen].origem;
                    let novoClasse4 = champsTier1Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else if (sorteioOdds4 >= 16 && sorteioOdds4 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier2Arr[chosen].nome;
                    let novoImg4 = champsTier2Arr[chosen].imagem;
                    let novoStar4 = champsTier2Arr[chosen].star;
                    let novoCor4 = champsTier2Arr[chosen].cor;
                    let novoCorBorder4 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier2Arr[chosen].origem;
                    let novoClasse4 = champsTier2Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 36 && sorteioOdds4 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier3Arr[chosen].nome;
                    let novoImg4 = champsTier3Arr[chosen].imagem;
                    let novoStar4 = champsTier3Arr[chosen].star;
                    let novoCor4 = champsTier3Arr[chosen].cor;
                    let novoCorBorder4 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier3Arr[chosen].origem;
                    let novoClasse4 = champsTier3Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 71 && sorteioOdds4 <= 95) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier4Arr[chosen].nome;
                    let novoImg4 = champsTier4Arr[chosen].imagem;
                    let novoStar4 = champsTier4Arr[chosen].star;
                    let novoCor4 = champsTier4Arr[chosen].cor;
                    let novoCorBorder4 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier4Arr[chosen].origem;
                    let novoClasse4 = champsTier4Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier5Arr[chosen].nome;
                    let novoImg4 = champsTier5Arr[chosen].imagem;
                    let novoStar4 = champsTier5Arr[chosen].star;
                    let novoCor4 = champsTier5Arr[chosen].cor;
                    let novoCorBorder4 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier5Arr[chosen].origem;
                    let novoClasse4 = champsTier5Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 15) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier1Arr[chosen].nome;
                    let novoImg5 = champsTier1Arr[chosen].imagem;
                    let novoStar5 = champsTier1Arr[chosen].star;
                    let novoCor5 = champsTier1Arr[chosen].cor;
                    let novoCorBorder5 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier1Arr[chosen].origem;
                    let novoClasse5 = champsTier1Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 16 && sorteioOdds5 <= 35) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier2Arr[chosen].nome;
                    let novoImg5 = champsTier2Arr[chosen].imagem;
                    let novoStar5 = champsTier2Arr[chosen].star;
                    let novoCor5 = champsTier2Arr[chosen].cor;
                    let novoCorBorder5 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier2Arr[chosen].origem;
                    let novoClasse5 = champsTier2Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 36 && sorteioOdds5 <= 70) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier3Arr[chosen].nome;
                    let novoImg5 = champsTier3Arr[chosen].imagem;
                    let novoStar5 = champsTier3Arr[chosen].star;
                    let novoCor5 = champsTier3Arr[chosen].cor;
                    let novoCorBorder5 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier3Arr[chosen].origem;
                    let novoClasse5 = champsTier3Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
                else if (sorteioOdds5 >= 71 && sorteioOdds5 <= 95) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier4Arr[chosen].nome;
                    let novoImg5 = champsTier4Arr[chosen].imagem;
                    let novoStar5 = champsTier4Arr[chosen].star;
                    let novoCor5 = champsTier4Arr[chosen].cor;
                    let novoCorBorder5 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier4Arr[chosen].origem;
                    let novoClasse5 = champsTier4Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier5Arr[chosen].nome;
                    let novoImg5 = champsTier5Arr[chosen].imagem;
                    let novoStar5 = champsTier5Arr[chosen].star;
                    let novoCor5 = champsTier5Arr[chosen].cor;
                    let novoCorBorder5 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier5Arr[chosen].origem;
                    let novoClasse5 = champsTier5Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
            }

            // LEVEL 9
            else if (level === 9 && gold > 1) {

                // BOX1
                if (sorteioOdds1 >= 1 && sorteioOdds1 <= 10) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier1Arr[chosen].nome;
                    let novoImg1 = champsTier1Arr[chosen].imagem;
                    let novoStar1 = champsTier1Arr[chosen].star;
                    let novoCor1 = champsTier1Arr[chosen].cor;
                    let novoCorBorder1 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier1Arr[chosen].origem;
                    let novoClasse1 = champsTier1Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 11 && sorteioOdds1 <= 25) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier2Arr[chosen].nome;
                    let novoImg1 = champsTier2Arr[chosen].imagem;
                    let novoStar1 = champsTier2Arr[chosen].star;
                    let novoCor1 = champsTier2Arr[chosen].cor;
                    let novoCorBorder1 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier2Arr[chosen].origem;
                    let novoClasse1 = champsTier2Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 26 && sorteioOdds1 <= 55) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier3Arr[chosen].nome;
                    let novoImg1 = champsTier3Arr[chosen].imagem;
                    let novoStar1 = champsTier3Arr[chosen].star;
                    let novoCor1 = champsTier3Arr[chosen].cor;
                    let novoCorBorder1 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier3Arr[chosen].origem;
                    let novoClasse1 = champsTier3Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);

                } else if (sorteioOdds1 >= 56 && sorteioOdds1 <= 85) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier4Arr[chosen].nome;
                    let novoImg1 = champsTier4Arr[chosen].imagem;
                    let novoStar1 = champsTier4Arr[chosen].star;
                    let novoCor1 = champsTier4Arr[chosen].cor;
                    let novoCorBorder1 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier4Arr[chosen].origem;
                    let novoClasse1 = champsTier4Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                } else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp1(chosen);

                    let novoChampBox1 = champsTier5Arr[chosen].nome;
                    let novoImg1 = champsTier5Arr[chosen].imagem;
                    let novoStar1 = champsTier5Arr[chosen].star;
                    let novoCor1 = champsTier5Arr[chosen].cor;
                    let novoCorBorder1 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem1 = champsTier5Arr[chosen].origem;
                    let novoClasse1 = champsTier5Arr[chosen].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                }

                // BOX2
                if (sorteioOdds2 >= 1 && sorteioOdds2 <= 10) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier1Arr[chosen].nome;
                    let novoImg2 = champsTier1Arr[chosen].imagem;
                    let novoStar2 = champsTier1Arr[chosen].star;
                    let novoCor2 = champsTier1Arr[chosen].cor;
                    let novoCorBorder2 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier1Arr[chosen].origem;
                    let novoClasse2 = champsTier1Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);

                } else if (sorteioOdds2 >= 11 && sorteioOdds2 <= 25) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier2Arr[chosen].nome;
                    let novoImg2 = champsTier2Arr[chosen].imagem;
                    let novoStar2 = champsTier2Arr[chosen].star;
                    let novoCor2 = champsTier2Arr[chosen].cor;
                    let novoCorBorder2 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier2Arr[chosen].origem;
                    let novoClasse2 = champsTier2Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 26 && sorteioOdds2 <= 55) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier3Arr[chosen].nome;
                    let novoImg2 = champsTier3Arr[chosen].imagem;
                    let novoStar2 = champsTier3Arr[chosen].star;
                    let novoCor2 = champsTier3Arr[chosen].cor;
                    let novoCorBorder2 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier3Arr[chosen].origem;
                    let novoClasse2 = champsTier3Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else if (sorteioOdds2 >= 56 && sorteioOdds2 <= 85) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier4Arr[chosen].nome;
                    let novoImg2 = champsTier4Arr[chosen].imagem;
                    let novoStar2 = champsTier4Arr[chosen].star;
                    let novoCor2 = champsTier4Arr[chosen].cor;
                    let novoCorBorder2 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier4Arr[chosen].origem;
                    let novoClasse2 = champsTier4Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp2(chosen);

                    let novoChampBox2 = champsTier5Arr[chosen].nome;
                    let novoImg2 = champsTier5Arr[chosen].imagem;
                    let novoStar2 = champsTier5Arr[chosen].star;
                    let novoCor2 = champsTier5Arr[chosen].cor;
                    let novoCorBorder2 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem2 = champsTier5Arr[chosen].origem;
                    let novoClasse2 = champsTier5Arr[chosen].classe;
                    setOrigem2(novoOrigem2);
                    setClasse2(novoClasse2);
                    setCorBorder2(novoCorBorder2);
                    setCor2(novoCor2);
                    setChampImg2(novoImg2);
                    setChampionNome2(novoChampBox2);
                    setStarNumber2(novoStar2);
                }

                // BOX3
                if (sorteioOdds3 >= 1 && sorteioOdds3 <= 10) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier1Arr[chosen].nome;
                    let novoImg3 = champsTier1Arr[chosen].imagem;
                    let novoStar3 = champsTier1Arr[chosen].star;
                    let novoCor3 = champsTier1Arr[chosen].cor;
                    let novoCorBorder3 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier1Arr[chosen].origem;
                    let novoClasse3 = champsTier1Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 11 && sorteioOdds3 <= 25) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier2Arr[chosen].nome;
                    let novoImg3 = champsTier2Arr[chosen].imagem;
                    let novoStar3 = champsTier2Arr[chosen].star;
                    let novoCor3 = champsTier2Arr[chosen].cor;
                    let novoCorBorder3 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier2Arr[chosen].origem;
                    let novoClasse3 = champsTier2Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                } else if (sorteioOdds3 >= 26 && sorteioOdds3 <= 55) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier3Arr[chosen].nome;
                    let novoImg3 = champsTier3Arr[chosen].imagem;
                    let novoStar3 = champsTier3Arr[chosen].star;
                    let novoCor3 = champsTier3Arr[chosen].cor;
                    let novoCorBorder3 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier3Arr[chosen].origem;
                    let novoClasse3 = champsTier3Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                }
                else if (sorteioOdds3 >= 56 && sorteioOdds3 <= 85) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier4Arr[chosen].nome;
                    let novoImg3 = champsTier4Arr[chosen].imagem;
                    let novoStar3 = champsTier4Arr[chosen].star;
                    let novoCor3 = champsTier4Arr[chosen].cor;
                    let novoCorBorder3 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier4Arr[chosen].origem;
                    let novoClasse3 = champsTier4Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp3(chosen);

                    let novoChampBox3 = champsTier5Arr[chosen].nome;
                    let novoImg3 = champsTier5Arr[chosen].imagem;
                    let novoStar3 = champsTier5Arr[chosen].star;
                    let novoCor3 = champsTier5Arr[chosen].cor;
                    let novoCorBorder3 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem3 = champsTier5Arr[chosen].origem;
                    let novoClasse3 = champsTier5Arr[chosen].classe;
                    setOrigem3(novoOrigem3);
                    setClasse3(novoClasse3);
                    setCorBorder3(novoCorBorder3);
                    setCor3(novoCor3);
                    setChampImg3(novoImg3);
                    setChampionNome3(novoChampBox3);
                    setStarNumber3(novoStar3);

                }

                // BOX4
                if (sorteioOdds4 >= 1 && sorteioOdds4 <= 10) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier1Arr[chosen].nome;
                    let novoImg4 = champsTier1Arr[chosen].imagem;
                    let novoStar4 = champsTier1Arr[chosen].star;
                    let novoCor4 = champsTier1Arr[chosen].cor;
                    let novoCorBorder4 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier1Arr[chosen].origem;
                    let novoClasse4 = champsTier1Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                } else if (sorteioOdds4 >= 11 && sorteioOdds4 <= 25) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier2Arr[chosen].nome;
                    let novoImg4 = champsTier2Arr[chosen].imagem;
                    let novoStar4 = champsTier2Arr[chosen].star;
                    let novoCor4 = champsTier2Arr[chosen].cor;
                    let novoCorBorder4 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier2Arr[chosen].origem;
                    let novoClasse4 = champsTier2Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 26 && sorteioOdds4 <= 55) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier3Arr[chosen].nome;
                    let novoImg4 = champsTier3Arr[chosen].imagem;
                    let novoStar4 = champsTier3Arr[chosen].star;
                    let novoCor4 = champsTier3Arr[chosen].cor;
                    let novoCorBorder4 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier3Arr[chosen].origem;
                    let novoClasse4 = champsTier3Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else if (sorteioOdds4 >= 56 && sorteioOdds4 <= 85) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier4Arr[chosen].nome;
                    let novoImg4 = champsTier4Arr[chosen].imagem;
                    let novoStar4 = champsTier4Arr[chosen].star;
                    let novoCor4 = champsTier4Arr[chosen].cor;
                    let novoCorBorder4 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier4Arr[chosen].origem;
                    let novoClasse4 = champsTier4Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp4(chosen);

                    let novoChampBox4 = champsTier5Arr[chosen].nome;
                    let novoImg4 = champsTier5Arr[chosen].imagem;
                    let novoStar4 = champsTier5Arr[chosen].star;
                    let novoCor4 = champsTier5Arr[chosen].cor;
                    let novoCorBorder4 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem4 = champsTier5Arr[chosen].origem;
                    let novoClasse4 = champsTier5Arr[chosen].classe;
                    setOrigem4(novoOrigem4);
                    setClasse4(novoClasse4);
                    setCorBorder4(novoCorBorder4);
                    setCor4(novoCor4);
                    setChampImg4(novoImg4);
                    setChampionNome4(novoChampBox4);
                    setStarNumber4(novoStar4);

                }

                // BOX5
                if (sorteioOdds5 >= 1 && sorteioOdds5 <= 10) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier1Arr[chosen].nome;
                    let novoImg5 = champsTier1Arr[chosen].imagem;
                    let novoStar5 = champsTier1Arr[chosen].star;
                    let novoCor5 = champsTier1Arr[chosen].cor;
                    let novoCorBorder5 = champsTier1Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier1Arr[chosen].origem;
                    let novoClasse5 = champsTier1Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 11 && sorteioOdds5 <= 25) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier2Arr[chosen].nome;
                    let novoImg5 = champsTier2Arr[chosen].imagem;
                    let novoStar5 = champsTier2Arr[chosen].star;
                    let novoCor5 = champsTier2Arr[chosen].cor;
                    let novoCorBorder5 = champsTier2Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier2Arr[chosen].origem;
                    let novoClasse5 = champsTier2Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);

                } else if (sorteioOdds5 >= 26 && sorteioOdds5 <= 55) {
                    let chosen = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier3Arr[chosen].nome;
                    let novoImg5 = champsTier3Arr[chosen].imagem;
                    let novoStar5 = champsTier3Arr[chosen].star;
                    let novoCor5 = champsTier3Arr[chosen].cor;
                    let novoCorBorder5 = champsTier3Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier3Arr[chosen].origem;
                    let novoClasse5 = champsTier3Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
                else if (sorteioOdds5 >= 56 && sorteioOdds5 <= 85) {
                    let chosen = Math.floor(Math.random() * (10 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier4Arr[chosen].nome;
                    let novoImg5 = champsTier4Arr[chosen].imagem;
                    let novoStar5 = champsTier4Arr[chosen].star;
                    let novoCor5 = champsTier4Arr[chosen].cor;
                    let novoCorBorder5 = champsTier4Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier4Arr[chosen].origem;
                    let novoClasse5 = champsTier4Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
                else {
                    let chosen = Math.floor(Math.random() * (8 - 1)) + 1
                    setchamp5(chosen);

                    let novoChampBox5 = champsTier5Arr[chosen].nome;
                    let novoImg5 = champsTier5Arr[chosen].imagem;
                    let novoStar5 = champsTier5Arr[chosen].star;
                    let novoCor5 = champsTier5Arr[chosen].cor;
                    let novoCorBorder5 = champsTier5Arr[chosen].corBorda;
                    let novoOrigem5 = champsTier5Arr[chosen].origem;
                    let novoClasse5 = champsTier5Arr[chosen].classe;
                    setOrigem5(novoOrigem5);
                    setClasse5(novoClasse5);
                    setCorBorder5(novoCorBorder5);
                    setCor5(novoCor5);
                    setChampImg5(novoImg5);
                    setChampionNome5(novoChampBox5);
                    setStarNumber5(novoStar5);
                }
            }


        }

    }

    return (

        <div className="containerStore">

            <div className="Logo">
                <div className="logoIcon"></div>
            </div>

            <div className="startBox">
                <button id="startId" className="buttonStart" type="button" onClick={start} onMouseDown={set4}>START</button>
                <button className="buttonStart" type="button" onClick={reloadPage} onMouseDown={startPaper}>RESTART</button>
                {/* <div className="hide">Experi??ncia para o pr??ximo level: {maxExp - currentExp}</div>
                <div className="teste2">Experi??ncia para o pr??ximo level: {maxExp - currentExp}</div> */}
            </div>

            <div className="wholeStore">
                <div className="levelBar">
                    <div className="level">
                        <div className="levelNumber" >
                            <p>Lvl. {level}</p>
                            <p className="teste">{currentExp}/{maxExp}</p>
                        </div>
                        <div className="levelNumber">
                            <div className="myButtonLvl">
                                <button id="maisUmXpId" className="levelUp" type="button" onClick={levelUp} onMouseDown={startClick}>
                                    <button className="upXPOut" type="button">
                                        <div className="upXP"></div>
                                        <div className="mais1">+1</div>
                                    </button>
                                </button>
                                <button id="menosUmXpId" className="levelDown" onClick={levelDown} onMouseDown={startClick}>
                                    <button className="downXPOut" type="button">
                                        <div className="downXP"></div>
                                        <div className="mais1">-1</div>
                                    </button>
                                </button>
                                <button className="resetLevel" onClick={resetLevel} onMouseDown={startClick}>
                                    <button className="resetOut" type="button">
                                        <div className="resetXP"></div>

                                    </button>
                                </button>
                            </div>
                        </div>
                        {/* <div className="levelUpgrade">
                        <div className="levelUpgradeIn"></div>
                    </div> */}
                    </div>

                    <div className="odds">
                        <div className="oneStar">{oddsOneStar}%</div>
                        <div className="twoStar">{oddsTwoStar}%</div>
                        <div className="threeStar">{oddsThreeStar}%</div>
                        <div className="fourStar">{oddsFourStar}%</div>
                        <div className="fiveStar">{oddsFiveStar}%</div>
                    </div>
                    <div className="gold">
                        <div className="goldIcon"></div>
                        <div className="goldValue">{gold}</div>
                    </div>

                    <div className="buttonsGold">
                        <button id="maxId" className="upGoldOut" type="button" onClick={maximo} onMouseDown={startMoney}>
                            {/* <div className="upGold"></div> */}
                            <div className="mais5">M??x.</div>
                        </button>
                        <button id="minimoId" className="downGoldOut" type="button" onClick={minimo} onMouseDown={startMoney}>
                            {/* <div className="downGold"></div> */}
                            <div className="mais5">Min.</div>
                        </button>
                    </div>
                    <div className="buttonsGold">
                        <button id="plusFiveId" className="upGoldOut" type="button" onClick={plusFiveGold} onMouseDown={startMoney}>
                            <div className="upGold"></div>
                            <div className="mais5">+5</div>
                        </button>
                        <button id="minusFiveId" className="downGoldOut" type="button" onClick={minusFiveGold} onMouseDown={startMoney}>
                            <div className="downGold"></div>
                            <div className="mais5">- 5</div>
                        </button>
                    </div>

                    <button className="buttonsGold" type="button" onClick={resetGold} onMouseDown={startMoney}>
                        <div className="resetGold"></div>
                    </button>

                    <button type="button" className="lock" onClick={cadeado} onMouseDown={startPadlock}>
                        <div className="lockIconOpen"></div>
                        <div id="cadeadoFechadoId" className="lockIconClosed"></div>

                    </button>

                </div>

                <div className="store">
                    <div className="levelBox">


                        <button className="botaoExternoBuyXP" >
                            <button id="buyXpId" className="myButton buy" type="button" onClick={buyXP} onMouseDown={startPaper2}>
                                <p className="buyXp">
                                    Buy XP
                            <div className="valueAndIconContainer">
                                        <p className="buyValue">4</p>
                                        <div className="buyGoldIcon"></div>
                                    </div>
                                </p>
                                <div className="buyXpIcon"></div>
                            </button>
                        </button>

                        <button className="botaoExternoRefresh">
                            <button id="refreshId" className="myButton refresh" type="button" onClick={refreshStore} onMouseDown={startPaper}>
                                <p className="refreshBox">
                                    Refresh
                        <div className="valueAndIconContainer">
                                        <p className="buyValue">2</p>
                                        <div className="buyGoldIcon"></div>
                                    </div>
                                </p>
                                <div className="refreshIcon"></div>
                            </button>
                        </button>
                    </div>

                    <div className="championBox" id="box1" style={{ borderColor: corBorder1 }}
                        onClick={BuyChamp1} onMouseDown={startPaper}>
                        <img src={champImg1} className="champImg"></img>
                        <div className="origemEClasse">
                            {/* <p>{sorteio1}</p>
                            <p>{champ1}</p> */}
                            <p>{origem1}</p>
                            <p>{classe1}</p>
                        </div>
                        <div className="champNome" style={{ backgroundImage: cor1 }}>
                            {championNome1}
                            <div className="valueAndIconContainer">
                                <div id="iconInicial1" className="buyGoldIcon iconInicial"></div>
                                <p className="buyValue">{starNumber1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="championBox" id="box2" style={{ borderColor: corBorder2 }}
                        onClick={BuyChamp2} onMouseDown={startPaper}>
                        <img src={champImg2} className="champImg"></img>
                        <div className="origemEClasse">
                            {/* <p>{sorteio2}</p>
                            <p>{champ2}</p> */}
                            <p>{origem2}</p>
                            <p>{classe2}</p>
                        </div>
                        <div className="champNome" style={{ backgroundImage: cor2 }}>
                            {championNome2}
                            <div className="valueAndIconContainer">
                                <div id="iconInicial2" className="buyGoldIcon"></div>
                                <p className="buyValue">{starNumber2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="championBox" id="box3" style={{ borderColor: corBorder3 }}
                        onClick={BuyChamp3} onMouseDown={startPaper}>
                        <img src={champImg3} className="champImg"></img>
                        <div className="origemEClasse">
                            {/* <p>{sorteio3}</p>
                            <p>{champ3}</p> */}
                            <p>{origem3}</p>
                            <p>{classe3}</p>
                        </div>
                        <div className="champNome" style={{ backgroundImage: cor3 }}>
                            {championNome3}
                            <div className="valueAndIconContainer">
                                <div id="iconInicial3" className="buyGoldIcon"></div>
                                <p className="buyValue">{starNumber3}</p>
                            </div>
                        </div>
                    </div>
                    <div className="championBox" id="box4" style={{ borderColor: corBorder4 }}
                        onClick={BuyChamp4} onMouseDown={startPaper}>
                        <img src={champImg4} className="champImg"></img>
                        <div className="origemEClasse">
                            {/* <p>{sorteio4}</p>
                            <p>{champ4}</p> */}
                            <p>{origem4}</p>
                            <p>{classe4}</p>
                        </div>
                        <div className="champNome" style={{ backgroundImage: cor4 }}>
                            {championNome4}
                            <div className="valueAndIconContainer">
                                <div id="iconInicial4" className="buyGoldIcon"></div>
                                <p className="buyValue">{starNumber4}</p>
                            </div>
                        </div>
                    </div>
                    <div className="championBox" id="box5" style={{ borderColor: corBorder5 }}
                        onClick={BuyChamp5} onMouseDown={startPaper}>
                        <img src={champImg5} className="champImg"></img>
                        <div className="origemEClasse">
                            {/* <p>{sorteio5}</p>
                            <p>{champ5}</p> */}
                            <p>{origem5}</p>
                            <p>{classe5}</p>
                        </div>
                        <div className="champNome" style={{ backgroundImage: cor5 }}>
                            {championNome5}
                            <div className="valueAndIconContainer">
                                <div id="iconInicial5" className="buyGoldIcon"></div>
                                <p className="buyValue">{starNumber5}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

    // ALTERARANDO ODDS DE ACORDO COM O LEVEL

    // const level1Arr = [100, 0, 0, 0, 0];
    // const level2Arr = [100, 0, 0, 0, 0];
    // const level3Arr = [75, 25, 0, 0, 0];
    // const level4Arr = [55, 30, 15, 0, 0];
    // const level5Arr = [45, 33, 20, 2, 0];
    // const level6Arr = [35, 35, 25, 5, 0];
    // const level7Arr = [19, 35, 30, 15, 1];
    // const level8Arr = [15, 20, 35, 25, 5];
    // const level9Arr = [10, 15, 30, 30, 15];