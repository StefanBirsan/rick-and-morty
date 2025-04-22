import { useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";
import { Character } from "../types";

function useCharacters(name: string, status: string): {
    characters: Character[];
    loading: boolean;
    error: string | null;
} {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);
            try {
                const response = await fetchCharacters();
                setCharacters(response);
                setError(null);
            } catch (error) {
                setError("Failed to fetch characters");
                setCharacters([]);
            } finally {
                setLoading(false);
            }
        };

        getCharacters();
    }, [name, status]);

    return { characters, loading, error };
}

export default useCharacters;