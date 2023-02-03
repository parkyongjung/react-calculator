import styled from "styled-components";

const Input = styled.input`
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

const InputBar = () => {
    return <>
        <Input readOnly />
    </>
}

export default InputBar