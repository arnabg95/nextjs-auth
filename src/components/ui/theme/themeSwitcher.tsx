// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="md"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
    >
    </Switch>
  );
}
