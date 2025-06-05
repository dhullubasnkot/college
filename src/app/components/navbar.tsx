import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar1() {
  return (
    <Navbar fluid rounded className="bg-transparent">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="/logo.png"
          className="mr-3 h-6 sm:h-[70px]"
          alt="Flowbite React Logo"
          height={300}
          width={80}
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active className="">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About Us
        </NavbarLink>
        <NavbarLink href="#">Courses</NavbarLink>
        <NavbarLink href="#">Page</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
