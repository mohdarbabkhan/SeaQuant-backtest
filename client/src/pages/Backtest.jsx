import { Button } from '@carbon/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Breadcrumb,
  BreadcrumbItem

} from '@carbon/react';
import { rows,headers } from '../utills/Table-data';
import {Sidebar} from "../components"
import '../App.scss'

function Backtest() {

  return (
    <>
    <Sidebar/>
    <div className="App-box">
        
      <Breadcrumb>
        <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href="/">All Backtest</BreadcrumbItem>
      </Breadcrumb>


    <section>
        <div className="App-heading">
          <h2>Backtest</h2>
          <Button disabled={false} kind='primary' size='lg'>New Backtest</Button>
        </div>
      </section>

    
    <div className='App-Content'>
      <Table size="sm">
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader id={header.key} key={header}>
              {header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {Object.keys(row)
              .filter((key) => key !== 'id')
              .map((key) => {
                return <TableCell key={key}>{row[key]}</TableCell>;
              })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  </div>
    </> 
  );
}

export default Backtest
