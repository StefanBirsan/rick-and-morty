import axios from 'axios';
import apiLink from './apiLink';
import { Character, Episode } from '../types';

export const fetchCharacters = async (name?: string, status?: string): Promise<Character[]> => {
    const params: Record<string, string> = {};
    if (name) params.name = name;
    if (status) params.status = status;

    const response = await apiLink.get(`/character`, { params });
    return response.data.results;
};

export const fetchCharacterByID = async (id: string | undefined): Promise<Character> => {
    try {
        const response = await apiLink.get(`/character/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error while fetching character by ID:', error);
        throw error;
    }
};

export const fetchEpisodes = async (episodeURLs: string[]): Promise<Episode[]> => {
    try {
        const requests = episodeURLs.map(url => axios.get(url));
        const responses = await Promise.all(requests);
        return responses.map(res => res.data);
    } catch (error) {
        console.error('Error while fetching episodes:', error);
        throw error;
    }
};
