import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 9px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const StatusSelect = styled.select`
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    min-width: 150px;

    &:focus {
        border-color: #62a4ab;
        box-shadow: 0 0 0 2px rgba(98, 164, 171, 0.5);
    }
`