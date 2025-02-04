import { groq } from "next-sanity";

export const allProducts  = groq`*[_type == "product"]`;
export const eight = groq`*[_type == "product"][0..7]`;
export const neupro = groq`*[_type == "neutralsectionproduct"]`
export const vitapro = groq`*[_type == "vitaproduct"]`