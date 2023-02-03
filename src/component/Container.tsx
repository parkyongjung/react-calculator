import styled from "styled-components";
interface MainContainerBoxprops {
    children?: React.ReactNode;
}

const MainContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 100vh;
`

const Container = (props: MainContainerBoxprops ) => {
    return <>
        <MainContainerBox>
            {props.children}
        </MainContainerBox>
    </>
}
export default Container