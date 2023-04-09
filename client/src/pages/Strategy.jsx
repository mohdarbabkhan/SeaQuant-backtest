import { Button, Header, HeaderName, SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink } from '@carbon/react';
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
import { Link } from 'react-router-dom';
import '../App.scss'
import {Sidebar} from "../components"

function Strategy() {


  return (
    <>
  <Sidebar/>
    <div className="App-box">
        
      <Breadcrumb>
        <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href="/">All Strategy</BreadcrumbItem>
      </Breadcrumb>


    <section>
        <div className="App-heading">
          <h2>Strategy</h2>
          <Link to="/dragdrop">
          <Button disabled={false} kind='primary' size='lg'>
          New Strategy
          </Button>
          </Link>
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

export default Strategy
