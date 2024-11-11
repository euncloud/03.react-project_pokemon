import styled from "styled-components";

export const HomeDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const HomeImg = styled.img`
    width: 900px;
`

export const HomeBtn = styled.button`
    padding: 10px 15px;
    background-color: #cc1414;
    color: white;
    border-radius: 5px;
    border: none;
    
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
    background-color: #a81212; /* 마우스 올렸을 때 배경색 변경 */
    transform: scale(1.05);    
  }
`
