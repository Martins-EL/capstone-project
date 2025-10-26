// Budget utility functions

// Get category color
export const getCategoryColor = (category) => {
  const colors = {
    "Food Stuff": "hsl(var(--chart-1))",
    "Church Commitment": "hsl(var(--chart-2))",
    Transport: "hsl(var(--chart-3))",
    Miscellaneous: "hsl(var(--chart-4))",
    "Hair Cut": "hsl(var(--chart-5))",
    Savings: "hsl(25, 95%, 53%)",
    "Elder Gifts": "hsl(0, 0%, 30%)",
  };
  return colors[category] || "hsl(var(--chart-1))";
};

// Get expenses by category for chart
export const getExpensesByCategory = (expenses, budgetItems) => {
  const categoryTotals = {};

  // Add expenses
  expenses.forEach((expense) => {
    const category = expense.category || "Uncategorized";
    categoryTotals[category] =
      (categoryTotals[category] || 0) + parseFloat(expense.amount);
  });

  // Add budget items
  budgetItems.forEach((item) => {
    const category = item.category || "Uncategorized";
    categoryTotals[category] =
      (categoryTotals[category] || 0) + parseFloat(item.amount);
  });

  return Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
    fill: getCategoryColor(name),
  }));
};
