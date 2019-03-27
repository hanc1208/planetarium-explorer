import Transaction from 'types/transaction';

import api from '.';

export const fetchTransaction = async (id: string): Promise<Transaction> => {
    return (await api.get(`/tx/${id}/`)).data;
};
