import React, { useState } from "react";
import { KCharacterList, KFilter } from "../components";
import { useCharacters, useDebounce } from "../hooks";
import { PageTitle } from "./pageStyles";

const HomePage: React.FC = () => {
    const [nameQuery, setNameQuery] = useState("");
    const [status, setStatus] = useState("");

    const debouncedNameQuery = useDebounce(nameQuery, 300);

    const { characters, loading, error } = useCharacters(debouncedNameQuery, status);

    return (
        <div>
            <PageTitle>Rick & Morty Characters</PageTitle>
            <KFilter
                nameQuery={nameQuery}
                setNameQuery={setNameQuery}
                status={status}
                setStatus={setStatus}
            />
            <KCharacterList
                characters={characters}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default HomePage;