export function removeItemQuantitiesFromQuote(quote: any) {
  return {
    ...quote,
    breakup: quote.breakup.map((item: any) => {
      // Remove item.quantity if present
      let updatedItem = { ...item };
      if (updatedItem.item?.quantity) {
        const { quantity, ...restItem } = updatedItem.item;
        updatedItem.item = restItem;
      }

      // Remove @ondc/org/item_quantity if present
      if ("@ondc/org/item_quantity" in updatedItem) {
        const { ["@ondc/org/item_quantity"]: _omit, ...rest } = updatedItem;
        updatedItem = rest;
      }

      return updatedItem;
    })
  };
}
