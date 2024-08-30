"use client";
import { cn } from "@/lib/utils";
import { MOCK_SERVICES } from "./data";
import { CSSProperties, useState } from "react";
import { Button, Input, Text } from "@/components/core";
import { ArrowIcon, ArrowDropDownIcon, SearchIcon } from "@/public/icons";
import Link from "next/link";

export function OurDocumentTranslationServices() {
  const [viewMore, setViewMore] = useState(false);
  const toggleViewMore = () => setViewMore((prev) => !prev);

  const [expanded, setExpanded] = useState<string>();
  const [search, setSearch] = useState("");
  return (
    <div className="grid gap-6">
      <Text as="h2" variant="Heading/Heading-2">
        Our document translation services
      </Text>
      <Input
        className="rounded-[16px] w-[360px]"
        icon={<SearchIcon />}
        type="text"
        onChange={({ currentTarget: { value } }) => setSearch(value)}
        placeholder="Enter document name"
      />
      <div
        className={cn(
          "grid gap-[0px_24px] grid-cols-3 overflow-hidden transition-all"
        )}
      >
        {MOCK_SERVICES.filter(({ title }) =>
          title.toLowerCase().includes(search.toLowerCase())
        ).map(({ title, description, icon, background, href }, index) => {
          const isActive = expanded === title;

          const toggleExpanding = () =>
            isActive ? setExpanded(undefined) : setExpanded(title);

          const areExtraHidden = index > 5 && !viewMore;

          return (
            <div
              key={index}
              className={cn(
                "grid grid-rows-[1fr] transition-all mb-6",
                areExtraHidden && "grid-rows-[0fr] mb-0"
              )}
            >
              <div className="overflow-hidden">
                <div
                  key={index}
                  className={cn(
                    "group bg-ffffff hover:bg-f6f6f6 p-6 rounded-[32px_0px_32px_32px] relative transition-colors grid gap-4 content-start h-fit",
                    isActive && "bg-f6f6f6"
                  )}
                >
                  <div
                    style={{ "--background": background } as CSSProperties}
                    className={cn(
                      `p-2 w-fit rounded-[10px] transition-colors bg-[var(--background)] group-hover:bg-ffffff`,
                      isActive && "bg-ffffff"
                    )}
                  >
                    {icon}
                  </div>
                  <div className="grid gap-2">
                    <Text
                      as="h5"
                      variant="Heading/Heading-5"
                      className="uppercase"
                    >
                      {title}
                    </Text>
                    <Text
                      variant="Paragraph/Paragraph-3"
                      style={
                        isActive
                          ? {}
                          : ({
                              display: "-webkit-box",
                              "-webkit-line-clamp": "2",
                              "-webkit-box-orient": "vertical",
                              overflow: "hidden",
                            } as CSSProperties)
                      }
                    >
                      {description}
                    </Text>
                    <Link
                      href={href}
                      className={cn(
                        "border-[8px] border-fbfbfb bg-da5001 group-hover:bg-1d1c19 transition-colors w-12 aspect-square rounded-full grid items-center justify-center absolute z-[2] top-[-7px] right-[-7px] box-content",
                        isActive && "bg-1d1c19"
                      )}
                    >
                      <ArrowIcon
                        className={cn(
                          "group-hover:-rotate-[30deg] transition-transform",
                          isActive && "-rotate-[30deg]"
                        )}
                      />
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={toggleExpanding}
                      className="justify-start"
                    >
                      {isActive ? "Less" : "More"}
                      <ArrowDropDownIcon
                        className={`${
                          isActive ? "-scale-100" : "scale-100"
                        } transition-transform `}
                      />
                    </Button>
                    {/* top edge */}
                    <div
                      className={cn(
                        "group-hover:after:bg-f6f6f6 after:transition-colors absolute top-0 right-0 bg-fbfbfb w-[calc(56px+24px)] h-[24px] z-1 after:absolute after:block after:top-0 after:left-0 after:h-[24px] after:w-[24px] after:bg-ffffff after:rounded-[0px_24px_0px_0px]",
                        isActive && "after:bg-f6f6f6"
                      )}
                    />
                    {/* right edge */}
                    <div
                      className={cn(
                        "group-hover:after:bg-f6f6f6 after:transition-colors absolute top-0 right-0 bg-fbfbfb w-[24px] h-[calc(56px+24px)] z-1 after:absolute after:block after:bottom-0 after:left-0 after:h-[24px] after:w-[24px] after:bg-ffffff after:rounded-[0px_24px_0px_0px]",
                        isActive && "after:bg-f6f6f6"
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="-mt-6 grid justify-center">
        <Button variant="outlined" onClick={toggleViewMore}>
          {viewMore ? "Less" : "More"} Services
          <ArrowDropDownIcon
            className={cn("transition-transform", viewMore && "-scale-100")}
          />
        </Button>
      </div>
    </div>
  );
}
