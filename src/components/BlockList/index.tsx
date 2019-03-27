import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

import { fetchBlocks } from 'api/block';
import BlockType from 'types/block';

import Block from './Block';

interface State {
    blocks: BlockType[] | null;
}

export default class BlockList extends React.Component<{}, State> {

    state: State = { blocks: null };

    async componentDidMount() {
        const blocks = await fetchBlocks();
        this.setState({ blocks });
    }

    render() {
        const { blocks } = this.state;
        return blocks && (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            #
                        </TableCell>
                        <TableCell>
                            Hash
                        </TableCell>
                        <TableCell>
                            # of txs
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        blocks.sort((a, b) => b.index - a.index).map(block => (
                            <Block key={block.hash} block={block} />
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}
