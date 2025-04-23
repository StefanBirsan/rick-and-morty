import React from 'react';
import KSearchBar from './KSearchBar';
import { FilterContainer, StatusSelect } from './componentStyles';

interface KFilterProps {
    nameQuery: string;
    setNameQuery: (query: string) => void;
    status: string;
    setStatus: (status: string) => void;
}

const KFilter: React.FC<KFilterProps> = ({ nameQuery, setNameQuery, status, setStatus }) => {
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    }

    return (
        <FilterContainer>
            <KSearchBar
                value={nameQuery}
                onChange={setNameQuery}
                placeholder="Search characters by name..."
            />
            <StatusSelect value={status} onChange={handleStatusChange}>
                <option value="">Select Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </StatusSelect>
        </FilterContainer>
    )
}

export default KFilter;