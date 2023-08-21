import { Table, TableGrid, TableHead, TableBody, TableCell } from "./TransactionHistory.styled"
export const TransactionHistory = ({items}) => {
    return <Table class="transaction-history">
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>

  <TableBody>{items.map (item => {
return  <TableGrid key={item.id}>
<TableCell>{item.type}</TableCell>
<TableCell>{item.amount}</TableCell>
<TableCell>{item.currency}</TableCell>
</TableGrid>
  })}
    
  </TableBody>
</Table>
}