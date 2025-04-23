import React from "react";
import { useParams } from "react-router-dom";
import {useDetails} from "../hooks";
import {KStatusBadge, KGenderBadge} from "../components";
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
    BadgeContainer,
    LoadingMessage,
    ErrorMessage,
} from "./pageStyles";
import { CharacterDetailParams } from "../types";

const DetailPage = () => {
    const { id } = useParams<CharacterDetailParams>();

    const { character, episodes, loading, error } = useDetails(id);

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
                    <BadgeContainer>
                        <KStatusBadge status={character.status}>{character.status}</KStatusBadge>
                        <KGenderBadge gender={character.gender}>{character.gender}</KGenderBadge>
                    </BadgeContainer>
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
