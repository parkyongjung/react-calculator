import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { callbackify } from 'util';
// import InputBar from "./InputBar";


const ButtonBoxstyle = styled.div`
    display:grid;
    width:40%;
    max-width:450px;
    height:50%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap:10px;
    grid-row-gap:10px;
`

const Button = styled.button`
    background-color:#f2f3f5;
    border:none;
    color:#000;
    font-size:1.5rem;
    border-radius:35px;
    cursor:pointer;
    box-shadow:3px 3px 3px lightgray;
    &:active {
        margin: 2px 0 0 2px;
        box-shadow:none;
    }
`

const CalButton = styled(Button)`
    font-size:2rem;
    color:#fff;
    background-color:#4b89dc;
`

const ZeroButton = styled(Button)`
    grid-column:1/3;
`

const InputBar = styled.input`
    width:40%;
    max-width:450px;
    height:65px;
    margin-bottom:10px;
    border-radius:10px;
    font-size:30px;
    border:2px solid #4b89dc;
    text-align:right;
    padding-right:20px;
    &:focus {
        outline:none;
    }
`

const ButtonBox = () => {
    const [calc, setCalcState] = useState<string>("");
    const [operCheck, setOperCheckState] = useState(true);
    const [pointCheck, setPointCheckState] = useState(true);

    // 숫자
    const getNum = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCalcState(`${calc}${e.currentTarget.value}`);
        setOperCheckState(true);
    };
    // useEffect(()=>{
    //     console.log(calc)
    // },[calc])

    // 연산기호
    const getOper = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (operCheck) {
            setCalcState(`${calc}${e.currentTarget.value}`);
            setOperCheckState(false);

            // 소수점 재사용
            setPointCheckState(true);
        }
    };

    // 소수점
    const getPoint = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (calc.length === 0) return;
        if (pointCheck) {
            setCalcState(`${calc}${e.currentTarget.value}`);
            setPointCheckState(false);
        }
    };

    // 계산결과
    const getResult = () => {
        let replaceStr = calc.replace(/x/gi, "*").replace(/÷/gi, "/");
        if (isNaN(eval(replaceStr))) setCalcState("");
        else if (eval(replaceStr) === Infinity) {
            alert("0으로 나눌수 없습니다.");
            setCalcState("");
            return false;
        } else {
            setCalcState((prev) => eval(replaceStr));
        }
    };

    const delCalc = () => {
        setPointCheckState(true);
        setOperCheckState(true);
        let str = String(calc).slice(0, -1);
        setCalcState((prev) => str);
    }

    const allClear = () => {
        setPointCheckState(true);
        setCalcState((prev) => "");
    }


    return <>
        <InputBar readOnly value={calc} />
        <ButtonBoxstyle>
            <Button onClick={allClear}>AC</Button>
            <Button onClick={delCalc}>DEL</Button>
            <CalButton value="%" onClick={getOper}>
            %
            </CalButton>
            <CalButton value="÷" onClick={getOper}>
            ÷
            </CalButton>
            <Button value={7} onClick={getNum}>
            7
            </Button>
            <Button value={8} onClick={getNum}>
            8
            </Button>
            <Button value={9} onClick={getNum}>
            9
            </Button>
            <CalButton value="x" onClick={getOper}>
            x
            </CalButton>
            <Button value={4} onClick={getNum}>
            4
            </Button>
            <Button value={5} onClick={getNum}>
            5
            </Button>
            <Button value={6} onClick={getNum}>
            6
            </Button>
            <CalButton value="-" onClick={getOper}>
            -
            </CalButton>
            <Button value={1} onClick={getNum}>
            1
            </Button>
            <Button value={2} onClick={getNum}>
            2
            </Button>
            <Button value={3} onClick={getNum}>
            3
            </Button>
            <CalButton value="+" onClick={getOper}>
            +
            </CalButton>
            <ZeroButton value={0} onClick={getNum}>
            0
            </ZeroButton>
            <Button value="." onClick={getPoint}>
            .
            </Button>
            <CalButton onClick={getResult}>=</CalButton>
        </ButtonBoxstyle>
    </>
}
export default ButtonBox