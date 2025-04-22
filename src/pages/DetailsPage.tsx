import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterByID, fetchEpisodes } from "../services/api";
import KGenderBadge from "../components/KGenderBadge";
import KStatusBadge from "../components/KStatusBadge";
import {
    DContainer,
    BackButton,
    CharacterHeader,
    Avatar,
    Info,
    Name,
    InfoItem,
    Section,
    SectionTitle,
    EpisodesList,
    EpisodeItem,
    LoadingMessage,
    ErrorMessage,
} from "./pageStyles/DetailPage.styles";
import { Character, Episode, CharacterDetailParams } from "../types";

const DetailPage = () => {
    const { id } = useParams<CharacterDetailParams>();
    const [character, setCharacter] = useState<Character | null>(null);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadCharacter = async () => {
            setLoading(true);
            try {
                const characterData = await fetchCharacterByID(id);
                setCharacter(characterData);

                const episodesData = await fetchEpisodes(characterData.episode);
                setEpisodes(episodesData);

                setError(null);
            } catch (error) {
                setError("Failed to load character details");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadCharacter();
        }
    }, [id]);

    if (loading) return <LoadingMessage>Loading character details...</LoadingMessage>;
    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (!character) return <ErrorMessage>Character not found</ErrorMessage>;

    return (
        <DContainer>
            <BackButton to="/">← Back to list</BackButton>

            <CharacterHeader>
                <Avatar src={character.image} alt={character.name} />
                <Info>
                    <Name>{character.name}</Name>
                    <div>
                        <KStatusBadge status={character.status}>{character.status}</KStatusBadge>
                        <KGenderBadge gender={character.gender}>{character.gender}</KGenderBadge>
                    </div>
                    <InfoItem><strong>Species:</strong> {character.species}</InfoItem>
                    <InfoItem><strong>Origin:</strong> {character.origin.name}</InfoItem>
                    <InfoItem><strong>Location:</strong> {character.location.name}</InfoItem>
                </Info>
            </CharacterHeader>

            <Section>
                <SectionTitle>Episodes</SectionTitle>
                <EpisodesList>
                    {episodes.map((episode, index) => (
                        <EpisodeItem key={episode.id}>
                            {index + 1}. {episode.name} ({episode.episode})
                        </EpisodeItem>
                    ))}
                </EpisodesList>
            </Section>
        </DContainer>
    );
};

export default DetailPage;
