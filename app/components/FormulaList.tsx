import React from "react";
import { ModeToggle } from "../../../../components/ui/mode-toggle";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../../../components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Menu } from "lucide-react";
import { routes } from "@/app/routes";
import SearchBar from "./SearchBar";
import ListItemLink from "./ListItemLink";

interface Props {
  formulas: {
    name: string;
    path: string;
  }[];
}

export function FormulaList({ formulas }: Props) {
  return (
    <div className="w-full py-4">
      <ScrollArea className="h-[400px] w-full rounded-md border">
        {formulas.map((formula) => (
          <ListItemLink
            key={formula.name}
            formula={formula.name}
          />
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
