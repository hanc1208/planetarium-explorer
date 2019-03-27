export default interface Transaction {
    id: string;
    signature: string;
    timestamp: string;
    signer: string;
    updatedAddresses: string[];
    actions: {[key: string]: {[key: string]: any}};
}
