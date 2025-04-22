import styled from "styled-components";

interface KStatusBadgeProps {
    status: string;
}

const StatusBadge = styled.span<KStatusBadgeProps>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${props => {
        switch (props.status) {
            case 'Alive':
                return '#76fb61';
            case 'Dead':
                return '#ce7c7c'; 
            case 'unknown':
                return '#b28f5b'; 
            default:
                return '#ccc'; 
        }
    }};
    color: #fff;
`

export default StatusBadge;