export const handleInputs = (e, input, setInput) => {
  setInput({
    ...input,
    [e.target.name]:
      e.target.value === "Select here..."
        ? [...input]
        : e.target.name === "categories"
        ? !input.categories.includes(e.target.value)
          ? [...input.categories, e.target.value]
          : [...input.categories]
        : e.target.value,
  });
};