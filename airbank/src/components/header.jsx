import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Deposit", href: "/deposit" },
    { name: "Withdraw", href: "/withdraw" },
    { name: "Buy", href: "/buy" },
    { name: "SAS", href: "/sas" },
    { name: "LOS", href: "/los" },
    { name: "My Account", href: "/account" },
    { name: "Settings", href: "/settings" },
    { name: "Help & Feedback", href: "/help" },
    { name: "Log Out", href: "/logout" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className = "mb-4">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit">Airbank</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/deposit">
            Deposit
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/withdraw">
            Withdraw
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Buy
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SAS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">LOS</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color={
                item.name === "Home" ? "primary" :
                item.name === "Log Out" ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
              key={index}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
