import React, { useState } from "react";
import KFilter from "../components/KFilter";
import KCharacterList from "../components/KCharacterList";
import useDebounce from "../hooks/useDebounce";
import useCharacters  from "../hooks/useCharacters";
import { PageTitle } from "./pageStyles/Page.styles";

const HomePage: React.FC = () => {
    const [nameQuery, setNameQuery] = useState<string>("");
    const [status, setStatus] = useState<string>("");

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