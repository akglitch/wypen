import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: Record<string, string>; // Adjust to your SwitchProps["classNames"] type
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === "light",
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <div
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
        onClick: () => onChange(), // Handle the onClick event for changing the theme
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={clsx(
          "w-auto h-auto",
          "bg-transparent",
          "rounded-lg",
          "flex items-center justify-center",
          "group-data-[selected=true]:bg-transparent",
          "!text-default-500",
          "pt-px",
          "px-0",
          "mx-0",
          classNames?.wrapper // Add your wrapper class from SwitchProps
        )}
      >
        {isSelected ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
      </div>
    </div>
  );
};
