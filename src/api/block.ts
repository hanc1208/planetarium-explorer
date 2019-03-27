import Block from 'types/block';

import { fetchTransaction } from './transaction';
import api from '.';

export const fetchBlocks = async (limit: number = 10): Promise<Block[]> => {
    const response: { hash: string }[] = (await api.get('/blocks/')).data;
    const blockHashes = response.map(block => block.hash).reverse().slice(0, limit);
    const blocks = (await Promise.all(blockHashes.map(fetchBlock)));
    return blocks.filter((block): block is Block => block != null);
};

export const fetchBlock = async (hash: string): Promise<Block | null> => {
    let response;
    try {
        response = (await api.get(`/blocks/${hash}/`)).data;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 404) {
                return null;
            }
        }
        throw e;
    }
    if (response.txIds.length > 0)
        console.log(response.txIds);
    const transactions = await Promise.all(response.txIds.map(fetchTransaction));
    return { hash, transactions, ...response };
};
