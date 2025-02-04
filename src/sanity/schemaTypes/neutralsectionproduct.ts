import { defineType } from "sanity"

export const neutralsectionproduct = defineType({
    name: "neutralsectionproduct",
    title: "neutralsectionproduct",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            validation: (rule) => rule.required(),
            type: "slug",
            options :{
                source :"title"
            }
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        },
        {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (rule) => rule.min(1).max(5).error("Rating must be between 1 and 5"),
      description: "Product rating (1 to 5 stars)"
    },
    {
      name: "stock",
      title: "Stock Quantity",
      type: "number",
      validation: (rule) => rule.required().min(0).error("Stock must be 0 or greater"),
      description: "Number of items available in stock"
    },
    {
      name: "colors",
      title: "Color Options",
      type: "array",
      of: [{ type: "string" }],
      description: "Available color options for the product (e.g., ['red', 'blue', 'green'])"
    },
    {
      name: "sizes",
      title: "Size Options",
      type: "array",
      of: [{ type: "string" }],
      description: "Available size options for the product (e.g., ['S', 'M', 'L', 'XL'])"
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (rule) => rule.required().min(1).error("Quantity must be at least 1"),
      description: "Default quantity for this product (used to show quantity options)"
    }
    ]
})