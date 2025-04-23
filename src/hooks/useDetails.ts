import { useEffect, useState } from "react";
import { Character, Episode } from "../types";
import { fetchCharacterByID, fetchEpisodes } from "../services";

export const useDetails = (id: string | undefined) => {
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
                setCharacter(null);
                setEpisodes([]);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadCharacter();
        }
    }, [id]);

    return { character, episodes, loading, error };
};