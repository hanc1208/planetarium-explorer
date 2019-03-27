import React from 'react';
import { RouteComponentProps } from 'react-router';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';

import { fetchBlock } from 'api/block';
import BlockType from 'types/block';

interface BlockRouteParams {
    blockHash: string;
}

type Props = RouteComponentProps<BlockRouteParams>;

interface State {
    block: BlockType | null;
}

export default class Block extends React.Component<Props, State> {

    state: State = { block: null };

    async componentDidMount() {
        const { match: { params: { blockHash } } } = this.props;
        const block = await fetchBlock(blockHash);
        this.setState({ block });
    }

    render() {
        const { block } = this.state;
        if (!block) return null;
        const values = [
            ['Hash', block.hash],
            ['Index', block.index],
            ['Difficulty', block.difficulty],
            ['Nonce', block.nonce],
            ['Reward Beneficiary', block.rewardBeneficiary],
            ['Previous Hash', block.previousHash],
            ['Timestamp', block.timestamp],
            ['# of Transactions', block.transactions.length],
        ];
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Value
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        values.map(([label, value], index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography variant="body2" color="primary">
                                        {label}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body1">
                                        {value}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}
