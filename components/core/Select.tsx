"use client";
import { useEffect, useState } from "react";
import { Text } from "./Text";
import { Input } from "./Input";
import { ArrowDropDownIcon, SearchIcon } from "@/public/icons";
import { cn } from "@/lib/utils";

interface Props {
  value?: string;
  options?: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function Select({ value, defaultValue, options, onChange }: Props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const [valueState, setValueState] = useState(defaultValue || value || "");

  const handleChange = (value: string) => {
    setValueState(value);
    onChange?.(value);
    toggleOpen();
  };

  useEffect(() => {
    value && setValueState(value);
  }, [value]);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className={cn(
          "grid grid-flow-col justify-between items-center p-4 h-[56px] border border-[#DADADA] rounded-[6px] cursor-pointer bg-ffffff",
          open && "rounded-[6px_6px_0pc_0px]"
        )}
      >
        <Text variant="Paragraph/Paragraph-2">{valueState}</Text>
        <ArrowDropDownIcon
          className={cn("transition-all", open && "-scale-100")}
        />
      </div>
      {open && (
        <div className="absolute top-full w-full left-0 grid gap-1 max-h-[calc(5*56px+4*4px)] overflow-y-auto border bg-fbfbfb">
          <div className="sticky top-0 p-1 bg-fbfbfb">
            <Input
              value={search}
              icon={<SearchIcon />}
              placeholder="Search"
              onChange={({ currentTarget: { value } }) => setSearch(value)}
            />
          </div>
          <div className="grid gap-1 p-1 pt-0">
            {options
              ?.filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
              )
              ?.map((option) => (
                <Text
                  variant="Paragraph/Paragraph-2"
                  onClick={() => handleChange(option)}
                  className={cn(
                    "p-4 cursor-pointer border border-[#DADADA] rounded-[6px] h-[56px] grid items-center bg-ffffff transition-colors hover:bg-fbfbfb",
                    option === valueState &&
                      "hover:bg-[#FFF5F0] hover:text-da5001 bg-[#FFF5F0] text-da5001"
                  )}
                >
                  {option}
                </Text>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
