export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface ApiResponse<T> {
    info: {
        count: number;
        page: number;
        next: string | null;
        previous: string | null;
    };
    result: T[]
}

export interface FilterState {
    name: string;
    status: string;
}

export interface AppError {
    message: string;
    status?: number;
}

export interface CharacterDetailParams {
    id: string;
}