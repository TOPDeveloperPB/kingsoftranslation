"use client";
import { Text } from "./Text";
import { Input } from "./Input";
import { cn } from "@/lib/utils";
import { ArrowDropDownIcon } from "@/public/icons";
import { useClickOutside } from "@/lib/useClickOutside";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  value?: string;
  options?: string[];
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  renderer?: (value: string, index?: number, array?: string[]) => ReactNode;
}

export function Select({
  value,
  defaultValue,
  options,
  placeholder = "Select a value",
  onChange,
  renderer,
}: Props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const [valueState, setValueState] = useState(defaultValue || value || "");

  const selectRef = useRef<HTMLDivElement>(null);

  const handleChange = (value: string) => {
    setValueState(value);
    onChange?.(value);
    toggleOpen();
  };

  useEffect(() => {
    value && setValueState(value);
  }, [value]);

  useClickOutside(selectRef, () => setOpen(false));

  return (
    <div className="relative" ref={selectRef}>
      <div
        onClick={toggleOpen}
        className={cn(
          "grid grid-flow-col justify-between items-center p-4 h-[56px] border border-[#DADADA] rounded-[6px] cursor-pointer bg-ffffff",
          open && "rounded-[6px_6px_0pc_0px]"
        )}
      >
        {!!valueState ? (
          <Text variant="Paragraph/Paragraph-2">{valueState}</Text>
        ) : (
          <Text variant="Paragraph/Paragraph-2" className="text-7e7e7e">
            {placeholder}
          </Text>
        )}
        <ArrowDropDownIcon
          className={cn(
            "transition-all",
            !valueState && "text-7e7e7e",
            open && "-scale-100"
          )}
        />
      </div>
      {open && (
        <div className="absolute top-full w-full left-0 grid gap-1 max-h-[calc(5*56px+4*4px)] overflow-y-auto border bg-ffffff">
          <div className="sticky top-0 p-1 bg-ffffff">
            <Input
              value={search}
              placeholder="Search..."
              onChange={({ currentTarget: { value } }) => setSearch(value)}
              className="h-[38px]"
            />
          </div>
          <div className="grid gap-1 p-1 pt-0" onClick={toggleOpen}>
            {options
              ?.filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
              )
              ?.map(
                renderer
                  ? renderer
                  : (option) => (
                      <Text
                        key={option}
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
                    )
              )}
          </div>
        </div>
      )}
    </div>
  );
}
