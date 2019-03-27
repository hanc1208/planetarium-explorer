import Transaction from './transaction';

export default interface Block {
    hash: string;
    index: number;
    difficulty: number;
    nonce: string;
    rewardBeneficiary: string;
    previousHash: string;
    timestamp: string;
    transactions: Transaction[];
}
