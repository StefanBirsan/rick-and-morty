import styled from "styled-components";
import {Link} from "react-router-dom";

export const CardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    width: calc(20% - 12px);
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    color: inherit;
    margin-bottom: 15px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 1200px) {
        width: calc(25% - 12px); 
    }

    @media (max-width: 992px) {
        width: calc(33.333% - 10px); 
    }

    @media (max-width: 768px) {
        width: calc(50% - 8px); 
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const CardContent = styled.div`
    padding: 16px;
`

export const CardTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`