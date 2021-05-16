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

import champs from '../champs.json';
import champsTier1Arr from '../champsTier1.json';
import champsTier2Arr from '../champsTier2.json';

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

    // MOSTRAR DIVS
    // const mostrar = () => {
    //     document.getElementById("levelId").classList.toggle("mostrar");
    // }
    // const ocultar = () => {
    //     document.getElementById("levelId").classList.add("none");
    // }

    // START
    const start = () => {

        document.getElementById("iconInicial1").style.display = "flex";
        document.getElementById("iconInicial2").style.display = "flex";
        document.getElementById("iconInicial3").style.display = "flex";
        document.getElementById("iconInicial4").style.display = "flex";
        document.getElementById("iconInicial5").style.display = "flex";

        document.getElementById("startId").classList.add("botaoDestivadoStart");

        if (championNome1 === "Welcome") {


            let randomBox1 = Math.floor(Math.random() * 3);
            let novoChampBox1 = champs[0][randomBox1].nome;
            let novoImg1 = champs[0][randomBox1].imagem;
            let novoStar1 = champs[0][randomBox1].star;
            let novoCor1 = champs[0][randomBox1].cor;
            let novoCorBorder1 = champs[0][randomBox1].corBorda;
            let novoOrigem1 = champs[0][randomBox1].origem;
            let novoClasse1 = champs[0][randomBox1].classe;
            setOrigem1(novoOrigem1);
            setClasse1(novoClasse1);
            setCorBorder1(novoCorBorder1);
            setCor1(novoCor1);
            setChampImg1(novoImg1);
            setChampionNome1(novoChampBox1);
            setStarNumber1(novoStar1);

            let randomBox2 = Math.floor(Math.random() * 3);
            let novoChampBox2 = champs[0][randomBox2].nome;
            let novoImg2 = champs[0][randomBox2].imagem;
            let novoStar2 = champs[0][randomBox2].star;
            let novoCor2 = champs[0][randomBox2].cor;
            let novoCorBorder2 = champs[0][randomBox2].corBorda;
            let novoOrigem2 = champs[0][randomBox2].origem;
            let novoClasse2 = champs[0][randomBox2].classe;
            setOrigem2(novoOrigem2);
            setClasse2(novoClasse2);
            setCorBorder2(novoCorBorder2);
            setCor2(novoCor2);
            setChampImg2(novoImg2);
            setChampionNome2(novoChampBox2);
            setStarNumber2(novoStar2);

            let randomBox3 = Math.floor(Math.random() * 3);
            let novoChampBox3 = champs[0][randomBox3].nome;
            let novoImg3 = champs[0][randomBox3].imagem;
            let novoStar3 = champs[0][randomBox3].star;
            let novoCor3 = champs[0][randomBox3].cor;
            let novoCorBorder3 = champs[0][randomBox3].corBorda;
            let novoOrigem3 = champs[0][randomBox3].origem;
            let novoClasse3 = champs[0][randomBox3].classe;
            setOrigem3(novoOrigem3);
            setClasse3(novoClasse3);
            setCorBorder3(novoCorBorder3);
            setCor3(novoCor3);
            setChampImg3(novoImg3);
            setChampionNome3(novoChampBox3);
            setStarNumber3(novoStar3);

            let randomBox4 = Math.floor(Math.random() * 3);
            let novoChampBox4 = champs[0][randomBox4].nome;
            let novoImg4 = champs[0][randomBox4].imagem;
            let novoStar4 = champs[0][randomBox4].star;
            let novoCor4 = champs[0][randomBox4].cor;
            let novoCorBorder4 = champs[0][randomBox4].corBorda;
            let novoOrigem4 = champs[0][randomBox4].origem;
            let novoClasse4 = champs[0][randomBox4].classe;
            setOrigem4(novoOrigem4);
            setClasse4(novoClasse4);
            setCorBorder4(novoCorBorder4);
            setCor4(novoCor4);
            setChampImg4(novoImg4);
            setChampionNome4(novoChampBox4);
            setStarNumber4(novoStar4);

            let randomBox5 = Math.floor(Math.random() * 3);
            let novoChampBox5 = champs[0][randomBox5].nome;
            let novoImg5 = champs[0][randomBox5].imagem;
            let novoStar5 = champs[0][randomBox5].star;
            let novoCor5 = champs[0][randomBox5].cor;
            let novoCorBorder5 = champs[0][randomBox5].corBorda;
            let novoOrigem5 = champs[0][randomBox5].origem;
            let novoClasse5 = champs[0][randomBox5].classe;
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
        // setGold(50);
        // setLevel(1);      
        window.location.href = window.location.href;
    }
    //COMPRANDO CHAMP
    const BuyChamp1 = () => {
        if (championNome1 != "Welcome") {
            setGold(gold - 2)
            document.getElementById("box1").classList.add("none");
        }
    }
    const BuyChamp2 = () => {
        if (championNome1 != "Welcome") {
            setGold(gold - 2)
            document.getElementById("box2").classList.add("none");
        }
    }
    const BuyChamp3 = () => {
        if (championNome1 != "Welcome") {
            setGold(gold - 2)
            document.getElementById("box3").classList.add("none");
        }
    }
    const BuyChamp4 = () => {
        if (championNome1 != "Welcome") {
            setGold(gold - 2)
            document.getElementById("box4").classList.add("none");
        }
    }
    const BuyChamp5 = () => {
        if (championNome1 != "Welcome") {
            setGold(gold - 2)
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
        if (championNome1 != "Welcome") {
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
        if (gold <= 3) {
            document.getElementById("buyXpId").classList.add("botaoDestivado");
            // document.getElementById("buyXpId").setAttribute("disabled", true);

            document.getElementById("minusFiveId").classList.add("botaoDestivado");

            if (gold <= 1) {
                document.getElementById("refreshId").classList.add("botaoDestivado");
                // document.getElementById("buyXpId").setAttribute("disabled", true);
            }
        } else if (gold === 100) {
            document.getElementById("plusFiveId").classList.add("botaoDestivado");
        } else {
            document.getElementById("buyXpId").classList.remove("botaoDestivado");
            document.getElementById("refreshId").classList.remove("botaoDestivado");
            document.getElementById("plusFiveId").classList.remove("botaoDestivado");
            document.getElementById("minusFiveId").classList.remove("botaoDestivado");

            // document.getElementById("refreshId").setAttribute("disabled", false);
            // document.getElementById("buyXpId").setAttribute("disabled", false);
        }
    }, [gold])

    // ATUALIZAR LOJA
    const refreshStore = () => {
        if (championNome1 != "Welcome") {
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

            // LEVEL 1
            if (level === 1 || level === 2 && gold > 1) {
                let randomBox1 = Math.floor(Math.random() * 3);
                let novoChampBox1 = champs[0][randomBox1].nome;
                let novoImg1 = champs[0][randomBox1].imagem;
                let novoStar1 = champs[0][randomBox1].star;
                let novoCor1 = champs[0][randomBox1].cor;
                let novoCorBorder1 = champs[0][randomBox1].corBorda;
                let novoOrigem1 = champs[0][randomBox1].origem;
                let novoClasse1 = champs[0][randomBox1].classe;
                setOrigem1(novoOrigem1);
                setClasse1(novoClasse1);
                setCorBorder1(novoCorBorder1);
                setCor1(novoCor1);
                setChampImg1(novoImg1);
                setChampionNome1(novoChampBox1);
                setStarNumber1(novoStar1);

                let randomBox2 = Math.floor(Math.random() * 3);
                let novoChampBox2 = champs[0][randomBox2].nome;
                let novoImg2 = champs[0][randomBox2].imagem;
                let novoStar2 = champs[0][randomBox2].star;
                let novoCor2 = champs[0][randomBox2].cor;
                let novoCorBorder2 = champs[0][randomBox2].corBorda;
                let novoOrigem2 = champs[0][randomBox2].origem;
                let novoClasse2 = champs[0][randomBox2].classe;
                setOrigem2(novoOrigem2);
                setClasse2(novoClasse2);
                setCorBorder2(novoCorBorder2);
                setCor2(novoCor2);
                setChampImg2(novoImg2);
                setChampionNome2(novoChampBox2);
                setStarNumber2(novoStar2);

                let randomBox3 = Math.floor(Math.random() * 3);
                let novoChampBox3 = champs[0][randomBox3].nome;
                let novoImg3 = champs[0][randomBox3].imagem;
                let novoStar3 = champs[0][randomBox3].star;
                let novoCor3 = champs[0][randomBox3].cor;
                let novoCorBorder3 = champs[0][randomBox3].corBorda;
                let novoOrigem3 = champs[0][randomBox3].origem;
                let novoClasse3 = champs[0][randomBox3].classe;
                setOrigem3(novoOrigem3);
                setClasse3(novoClasse3);
                setCorBorder3(novoCorBorder3);
                setCor3(novoCor3);
                setChampImg3(novoImg3);
                setChampionNome3(novoChampBox3);
                setStarNumber3(novoStar3);

                let randomBox4 = Math.floor(Math.random() * 3);
                let novoChampBox4 = champs[0][randomBox4].nome;
                let novoImg4 = champs[0][randomBox4].imagem;
                let novoStar4 = champs[0][randomBox4].star;
                let novoCor4 = champs[0][randomBox4].cor;
                let novoCorBorder4 = champs[0][randomBox4].corBorda;
                let novoOrigem4 = champs[0][randomBox4].origem;
                let novoClasse4 = champs[0][randomBox4].classe;
                setOrigem4(novoOrigem4);
                setClasse4(novoClasse4);
                setCorBorder4(novoCorBorder4);
                setCor4(novoCor4);
                setChampImg4(novoImg4);
                setChampionNome4(novoChampBox4);
                setStarNumber4(novoStar4);

                let randomBox5 = Math.floor(Math.random() * 3);
                let novoChampBox5 = champs[0][randomBox5].nome;
                let novoImg5 = champs[0][randomBox5].imagem;
                let novoStar5 = champs[0][randomBox5].star;
                let novoCor5 = champs[0][randomBox5].cor;
                let novoCorBorder5 = champs[0][randomBox5].corBorda;
                let novoOrigem5 = champs[0][randomBox5].origem;
                let novoClasse5 = champs[0][randomBox5].classe;
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
                let randomBox1 = Math.floor(Math.random() * 3);
                let novoChampBox1 = champs[1][randomBox1].nome;
                let novoImg1 = champs[1][randomBox1].imagem;
                let novoStar1 = champs[1][randomBox1].star;
                let novoCor1 = champs[1][randomBox1].cor;
                let novoCorBorder1 = champs[1][randomBox1].corBorda;
                let novoOrigem1 = champs[1][randomBox1].origem;
                let novoClasse1 = champs[1][randomBox1].classe;
                setOrigem1(novoOrigem1);
                setClasse1(novoClasse1);
                setCorBorder1(novoCorBorder1);
                setCor1(novoCor1);
                setChampImg1(novoImg1);
                setChampionNome1(novoChampBox1);
                setStarNumber1(novoStar1);

                let randomBox2 = Math.floor(Math.random() * 3);
                let novoChampBox2 = champs[1][randomBox2].nome;
                let novoImg2 = champs[1][randomBox2].imagem;
                let novoStar2 = champs[1][randomBox2].star;
                let novoCor2 = champs[1][randomBox2].cor;
                let novoCorBorder2 = champs[1][randomBox2].corBorda;
                let novoOrigem2 = champs[1][randomBox2].origem;
                let novoClasse2 = champs[1][randomBox2].classe;
                setOrigem2(novoOrigem2);
                setClasse2(novoClasse2);
                setCorBorder2(novoCorBorder2);
                setCor2(novoCor2);
                setChampImg2(novoImg2);
                setChampionNome2(novoChampBox2);
                setStarNumber2(novoStar2);

                let randomBox3 = Math.floor(Math.random() * 3);
                let novoChampBox3 = champs[1][randomBox3].nome;
                let novoImg3 = champs[1][randomBox3].imagem;
                let novoStar3 = champs[1][randomBox3].star;
                let novoCor3 = champs[1][randomBox3].cor;
                let novoCorBorder3 = champs[1][randomBox3].corBorda;
                let novoOrigem3 = champs[1][randomBox3].origem;
                let novoClasse3 = champs[1][randomBox3].classe;
                setOrigem3(novoOrigem3);
                setClasse3(novoClasse3);
                setCorBorder3(novoCorBorder3);
                setCor3(novoCor3);
                setChampImg3(novoImg3);
                setChampionNome3(novoChampBox3);
                setStarNumber3(novoStar3);

                let randomBox4 = Math.floor(Math.random() * 3);
                let novoChampBox4 = champs[1][randomBox4].nome;
                let novoImg4 = champs[1][randomBox4].imagem;
                let novoStar4 = champs[1][randomBox4].star;
                let novoCor4 = champs[1][randomBox4].cor;
                let novoCorBorder4 = champs[1][randomBox4].corBorda;
                let novoOrigem4 = champs[1][randomBox4].origem;
                let novoClasse4 = champs[1][randomBox4].classe;
                setOrigem4(novoOrigem4);
                setClasse4(novoClasse4);
                setCorBorder4(novoCorBorder4);
                setCor4(novoCor4);
                setChampImg4(novoImg4);
                setChampionNome4(novoChampBox4);
                setStarNumber4(novoStar4);

                let randomBox5 = Math.floor(Math.random() * 3);
                let novoChampBox5 = champs[1][randomBox5].nome;
                let novoImg5 = champs[1][randomBox5].imagem;
                let novoStar5 = champs[1][randomBox5].star;
                let novoCor5 = champs[1][randomBox5].cor;
                let novoCorBorder5 = champs[1][randomBox5].corBorda;
                let novoOrigem5 = champs[1][randomBox5].origem;
                let novoClasse5 = champs[1][randomBox5].classe;
                setOrigem5(novoOrigem5);
                setClasse5(novoClasse5);
                setCorBorder5(novoCorBorder5);
                setCor5(novoCor5);
                setChampImg5(novoImg5);
                setChampionNome5(novoChampBox5);
                setStarNumber5(novoStar5);

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
                    let champ1Lvl4 = Math.floor(Math.random() * (13 - 1)) + 1
                    setchamp1(champ1Lvl4);

                    let novoChampBox1 = champsTier2Arr[champ1Lvl4].nome;
                    let novoImg1 = champsTier2Arr[champ1Lvl4].imagem;
                    let novoStar1 = champsTier2Arr[champ1Lvl4].star;
                    let novoCor1 = champsTier2Arr[champ1Lvl4].cor;
                    let novoCorBorder1 = champsTier2Arr[champ1Lvl4].corBorda;
                    let novoOrigem1 = champsTier2Arr[champ1Lvl4].origem;
                    let novoClasse1 = champsTier2Arr[champ1Lvl4].classe;
                    setOrigem1(novoOrigem1);
                    setClasse1(novoClasse1);
                    setCorBorder1(novoCorBorder1);
                    setCor1(novoCor1);
                    setChampImg1(novoImg1);
                    setChampionNome1(novoChampBox1);
                    setStarNumber1(novoStar1);
                    
                } else {
                    setchamp1("Lux");
                }

                // BOX2




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
                {/* <div className="hide">Experiência para o próximo level: {maxExp - currentExp}</div>
                <div className="teste2">Experiência para o próximo level: {maxExp - currentExp}</div> */}
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

                    <button type="button" className="lock" onMouseDown={startPadlock}>
                        <div className="lockIconClosed"></div>
                        <div className="lockIconOpen"></div>
                    </button>
                </div>

                <div className="store">
                    <div className="levelBox">


                        <button className="botaoExternoBuyXP">
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
                            <p>{sorteio1}</p>
                            <p>{champ1}</p>
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
                            <p>{sorteio2}</p>
                            <p>{champ2}</p>
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
                            <p>{sorteio3}</p>
                            <p>{champ3}</p>
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
                            <p>{sorteio4}</p>
                            <p>{champ4}</p>
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
                            <p>{sorteio5}</p>
                            <p>{champ5}</p>
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