import React, { createContext, useContext, useState, useEffect } from "react";
import { getCategoryColor } from "../lib/budgetUtils";

const BudgetContext = createContext();

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  return context;
};

export const BudgetProvider = ({ children }) => {
  // Initialize state from localStorage
  const [income, setIncome] = useState(() => {
    const saved = localStorage.getItem("budget_income");
    return saved ? JSON.parse(saved) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("budget_expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [budgetItems, setBudgetItems] = useState(() => {
    const saved = localStorage.getItem("budget_items");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("budget_income", JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem("budget_expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget_items", JSON.stringify(budgetItems));
  }, [budgetItems]);

  // Calculate totals
  const totalIncome = income.reduce(
    (sum, item) => sum + parseFloat(item.amount || 0),
    0
  );
  const totalExpenses = expenses.reduce(
    (sum, item) => sum + parseFloat(item.amount || 0),
    0
  );
  const balance = totalIncome - totalExpenses;

  // Calculate savings from budget items with "Savings" category
  const savings = budgetItems
    .filter((item) => item.category === "Savings")
    .reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);

  // Add income
  const addIncome = (incomeData) => {
    const newIncome = {
      id: Date.now(),
      ...incomeData,
      amount: parseFloat(incomeData.amount),
    };
    setIncome([...income, newIncome]);
  };

  // Add expense
  const addExpense = (expenseData) => {
    const newExpense = {
      id: Date.now(),
      ...expenseData,
      amount: parseFloat(expenseData.amount),
    };
    setExpenses([...expenses, newExpense]);
  };

  // Add budget item
  const addBudgetItem = (budgetData) => {
    const newBudgetItem = {
      id: Date.now(),
      ...budgetData,
      amount: parseFloat(budgetData.amount),
    };
    setBudgetItems([...budgetItems, newBudgetItem]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Delete budget item
  const deleteBudgetItem = (id) => {
    setBudgetItems(budgetItems.filter((item) => item.id !== id));
  };

  // Delete all expenses
  const deleteAllExpenses = () => {
    setExpenses([]);
  };

  // Delete all budget items
  const deleteAllBudgetItems = () => {
    setBudgetItems([]);
  };

  // Get expenses by category for chart - now includes budget items
  const getExpensesByCategory = () => {
    const categoryTotals = {};

    expenses.forEach((expense) => {
      const category = expense.category || "Uncategorized";
      categoryTotals[category] =
        (categoryTotals[category] || 0) + parseFloat(expense.amount);
    });

    // Add budget items to chart (including Savings)
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

  const value = {
    income,
    expenses,
    budgetItems,
    totalIncome,
    totalExpenses,
    balance,
    savings,
    addIncome,
    addExpense,
    addBudgetItem,
    deleteExpense,
    deleteBudgetItem,
    deleteAllExpenses,
    deleteAllBudgetItems,
    getExpensesByCategory,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
