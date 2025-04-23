import React from 'react';
import {Character} from '../types';
import KCharacterCard from './KCharacterCard';
import { Message, CharacterListContainer } from './componentStyles';

interface KCharacterListProps {
    characters: Character[];
    loading: boolean;
    error: string | null;
}

export const KCharacterList: React.FC<KCharacterListProps> = ({ characters, loading, error}) => {
    if (loading) {
        return <Message>Loading characters..</Message>
    }

    if (error) {
        return <Message>Error: {error}</Message>
    }

    if (!characters || characters.length === 0) {
        return <Message>No characters found</Message>
    }

    return (
        <CharacterListContainer>
            {characters.map((character) => (
                <KCharacterCard key={character.id} character={character} />
            ))}
        </CharacterListContainer>
    );
};

export default KCharacterList;