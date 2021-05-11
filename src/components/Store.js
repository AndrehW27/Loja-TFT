import { useState, useEffect } from 'react';
import '../styles/store.css';
import paperSound from '../assets/paper.mp3';
import paperSound2 from '../assets/paper2.mp3';
import moneySound from '../assets/money.mp3';
import padlockSound from '../assets/padlock.mp3';
import clickSound from '../assets/click-sound.mp3';
import championsArr from '../champions.json';


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

    const [champions, setChampions] = useState([]);
    const [gold, setGold] = useState(50);
    const [level, setLevel] = useState(1);
    const [currentExp, setCurrentExp] = useState(0);
    const [maxExp, setMaxExp] = useState(2);

    const [oddsOneStar, setOddsOneStar] = useState(100);
    const [oddsTwoStar, setOddsTwoStar] = useState(0);
    const [oddsThreeStar, setOddsThreeStar] = useState(0);
    const [oddsFourStar, setOddsFourStar] = useState(0);
    const [oddsFiveStar, setOddsFiveStar] = useState(0);


    const [championBox1, setChampionBox1] = useState(1);
    const [championBox2, setChampionBox2] = useState(1);
    const [championBox3, setChampionBox3] = useState(1);
    const [championBox4, setChampionBox4] = useState(1);
    const [championBox5, setChampionBox5] = useState(1);

    // let championsvar = JSON.stringify(championsArr[0]);
    // setChampions(championsvar);

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
        }
    }
    const levelDown = () => {
        if (level > 1) {
            setLevel(level - 1)
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
            if (currentExp >= maxExp) {
                setMaxExp(6);
            }
        }
    }

    // ATUALIZAR LOJA
    const refreshStore = () => {
        let randomBox1 = Math.floor(Math.random() * 10)
        setChampionBox1(randomBox1);

        let randomBox2 = Math.floor(Math.random() * 10)
        setChampionBox2(randomBox2);

        let randomBox3 = Math.floor(Math.random() * 10)
        setChampionBox3(randomBox3);

        let randomBox4 = Math.floor(Math.random() * 10)
        setChampionBox4(randomBox4);

        let randomBox5 = Math.floor(Math.random() * 10)
        setChampionBox5(randomBox5);

        if (gold > 1) {
            setGold(gold - 2)
        }
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
    useEffect(() => {
        if (level === 1 || level === 2) {
            setOddsOneStar(100);
            setOddsTwoStar(0);
            setOddsThreeStar(0);
            setOddsFourStar(0);
            setOddsFiveStar(0);
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
        } else if (level === 9) {
            setOddsOneStar(10);
            setOddsTwoStar(15);
            setOddsThreeStar(30);
            setOddsFourStar(30);
            setOddsFiveStar(15);
        }
    }, [level])

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
                    <button className="upGoldOut" type="button" onClick={plusFiveGold} onMouseDown={startMoney}>
                        <div className="upGold"></div>
                        <div className="mais5">+5</div>
                    </button>
                    <button className="downGoldOut" type="button" onClick={minusFiveGold} onMouseDown={startMoney}>
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
                        <button className="levelUp" type="button" onClick={levelUp} onMouseDown={startClick}>
                            <button className="upXPOut" type="button">
                                <div className="upXP"></div>
                                <div className="mais1">+1</div>
                            </button>
                        </button>
                        <button className="levelDown" onClick={levelDown} onMouseDown={startClick}>
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

                    <button className="myButton buy" type="button" onClick={buyXP} onMouseDown={startPaper2}>
                        <p className="buyXp">
                            Buy XP
                            <div className="valueAndIconContainer">
                                <p className="buyValue">4</p>
                                <div className="buyGold"></div>
                            </div>
                        </p>
                        <div className="buyXpIcon"></div>
                    </button>
                    <button className="myButton refresh" type="button" onClick={refreshStore} onMouseDown={startPaper}>
                        <p className="refreshBox">
                            Refresh
                        <div className="valueAndIconContainer">
                                <p className="buyValue">2</p>
                                <div className="buyGold"></div>
                            </div>
                        </p>
                        <div className="refreshIcon"></div>
                    </button>
                </div>

                <div className="championBox" id="1">{championBox1}</div>
                <div className="championBox" id="2">{championBox2}</div>
                <div className="championBox" id="3">{championBox3}</div>
                <div className="championBox" id="4">{championBox4}</div>
                <div className="championBox" id="5">{championBox5}</div>
            </div>
        </div>
    );
}