/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import "./Nav.css";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";

import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaYoutube as YouTubeIcon,
} from "react-icons/fa";
import { TwitterIcon } from "./icons";
import HyperText from "./ui/hyper-text";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <div className="logo flex items-center gap-2">
              <div className="logo-icon bg-gradient-to-r from-blue-500 to-purple-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold text-sm">
                GM
              </div>
              <h1 className="font-bold text-2xl md:text-3xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                <HyperText>Geet Monjory</HyperText>
              </h1>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-7 ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-base font-medium hover:text-primary",
                  "data-[active=true]:text-primary data-[active=true]:font-semibold"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex items-center gap-3">
          <Link
            isExternal
            aria-label="Facebook"
            href={siteConfig.links.facebook}
          >
            <FacebookIcon className="text-default-500 hover:text-blue-600 transition-colors duration-200" />
          </Link>
          <Link isExternal aria-label="YouTube" href={siteConfig.links.youtube}>
            <YouTubeIcon className="text-default-500 text-xl hover:text-red-500 transition-colors duration-200" />
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500 text-lg hover:text-pink-500 transition-colors duration-200" />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500 hover:text-blue-500 transition-colors duration-200" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                href={item.href}
                size="lg"
                className={clsx(
                  "font-medium"
                  // index === 2
                  //   ? "text-primary"
                  //   : index === siteConfig.navMenuItems.length - 1
                  //     ? "text-danger"
                  //     : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {/* Social Media Links for Mobile */}
          <div className="flex gap-3 mt-3">
            <Link
              isExternal
              aria-label="Facebook"
              href={siteConfig.links.facebook}
            >
              <FacebookIcon className="text-default-500 text-xl hover:text-blue-600 transition-colors duration-200" />
            </Link>
            <Link
              isExternal
              aria-label="YouTube"
              href={siteConfig.links.youtube}
            >
              <YouTubeIcon className="text-default-500 text-2xl hover:text-red-500 transition-colors duration-200" />
            </Link>
            <Link
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <InstagramIcon className="text-default-500 text-2xl hover:text-pink-500 transition-colors duration-200" />
            </Link>
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-default-500 text-2xl hover:text-blue-500 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
