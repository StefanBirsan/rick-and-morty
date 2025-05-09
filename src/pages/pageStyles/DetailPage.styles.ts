import styled from "styled-components";
import {Link} from "react-router-dom";

export const DContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const BackButton = styled(Link)`
    display: inline-block;
    margin-bottom: 20px;
    padding: 10px 15px;
    background-color: #504dc7;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    align-self: flex-start;

    &:hover {
        background-color: #3bb727;
    }
`;

export const CharacterHeader = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h1`
    margin-bottom: 15px;
    font-size: 32px;
    color: #f5f4f4;
`;

export const InfoItem = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color: white;  
  
  strong {
    display: inline-block;
    width: 100px;
    font-weight: 600;
  }
`;

export const Section = styled.div`
  margin-top: 30px;
`;

export const SectionTitle = styled.h2`
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f0f0f0;
    font-size: 24px;
    color: #f8f6f6;
`;

export const EpisodesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

export const EpisodeItem = styled.li`
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 9px;
    border-left: 3px solid #504dc7;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #666;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #f44336;
`;

export const BadgeContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px; 
`;