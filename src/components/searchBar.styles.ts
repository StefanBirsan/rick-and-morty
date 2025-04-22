import styled from "styled-components";

export const SearchInputContainer = styled.div`
    display: flex;
    position: relative;
    flex: 1;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px 40px 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #76fb61;
        box-shadow: 0 0 0 2px rgba(118, 251, 97, 0.5);
    }
`
export const SearchIcon = styled.span`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ClearButton = styled.button`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        color: #333;
    }
`