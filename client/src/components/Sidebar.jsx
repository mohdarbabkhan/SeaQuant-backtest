import React from 'react'
import { Link } from 'react-router-dom';
import {SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, SideNavLink } from '@carbon/react';
const Sidebar = () => {
  return (
    <SideNav
    isFixedNav
    expanded={true}
    isChildOfHeader={false}
    className="mt-16"
    aria-label="Side navigation">
    <SideNavItems>
      <SideNavMenu title="Strategy" isActive={true}>
        <SideNavMenuItem href="/strategy">
        L0 menu item
        </SideNavMenuItem>
        <SideNavMenuItem href="https://www.carbondesignsystem.com/">
          L0 menu item
        </SideNavMenuItem>
        <SideNavMenuItem href="https://www.carbondesignsystem.com/">
          L0 menu item
        </SideNavMenuItem>
      </SideNavMenu>
      <SideNavMenu title="Back Test">
        <SideNavMenuItem href="/backtest">
          L0 menu item
        </SideNavMenuItem>
        <SideNavMenuItem
          href="https://www.carbondesignsystem.com/">
          L0 menu item
        </SideNavMenuItem>
        <SideNavMenuItem href="https://www.carbondesignsystem.com/">
          L0 menu item
        </SideNavMenuItem>
      </SideNavMenu>
      <SideNavMenu title="Drag Drop">
        <SideNavMenuItem href="/dragdrop">
          L0 menu item
        </SideNavMenuItem>
        <SideNavMenuItem href="https://www.carbondesignsystem.com/">
          L0 menu item
        </SideNavMenuItem>
        <SideNavMenuItem href="https://www.carbondesignsystem.com/">
          L0 menu item
        </SideNavMenuItem>
      </SideNavMenu>
      <SideNavLink href="https://www.carbondesignsystem.com/">
        Dataset
      </SideNavLink>
      <SideNavLink href="https://www.carbondesignsystem.com/">
        L0 link
      </SideNavLink>
    </SideNavItems>
  </SideNav>
  )
}

export default Sidebar