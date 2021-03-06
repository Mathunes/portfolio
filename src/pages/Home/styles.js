import styled from 'styled-components';
import bgImage from '../../assets/images/bg-img.png'
import bgImageSmall from '../../assets/images/bg-img-small.png'

export const Container = styled.div`
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 600px) {
        background-image: url(${bgImageSmall});
        height: calc(100vh - 55px);
    }

`

export const Logo = styled.img`
    width: 50px;
    margin-top: 20px;

    @media (max-width: 450px) {
        width: 40px;
    }
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    justify-content: center;
    padding-bottom: 70px;
    text-align: center;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    font-size: 36px;
    font-weight: lighter;

    @media(max-width: 600px) {
        font-size: 26px;
    }

`