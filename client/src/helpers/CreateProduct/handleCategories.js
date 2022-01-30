export const handleCategories = (e, input, setInput) => {
  setInput({
    ...input,
    categories: input.categories.filter((c) => c !== e.currentTarget.name),
  });
};