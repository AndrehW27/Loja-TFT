import { useState } from 'react';
import '../styles/store.css';

export default function Bottom() {

    const [level, SetLevel] = useState(1);

    const [championBox1, SetChampionBox1] = useState(1);
    const [championBox2, SetChampionBox2] = useState(1);
    const [championBox3, SetChampionBox3] = useState(1);
    const [championBox4, SetChampionBox4] = useState(1);
    const [championBox5, SetChampionBox5] = useState(1);

    const levelUp = () => {
        SetLevel(level + 1)
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
            </div>

            <div className="store">
                <div className="levelBox">
                    <p>Level: {level}</p>
                    <button type="button" onClick={levelUp}>Level up</button>
                    <button type="button" onClick={resetLevel}>Reset level</button>
                    <button type="button" onClick={changeBoxNumbers}>Refresh Store</button>
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