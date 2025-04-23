import { useEffect, useState } from "react";
import { Character } from "../types";
import { fetchCharacters } from "../services";

function useCharacters(name: string, status: string) {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);
            try {
                const results = await fetchCharacters(name, status);
                setCharacters(results);
                setError(null);
            } catch (err: any) {
                if (err.response?.status === 404) {
                    setCharacters([]);
                    setError(null); // Don't show error, just empty list
                } else {
                    setError("Failed to fetch characters");
                    setCharacters([]);
                }
            } finally {
                setLoading(false);
            }
        };

        getCharacters();
    }, [name, status]);

    return { characters, loading, error };
}

export default useCharacters;
