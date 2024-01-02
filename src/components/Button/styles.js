import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #565656;
    border: 0;
    border-radius: 22px;
    position: relative;
    color: #FFF;
    padding: 2px 12px;
    box-sizing: border-box;
    min-width: 120px;
    width: 100%;
    cursor: pointer;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background-color: #E4105D;
        margin: 1rem 0;

        &:hover{
            opacity: .8;
        }
        
        &::after{
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;            
        }
    
    `}
`