import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import BlockType from 'types/block';

interface OwnProps {
    block: BlockType;
}

type Props = OwnProps & RouteComponentProps;

class Block extends React.Component<Props> {

    handleBlockHashClick = () => {
        const { block: { hash }, history } = this.props;
        history.push(`/blocks/${hash}/`);
    }

    render() {
        const { block } = this.props;
        return (
            <TableRow>
                <TableCell>
                    {block.index}
                </TableCell>
                <TableCell>
                    <Button variant="text" color="primary" onClick={this.handleBlockHashClick}>
                        {block.hash}
                    </Button>
                </TableCell>
                <TableCell>
                    {block.transactions.length}
                </TableCell>
            </TableRow>
        );
    }
}

export default withRouter(Block);
