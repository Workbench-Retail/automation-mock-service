export const on_search_items = [
  {
    id: "I1",
    time: {
      label: "enable",
      timestamp: "2025-01-08T07:30:00.000Z",
    },
    rating: "4",
    descriptor: {
      name: "Farm House Pizza",
      symbol: "https://snp.com/images/i1.png",
      short_desc: "Farm House Pizza",
      long_desc: "Farm House Pizza",
      images: ["https://snp.com/images/i1.png"],
    },
    quantity: {
      unitized: {
        measure: {
          unit: "unit",
          value: "1",
        },
      },
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "269.00",
      maximum_value: "269.00",
      tags: [
        {
          code: "range",
          list: [
            {
              code: "lower",
              value: "269.00",
            },
            {
              code: "upper",
              value: "894.00",
            },
          ],
        },
      ],
    },
    category_id: "F&B",
    category_ids: ["5:1"],
    fulfillment_id: "F1",
    location_id: "L1",
    related: false,
    recommended: true,
    "@ondc/org/returnable": false,
    "@ondc/org/cancellable": false,
    "@ondc/org/return_window": "PT1H",
    "@ondc/org/seller_pickup_return": false,
    "@ondc/org/time_to_ship": "PT45M",
    "@ondc/org/available_on_cod": false,
    "@ondc/org/contact_details_consumer_care":
      "Ramesh,ramesh@abc.com,18004254444",
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "item",
          },
        ],
      },
      {
        code: "custom_group",
        list: [
          {
            code: "id",
            value: "CG1",
          },
        ],
      },
      {
        code: "timing",
        list: [
          {
            code: "day_from",
            value: "1",
          },
          {
            code: "day_to",
            value: "5",
          },
          {
            code: "time_from",
            value: "1800",
          },
          {
            code: "time_to",
            value: "2200",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C1",
    descriptor: {
      name: "New Hand Tossed",
    },
    quantity: {
      unitized: {
        measure: {
          unit: "unit",
          value: "1",
        },
      },
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG1",
          },
          {
            code: "default",
            value: "yes",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG2",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C2",
    descriptor: {
      name: "100% Wheat Thin Crust",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG1",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG3",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C3",
    descriptor: {
      name: "Regular",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG2",
          },
          {
            code: "default",
            value: "yes",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG4",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C4",
    descriptor: {
      name: "Large",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "450.00",
      maximum_value: "450.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG2",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG5",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C5",
    descriptor: {
      name: "Medium",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "210.00",
      maximum_value: "210.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG2",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG6",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C6",
    descriptor: {
      name: "Regular",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "45.00",
      maximum_value: "45.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG3",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG4",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C7",
    descriptor: {
      name: "Medium",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "275.00",
      maximum_value: "275.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG3",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG6",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C8",
    descriptor: {
      name: "Grilled Mushrooms",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "35.00",
      maximum_value: "35.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG4",
          },
          {
            code: "default",
            value: "yes",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C9",
    descriptor: {
      name: "Fresh Tomato",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "35.00",
      maximum_value: "35.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG4",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C10",
    descriptor: {
      name: "Pepper Barbeque Chicken",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "50.00",
      maximum_value: "50.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG4",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "non_veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C11",
    descriptor: {
      name: "Grilled Mushrooms",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "80.00",
      maximum_value: "80.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG5",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C12",
    descriptor: {
      name: "Fresh Tomato",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "80.00",
      maximum_value: "80.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG5",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C13",
    descriptor: {
      name: "Pepper Barbeque Chicken",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "95.00",
      maximum_value: "95.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG5",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "non_veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C14",
    descriptor: {
      name: "Grilled Mushrooms",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "80.00",
      maximum_value: "80.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG6",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C15",
    descriptor: {
      name: "Fresh Tomato",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "80.00",
      maximum_value: "80.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG6",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C16",
    descriptor: {
      name: "Pepper Barbeque Chicken",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "95.00",
      maximum_value: "95.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG6",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "non_veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "I2",
    time: {
      label: "enable",
      timestamp: "2025-01-08T07:30:00.000Z",
    },
    rating: "4",
    descriptor: {
      name: "Mexican Patty Sandwich",
      symbol: "https://snp.com/images/i1.png",
      short_desc: "Mexican Patty Sandwich",
      long_desc: "Mexican Patty Sandwich",
      images: ["https://snp.com/images/i1.png"],
    },
    quantity: {
      unitized: {
        measure: {
          unit: "unit",
          value: "1",
        },
      },
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "229.00",
      maximum_value: "229.00",
      tags: [
        {
          code: "range",
          list: [
            {
              code: "lower",
              value: "229.00",
            },
            {
              code: "upper",
              value: "718.00",
            },
          ],
        },
      ],
    },
    category_id: "F&B",
    category_ids: ["5:1"],
    fulfillment_id: "F1",
    location_id: "L1",
    related: false,
    recommended: true,
    "@ondc/org/returnable": false,
    "@ondc/org/cancellable": false,
    "@ondc/org/return_window": "PT1H",
    "@ondc/org/seller_pickup_return": false,
    "@ondc/org/time_to_ship": "PT45M",
    "@ondc/org/available_on_cod": false,
    "@ondc/org/contact_details_consumer_care":
      "Ramesh,ramesh@abc.com,18004254444",
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "item",
          },
        ],
      },
      {
        code: "custom_group",
        list: [
          {
            code: "id",
            value: "CG11",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C17",
    descriptor: {
      name: "Mexican Bean Patty 15cm [6 inches]",
    },
    quantity: {
      unitized: {
        measure: {
          unit: "unit",
          value: "1",
        },
      },
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG11",
          },
          {
            code: "default",
            value: "yes",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG12",
          },
          {
            code: "id",
            value: "CG13",
          },
          {
            code: "id",
            value: "CG14",
          },
          {
            code: "id",
            value: "CG16",
          },
          {
            code: "id",
            value: "CG17",
          },
          {
            code: "id",
            value: "CG18",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C18",
    descriptor: {
      name: "Make Cheese Pull Mexican Patty 30cm",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "270.00",
      maximum_value: "270.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG11",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "child",
        list: [
          {
            code: "id",
            value: "CG12",
          },
          {
            code: "id",
            value: "CG15",
          },
          {
            code: "id",
            value: "CG17",
          },
          {
            code: "id",
            value: "CG18",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C19",
    descriptor: {
      name: "Multigrain Honey Oats",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG12",
          },
          {
            code: "default",
            value: "yes",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C20",
    descriptor: {
      name: "Parmesan Oregano",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG12",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C21",
    descriptor: {
      name: "Plain bread",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG13",
          },
          {
            code: "default",
            value: "yes",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C22",
    descriptor: {
      name: "Toasted bread",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG13",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C23",
    descriptor: {
      name: "Extra Cheese Slice",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "30.00",
      maximum_value: "30.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG14",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C24",
    descriptor: {
      name: "Extra Mexican Bean Patty Footlong",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "120.00",
      maximum_value: "120.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG15",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C25",
    descriptor: {
      name: "Lettuce",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG16",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C26",
    descriptor: {
      name: "Eggless Mayo",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "0.00",
      maximum_value: "0.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG17",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
  {
    id: "C27",
    descriptor: {
      name: "Dark Chunk Choc Cookies",
    },
    quantity: {
      available: {
        count: "99",
      },
      maximum: {
        count: "99",
      },
    },
    price: {
      currency: "INR",
      value: "99.00",
      maximum_value: "99.00",
    },
    category_id: "F&B",
    related: true,
    tags: [
      {
        code: "type",
        list: [
          {
            code: "type",
            value: "customization",
          },
        ],
      },
      {
        code: "parent",
        list: [
          {
            code: "id",
            value: "CG18",
          },
          {
            code: "default",
            value: "no",
          },
        ],
      },
      {
        code: "veg_nonveg",
        list: [
          {
            code: "veg",
            value: "yes",
          },
        ],
      },
    ],
  },
];

export const on_search_offers = [
  {
    id: "discp60",
    descriptor: {
      code: "discount",
      images: ["https://snp.com/images/offer1-banner.webp"],
    },
    location_ids: ["L1"],
    category_ids: ["C1"],
    item_ids: ["I1"],
    time: {
      label: "valid",
      range: {
        start: "2025-01-01T16:00:00.000Z",
        end: "2025-01-01T23:00:00.000Z",
      },
    },
    tags: [
      {
        code: "qualifier",
        list: [
          {
            code: "min_value",
            value: "159.00",
          },
        ],
      },
      {
        code: "benefit",
        list: [
          {
            code: "value_type",
            value: "percent",
          },
          {
            code: "value",
            value: "-60.00",
          },
          {
            code: "value_cap",
            value: "-120.00",
          },
        ],
      },
      {
        code: "meta",
        list: [
          {
            code: "additive",
            value: "yes",
          },
          {
            code: "auto",
            value: "no",
          },
        ],
      },
    ],
  },
  {
    id: "flat150",
    descriptor: {
      code: "discount",
      images: ["https://snp.com/images/offer2-banner.webp"],
    },
    location_ids: ["L1"],
    category_ids: ["C1", "C2"],
    item_ids: ["I1"],
    time: {
      label: "valid",
      range: {
        start: "2025-01-01T16:00:00.000Z",
        end: "2025-01-01T23:00:00.000Z",
      },
    },
    tags: [
      {
        code: "qualifier",
        list: [
          {
            code: "min_value",
            value: "499.00",
          },
        ],
      },
      {
        code: "benefit",
        list: [
          {
            code: "value_type",
            value: "amount",
          },
          {
            code: "value",
            value: "-150.00",
          },
        ],
      },
      {
        code: "meta",
        list: [
          {
            code: "additive",
            value: "yes",
          },
          {
            code: "auto",
            value: "no",
          },
        ],
      },
    ],
  },
];
