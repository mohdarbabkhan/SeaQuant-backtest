import { Button, Header, HeaderName, SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink, TextInput } from '@carbon/react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Breadcrumb,
    BreadcrumbItem,
    TreeView,
    TreeNode,
    SelectItem,
    SelectItemGroup,
    Select,
    Dropdown,
    OverflowMenu,
    OverflowMenuItem,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Tab
} from '@carbon/react';
import { IconButton } from '@carbon/react';
import { Add, Filter, Calculation, Row } from '@carbon/react/icons';

import '../App.scss'
import { useState } from 'react';
import { rows,headers } from '../utills/Table-data';
import {Sidebar} from "../components"

function DragDrop() {

    const items = [
        {
            id: 'option-1',
            label: 'Greater Then ',
        },
        {
            id: 'option-2',
            label: 'Crossed Above',
        },
    ]

    const Indicators = [
        {
            id: 'option-1',
            label: 'RSI',
        },
        {
            id: 'option-2',
            label: 'MACD',
        },
    ]

    const timeframe = [
        {
            id: 'option-1',
            label: 'Current',
        },
        {
            id: 'option-2',
            label: '1 Day Ago',
        },
    ]


    var [nextId, setNextId] = useState(1)
    const [filters, setfilters] = useState([{
        id: 0,
        label: "Current",
        type: "filter",
    }])


    const AddFilter = (type) => {

        var filter = filters

        filter.push({
            id: nextId,
            label: "Current",
            type: type,
        })

        setfilters(filter);
        setNextId(nextId + 1)

    }

    const AddSubFilter = (value) => {

        // value = parseInt(value.target.parentNode.value, 10)
        // console.log(value)
        var filter = filters

        filter.splice(value,
            0,
            {
                id: value,
                label: "Current",
                type: "sub-filter",
            });
            setfilters(filter);
            setNextId(nextId + 1)

            console.log(filters)
    }


    const setFilterType = (index, label) => {
        filters[index].label = label
        console.log(filters)
        setNextId(nextId + 1)

    }

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
                        <h2>Strategy Builder [Drag & Drop]</h2>
                        <Button disabled={false} kind='primary' size='lg'>Save Strategy</Button>
                    </div>
                </section>

                <div className='App-content'>

                    <div style={{ width: '75%' }}>
                        <Tabs>
                            <TabList aria-label="List of tabs" contained={false}>
                                <Tab>Long Entry</Tab>
                                <Tab>Short Entry</Tab>
                                <Tab>Long Exit</Tab>
                                <Tab>Short Exit</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>

                                    <div className='Drag-and-Drop-Block'>

                                        {filters.map((filter, index, elements) => {
                                            return (<>
                                            <div className={'Drag-and-Drop-' + filter.type}>
                                            <OverflowMenu
                                                    iconClass='black-icon'
                                                    renderIcon={Row}
                                                    data-floating-menu-container
                                                    selectorPrimaryFocus={'.optionOne'}
                                                >
                                                    <OverflowMenuItem onClick={() => setFilterType(index, "Constant")}
                                                        className="optionOne"
                                                        itemText="Constant"
                                                    />
                                                    <OverflowMenuItem onClick={() => setFilterType(index, "stockAttribute")}
                                                        className="optionTwo"
                                                        itemText="Stock Attribute"
                                                        requireTitle
                                                    />
                                                    <OverflowMenuItem itemText="Indicator" />
                                                    <OverflowMenuItem itemText="Math Function" hasDivider />
                                                </OverflowMenu>
                                                <Dropdown
                                                    ariaLabel="Dropdown"
                                                    id="carbon-dropdown-example"
                                                    items={timeframe}
                                                    label="Select Timeframe"
                                                    size='sm' disabled={false}
                                                    type="inline" />
                                                    {/* <p style={{ width: '4rem', marginRight: '-1.6rem'}}>(12, 0)</p> */}
                                                
                                                    {filter.label == "stockAttribute" && <>
                                                    
                                                    
                                                    
                                                    <TextInput
                                                        id="test2"
                                                        invalidText="A valid value is required"
                                                        defaultValue="14, 2"
                                                        size='sm'
                                                        style={{ width: '3rem', border: 'none', outline: 'none', padding: '0 0'}}>

                                                    </TextInput>
                                                    

                                                <Dropdown
                                                    
                                                    ariaLabel="Dropdown"
                                                    id="carbon-dropdown-example"
                                                    items={Indicators}
                                                    label="Attribute"
                                                    size='sm' disabled={false}
                                                    type="inline"
                                                    className="Drag-and-Drop-Node" />
                                                        <IconButton kind="ghost">
                                                        <Calculation />
                                                        </IconButton>
                                            
                                                    
                                                    </>                                                        
                                            }

<Dropdown
                                                    ariaLabel="Dropdown"
                                                    id="carbon-dropdown-example"
                                                    items={items}
                                                    label="Operations"
                                                    size='sm' disabled={false}
                                                    type="inline"
                                                    className="Drag-and-Drop-Node" />
                                                <Dropdown
                                                    ariaLabel="Dropdown"
                                                    id="carbon-dropdown-example"
                                                    items={timeframe}
                                                    label="Timeframe"
                                                    size='sm' disabled={false}
                                                    type="inline" />
                                                    <TextInput
                                                        id="test2"
                                                        invalidText="A valid value is required"
                                                        size='sm'
                                                        style={{ width: '3rem', border: 'none', outline: 'none', padding: '0 0'}}>

                                                    </TextInput>
                                                    

                                                <Dropdown
                                                    
                                                    ariaLabel="Dropdown"
                                                    id="carbon-dropdown-example"
                                                    items={Indicators}
                                                    label="Attribute"
                                                    size='sm' disabled={false}
                                                    type="inline"
                                                    className="Drag-and-Drop-Node" />

                                                        <IconButton kind="ghost">
                                                        <Calculation />
                                                        </IconButton>


                                                <OverflowMenu
                                                    data-floating-menu-container
                                                    selectorPrimaryFocus={'.optionOne'}
                                                >
                                                    <OverflowMenuItem
                                                        className="optionOne"
                                                        itemText="Delete"
                                                    />
                                                    <OverflowMenuItem
                                                        className="optionTwo"
                                                        itemText="Duplicate"
                                                        requireTitle
                                                    />
                                                    <OverflowMenuItem itemText="Copy" />
                                                    <OverflowMenuItem itemText="Disable" hasDivider />
                                                </OverflowMenu>

                                            </div>

                                            {((filter.type == "sub-filter" && (filters[index+1] == undefined)) || (filter.type == "sub-filter" && filters[index+1] != undefined && filters[index+1].type != "sub-filter")) &&
                                       <div id="add-sub-filter-button" name="add-sub-filter-button" value={index} style={{ marginTop: '8px', marginLeft: "4rem"}}>
                                       {/* <IconButton onClick={AddFilter}>
                                       <Add />
                                       </IconButton> */}
                                       <OverflowMenu renderIcon={Add} style={{ backgroundColor: 'var(--cds-button-primary, #0f62fe)', fill: 'white' }}
                                           data-floating-menu-container
                                           selectorPrimaryFocus={'.optionOne'}
                                           value={index}
                                       >    
                                           <OverflowMenuItem 
                                               value={index}
                                               onClick={() => AddSubFilter(index)}
                                               className="optionOne"
                                               itemText="Add Filter"
                                           />
                                           {/* <OverflowMenuItem onClick={() => AddFilter("sub-filter-lvl-2")}
                                               className="optionTwo"
                                               itemText="Add Sub-Filter"
                                               requireTitle
                                           /> */}
                                           <OverflowMenuItem itemText="Copy" />
                                           <OverflowMenuItem itemText="Disable" hasDivider />
                                       </OverflowMenu>

                                   </div>
                                            }
                                        {/* {filter.type == "sub-filter" ? "sub" : "non-sub"}  */}

                                            </>
                                            )

                                        })}

                                        <div style={{ marginTop: '8px' }}>
                                            {/* <IconButton onClick={AddFilter}>
                                            <Add />
                                            </IconButton> */}
                                            <OverflowMenu renderIcon={Add} style={{ backgroundColor: 'var(--cds-button-primary, #0f62fe)', fill: 'white' }}
                                                data-floating-menu-container
                                                selectorPrimaryFocus={'.optionOne'}
                                            >
                                                <OverflowMenuItem onClick={() => AddFilter("filter")}
                                                    className="optionOne"
                                                    itemText="Add Filter"
                                                />
                                                <OverflowMenuItem onClick={() => AddFilter("sub-filter")}
                                                    className="optionTwo"
                                                    itemText="Add Sub-Filter"
                                                    requireTitle
                                                />
                                                <OverflowMenuItem itemText="Copy" />
                                                <OverflowMenuItem itemText="Disable" hasDivider />
                                            </OverflowMenu>

                                        </div>

                                    </div>

                                </TabPanel>
                                <TabPanel>
                                    Tab Panel 2 <Button>Example button</Button>
                                </TabPanel>
                                <TabPanel>Tab Panel 3</TabPanel>
                                <TabPanel>Tab Panel 4</TabPanel>
                                <TabPanel>Tab Panel 5</TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>


                </div>
                {/* <div className='App-Content'>
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
    </div> */}
            </div>


        </>


    );
}

export default DragDrop
