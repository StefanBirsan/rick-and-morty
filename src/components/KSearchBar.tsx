import React, { ChangeEvent } from 'react';
import {
    SearchInputContainer,
    ClearButton,
    SearchInput,
    SearchIcon,
} from "./componentStyles";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const KSearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder } ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    const handleClear = () => {
        onChange('');
    }

    return (
        <SearchInputContainer>
            <SearchInput
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {value ? (
                <ClearButton onClick={handleClear} aria-label="Clear search">
                    🧹
                </ClearButton>
            ) : (
                <SearchIcon>🔍</SearchIcon>
            )}
        </SearchInputContainer>
    )
}

export default KSearchBar;