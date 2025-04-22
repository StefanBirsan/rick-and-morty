import styled from "styled-components";

interface KGenderBadgeProps {
    gender: string;
}

const GenderBadge = styled.span<KGenderBadgeProps>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => {
    switch (props.gender.toLowerCase()) {
        case 'male':
            return '#2196f3';
        case 'female':
            return '#e91e63';
        case 'genderless':
            return '#9c27b0';
        default:
            return '#607d8b';
    }
}};
  color: white;
`;

export default GenderBadge;