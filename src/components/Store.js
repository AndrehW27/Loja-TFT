import { useState } from 'react';
import '../styles/store.css';

export default function Bottom() {

    const [level, SetLevel] = useState(1);

    const [championBox1, SetChampionBox1] = useState(1);
    const [championBox2, SetChampionBox2] = useState(1);
    const [championBox3, SetChampionBox3] = useState(1);
    const [championBox4, SetChampionBox4] = useState(1);
    const [championBox5, SetChampionBox5] = useState(1);

    const level1Arr = [100, 0, 0, 0, 0];
    const level2Arr = [100, 0, 0, 0, 0];
    const level3Arr = [75, 25, 0, 0, 0];
    const level4Arr = [55, 30, 15, 0, 0];
    const level5Arr = [45, 33, 20, 2, 0];
    const level6Arr = [35, 35, 25, 5, 0];
    const level7Arr = [19, 35, 30, 15, 1];
    const level8Arr = [15, 20, 35, 25, 5];
    const level9Arr = [10, 15, 30, 30, 15];

    const levelUp = () => {
        if (level < 9) {
            SetLevel(level + 1)
        }
    }
    const levelDown = () => {
        if (level > 1) {
            SetLevel(level - 1)
        }
    }
    const resetLevel = () => {
        SetLevel(1)
    }

    const changeBoxNumbers = () => {
        let randomBox1 = Math.floor(Math.random() * 10)
        SetChampionBox1(randomBox1);

        let randomBox2 = Math.floor(Math.random() * 10)
        SetChampionBox2(randomBox2);

        let randomBox3 = Math.floor(Math.random() * 10)
        SetChampionBox3(randomBox3);

        let randomBox4 = Math.floor(Math.random() * 10)
        SetChampionBox4(randomBox4);

        let randomBox5 = Math.floor(Math.random() * 10)
        SetChampionBox5(randomBox5);
    }

    return (

        <div className="containerStore">

            <div className="levelBar">
                <div className="level">
                    <div className="levelNumber">
                        <p>Lvl. {level}</p>
                        <p>12/50</p>
                    </div>
                    <div className="levelUpgrade">
                        <div className="levelUpgradeIn"></div>
                    </div>

                </div>
                <div className="odds">
                    <div className="oneStar">{level1Arr[0]}%</div>
                    <div className="twoStar">{level1Arr[1]}%</div>
                    <div className="threeStar">{level1Arr[2]}%</div>
                    <div className="fourStar">{level1Arr[3]}%</div>
                    <div className="fiveStar">{level1Arr[4]}%</div>
                </div>
                <div className="gold">
                    <div className="goldIcon"></div>
                    <div className="goldValue">50</div>
                </div>
                <button type="button" className="lock">
                    <div className="lockIconClosed"></div>
                    <div className="lockIconOpen"></div>
                </button>
            </div>

            <div className="store">
                <div className="levelBox">

                    <div className="myButtonLvl">
                        <button className="levelUp" type="button" onClick={levelUp}>Up</button>
                        <button className="levelDown" onClick={levelDown}>Down</button>
                        <button className="resetLevel" onClick={resetLevel}>Reset</button>
                    </div>

                    <button className="myButton buy" type="button" >Buy XP</button>
                    <button className="myButton refresh" type="button" onClick={changeBoxNumbers}>Refresh</button>
                </div>

                <div className="championBox" id="1">{championBox1}</div>
                <div className="championBox" id="2'">{championBox2}</div>
                <div className="championBox" id="3">{championBox3}</div>
                <div className="championBox" id="4'">{championBox4}</div>
                <div className="championBox" id="5">{championBox5}</div>
            </div>
        </div>
    );
}