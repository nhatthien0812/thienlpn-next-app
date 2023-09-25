"use client";

import { log } from "console";
import { useEffect } from "react";

export default function Init() {
  const init = async () => {
    return await fetch(`http://localhost:3000/init/api`);
  };

  useEffect(() => {
    init().then(async (response) => {
      console.log(await response.text());
    });
  }, []);
  return <></>;
}
