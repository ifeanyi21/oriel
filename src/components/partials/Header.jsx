"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = ["Home", "Services", "Contact us"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="static"
      isBlurred={true}
      className="fixed shadow"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ORIEL</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className={pathname === "/" ? "text-blue-500" : ""} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className={pathname.includes("services") ? "text-blue-500" : ""}
            href="/services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className={pathname.includes("contact") ? "text-blue-500" : ""}
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>{/* <ThemeSwitcher /> */}</NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
