import React from 'react';
import {Character} from '../types';
import {
    CardContainer,
    CardImage,
    CardContent,
    CardTitle,
} from './componentStyles';
import StatusBadge from "./KStatusBadge";

interface KCharacterCardProps {
    character: Character;
}

const KCharacterCard: React.FC<KCharacterCardProps> = ({ character }) => {
    return (
        <CardContainer to={`/character/${character.id}`}>
            <CardImage src={character.image} alt={character.name}/>
            <CardContent>
                <CardTitle>{character.name}</CardTitle>
                <StatusBadge status={character.status}>{character.status}</StatusBadge>
            </CardContent>
        </CardContainer>
    )
}

export default KCharacterCard;