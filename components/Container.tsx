import { cn } from "@/utils/cn";
import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-white border rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}

// http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=0a583add6a0cae651e08ea5e2b49030d&cnt=56

// https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=ca62460d6d966177370320098e7e62f3&cnt=2
