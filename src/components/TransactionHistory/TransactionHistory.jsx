import PropTypes from 'prop-types';
import { Table, TableGrid, TableHead, TableCell } from "./TransactionHistory.styled"
export const TransactionHistory = ({ items }) => {
  return <Table class="transaction-history">
    <thead>
      <tr>
        <TableHead>Type</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Currency</TableHead>
      </tr>
    </thead>

    <tbody>{items.map((item, index) => {
      return <TableGrid key={item.id} index={index}>
        <TableCell>{item.type}</TableCell>
        <TableCell>{item.amount}</TableCell>
        <TableCell>{item.currency}</TableCell>
      </TableGrid>
    })}

    </tbody>
  </Table>
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
}