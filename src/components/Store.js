import { useState, useEffect } from 'react';
import '../styles/store.css';

import imgInicial from '../assets/tft.jpg';

import paperSound from '../assets/paper.mp3';
import paperSound2 from '../assets/paper2.mp3';
import moneySound from '../assets/money.mp3';
import padlockSound from '../assets/padlock.mp3';
import clickSound from '../assets/click-sound.mp3';
import champs1 from '../champs1.json';

export default function Bottom() {

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

    const [gold, setGold] = useState(50);
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [maxExp, setMaxExp] = useState(2);

    const [oddsOneStar, setOddsOneStar] = useState(100);
    const [oddsTwoStar, setOddsTwoStar] = useState(0);
    const [oddsThreeStar, setOddsThreeStar] = useState(0);
    const [oddsFourStar, setOddsFourStar] = useState(0);
    const [oddsFiveStar, setOddsFiveStar] = useState(0);

    const [championNome1, setChampionNome1] = useState("Bem-vindo");
    const [champImg1, setChampImg1] = useState(imgInicial);
    const [starNumber1, setStarNumber1] = useState();
    const [cor1, setCor1] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder1, setCorBorder1] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome2, setChampionNome2] = useState("Bem-vindo");
    const [champImg2, setChampImg2] = useState(imgInicial);
    const [starNumber2, setStarNumber2] = useState();
    const [cor2, setCor2] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder2, setCorBorder2] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome3, setChampionNome3] = useState("Bem-vindo");
    const [champImg3, setChampImg3] = useState(imgInicial);
    const [starNumber3, setStarNumber3] = useState();
    const [cor3, setCor3] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder3, setCorBorder3] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome4, setChampionNome4] = useState("Bem-vindo");
    const [champImg4, setChampImg4] = useState(imgInicial);
    const [starNumber4, setStarNumber4] = useState();
    const [cor4, setCor4] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder4, setCorBorder4] = useState("rgba(21, 54, 54, 0.836)");

    const [championNome5, setChampionNome5] = useState("Bem-vindo");
    const [champImg5, setChampImg5] = useState(imgInicial);
    const [starNumber5, setStarNumber5] = useState();
    const [cor5, setCor5] = useState("rgba(21, 54, 54, 0.836)");
    const [corBorder5, setCorBorder5] = useState("rgba(21, 54, 54, 0.836)");


    // ALTERANDO O GOLD
    const plusFiveGold = () => {
        if (gold < 96) {
            setGold(gold + 5)
        }
    }

    const minusFiveGold = () => {
        if (gold > 4) {
            setGold(gold - 5)
        }
    }

    const resetGold = () => {
        setGold(50)
    }

    // ALTERANDO O LEVEL
    const levelUp = () => {
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

    const levelDown = () => {
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

    const resetLevel = () => {
        setLevel(1);
        setCurrentExp(0);
        setMaxExp(2);
    }

    // COMPRANDO XP
    const buyXP = () => {
        if (gold > 3) {
            setGold(gold - 4)
            setCurrentExp(currentExp + 4);
        }
    }

    // MONITORARANDO XP ATUAL
    useEffect(() => {
        if (currentExp >= maxExp) {
            setLevel(level + 1)
            setCurrentExp(0);
        }
    }, [currentExp])

    // MONITORARANDO LEVEL
    useEffect(() => {

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
        } else if (level === 4) {
            setOddsOneStar(55);
            setOddsTwoStar(30);
            setOddsThreeStar(15);
            setOddsFourStar(0);
            setOddsFiveStar(0);
        } else if (level === 5) {
            setOddsOneStar(45);
            setOddsTwoStar(33);
            setOddsThreeStar(20);
            setOddsFourStar(2);
            setOddsFiveStar(0);
        } else if (level === 6) {
            setOddsOneStar(35);
            setOddsTwoStar(35);
            setOddsThreeStar(25);
            setOddsFourStar(5);
            setOddsFiveStar(0);
        } else if (level === 7) {
            setOddsOneStar(19);
            setOddsTwoStar(35);
            setOddsThreeStar(30);
            setOddsFourStar(15);
            setOddsFiveStar(1);
        } else if (level === 8) {
            setOddsOneStar(15);
            setOddsTwoStar(20);
            setOddsThreeStar(35);
            setOddsFourStar(25);
            setOddsFiveStar(5);
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

        // document.getElementById("refreshId").setAttribute("disabled", true);
        // document.getElementById("refreshId").classList.toggle("teste");  

        document.getElementById("iconInicial1").style.display = "flex";
        document.getElementById("iconInicial2").style.display = "flex";
        document.getElementById("iconInicial3").style.display = "flex";
        document.getElementById("iconInicial4").style.display = "flex";
        document.getElementById("iconInicial5").style.display = "flex";

        // LEVEL 1
        // if (level === 1 && gold > 1) {
        if (gold > 1) {
            let randomBox1 = Math.floor(Math.random() * 3);
            let novoChampBox1 = champs1[randomBox1].nome;
            let novoImg1 = champs1[randomBox1].imagem;
            let novoStar1 = champs1[randomBox1].star;
            let novoCor1 = champs1[randomBox1].cor;
            let novoCorBorder1 = champs1[randomBox1].cor;
            setCorBorder1(novoCorBorder1);
            setCor1(novoCor1);
            setChampImg1(novoImg1);
            setChampionNome1(novoChampBox1);
            setStarNumber1(novoStar1);


            let randomBox2 = Math.floor(Math.random() * 3);
            let novoChampBox2 = champs1[randomBox2].nome;
            let novoImg2 = champs1[randomBox2].imagem;
            let novoStar2 = champs1[randomBox2].star;
            let novoCor2 = champs1[randomBox2].cor;
            let novoCorBorder2 = champs1[randomBox2].cor;
            setCorBorder2(novoCorBorder2);
            setCor2(novoCor2);
            setChampImg2(novoImg2);
            setChampionNome2(novoChampBox2);
            setStarNumber2(novoStar2);


            let randomBox3 = Math.floor(Math.random() * 3);
            let novoChampBox3 = champs1[randomBox3].nome;
            let novoImg3 = champs1[randomBox3].imagem;
            let novoStar3 = champs1[randomBox3].star;
            let novoCor3 = champs1[randomBox3].cor;
            let novoCorBorder3 = champs1[randomBox3].cor;
            setCorBorder3(novoCorBorder3);
            setCor3(novoCor3);
            setChampImg3(novoImg3);
            setChampionNome3(novoChampBox3);
            setStarNumber3(novoStar3);

            let randomBox4 = Math.floor(Math.random() * 3);
            let novoChampBox4 = champs1[randomBox4].nome;
            let novoImg4 = champs1[randomBox4].imagem;
            let novoStar4 = champs1[randomBox4].star;
            let novoCor4 = champs1[randomBox4].cor;
            let novoCorBorder4 = champs1[randomBox4].cor;
            setCorBorder4(novoCorBorder4);
            setCor4(novoCor4);
            setChampImg4(novoImg4);
            setChampionNome4(novoChampBox4);
            setStarNumber4(novoStar4);

            let randomBox5 = Math.floor(Math.random() * 3);
            let novoChampBox5 = champs1[randomBox5].nome;
            let novoImg5 = champs1[randomBox5].imagem;
            let novoStar5 = champs1[randomBox5].star;
            let novoCor5 = champs1[randomBox5].cor;
            let novoCorBorder5 = champs1[randomBox5].cor;
            setCorBorder5(novoCorBorder5);
            setCor5(novoCor5);
            setChampImg5(novoImg5);
            setChampionNome5(novoChampBox5);
            setStarNumber5(novoStar5);

            if (gold > 1) {
                setGold(gold - 2)
            }
        }

        // LEVEL 2
    }

    return (

        <div className="containerStore">

            <div className="levelBar">
                <div className="level">
                    <div className="levelNumber">
                        <p>Lvl. {level}</p>
                        <p>{currentExp}/{maxExp}</p>
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
                </div>

                <div className="championBox" id="box1" style={{ borderColor: corBorder1 }}>
                    <img src={champImg1} className="champImg"></img>
                    <div className="champNome1" style={{ backgroundColor: cor1 }}>
                        {championNome1}
                        <div className="valueAndIconContainer">
                            <div id="iconInicial1" className="buyGoldIcon iconInicial"></div>
                            <p className="buyValue">{starNumber1}</p>
                        </div>
                    </div>
                </div>
                <div className="championBox" id="box2" style={{ borderColor: corBorder2 }}>
                    <img src={champImg2} className="champImg"></img>
                    <div className="champNome2" style={{ backgroundColor: cor2 }}>
                        {championNome2}
                        <div className="valueAndIconContainer">
                            <div id="iconInicial2" className="buyGoldIcon"></div>
                            <p className="buyValue">{starNumber2}</p>
                        </div>
                    </div>
                </div>
                <div className="championBox" id="box3" style={{ borderColor: corBorder3 }}>
                    <img src={champImg3} className="champImg"></img>
                    <div className="champNome3" style={{ backgroundColor: cor3 }}>
                        {championNome3}
                        <div className="valueAndIconContainer">
                            <div id="iconInicial3" className="buyGoldIcon"></div>
                            <p className="buyValue">{starNumber3}</p>
                        </div>
                    </div>
                </div>
                <div className="championBox" id="box4" style={{ borderColor: corBorder4 }}>
                    <img src={champImg4} className="champImg"></img>
                    <div className="champNome4" style={{ backgroundColor: cor4 }}>
                        {championNome4}
                        <div className="valueAndIconContainer">
                            <div id="iconInicial4" className="buyGoldIcon"></div>
                            <p className="buyValue">{starNumber4}</p>
                        </div>
                    </div>
                </div>
                <div className="championBox" id="box5" style={{ borderColor: corBorder5 }}>
                    <img src={champImg5} className="champImg"></img>
                    <div className="champNome5" style={{ backgroundColor: cor5 }}>
                        {championNome5}
                        <div className="valueAndIconContainer">
                            <div id="iconInicial5" className="buyGoldIcon"></div>
                            <p className="buyValue">{starNumber5}</p>
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