import styled from 'styled-components';

export const Container = styled.main`
    width: 100%:
    max-width: 80%;
    margin: 8rem auto 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    width: auto;
`

export const Row = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 10px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 10px;
`

export const Account = styled.p`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 12px;
    color: #FFF;
`

export const SignIn = styled.a`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 12px;
    color: #23DD7A;
    text-decoration: none;
    cursor: pointer;
`