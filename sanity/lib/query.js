"use client";

import { groq } from "next-sanity";
import client from "../lib/client";

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"]{
        _id,
       homeText,
      }`
  );
}
