import styled from "styled-components";

export const DexDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`
/** Dashboard 영역 ---------------------*/
export const DashboardDiv = styled.div`
    background-color: #f7f6f6;
    border-radius: 10px;
    max-width: 1650px;
    min-width: 1350px;
    height: auto;
    margin-top: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
`

export const DashboardTitle = styled.div`
    width: 100%;
    height: 80px;
    color: #fc5050;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    line-height: 3;
`

export const DashboardCardDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
`

export const DashboardBallCard = styled.div`
    border: 3px dashed #dddddd;
    background-color: #fdfdfd;
    border-radius: 10px;          
    width: 150px;
    height: 150px;

    display: flex;
    justify-content: center; 
    align-items: center; 
`

export const BallImg = styled.img`
    width: 60%;
`

export const DashboardPokemonCard = styled.div`
    background-color: #fdfdfd;
    height: 250px;
    width: 180px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

/** PokemonList 영역 ----------------------------*/
export const PokemonDiv = styled.div`
    background-color: #f7f6f6;
    border-radius: 10px;
    max-width: 1650px;
    min-width: 1350px;
    height: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 30px;
    
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr); /* 한 줄에 6개의 아이템 배치 */
    gap: 25px; /* 아이템 간 간격 */

`

export const PokemonCardDiv = styled.div`
    background-color: #fdfdfd;
    height: 250px;
    width: 195px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const PokemonImg = styled.img`
    width: ${(props) => props.size || '120px'};
`

export const PokemonName = styled.p`
    font-weight: bold;
    font-size: ${(props) => props.fontSize || '16px'};
    color: ${(props) => props.color || '#000000'};
    margin-bottom: 10px;
`

export const PokemonDetailP = styled.p`
    font-weight: ${(props) => props.fontWeight || 'normal'};
    font-size: ${(props) => props.fontSize || '15px'};
    margin-bottom: 30px;
`

export const ControlBtn = styled.button`
    font-size: 14px;
    border: none;
    background-color: #fc5050;
    color: white;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;

    &:hover {
        background-color: #d64646; 
    }
`

/** PokemonDetail 페이지 ----------------------------*/

export const PokemonDetailDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PokemonDetailBtnDiv = styled.div`
    width: 150px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`