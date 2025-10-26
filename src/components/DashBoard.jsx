import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Calendar } from "@/components/ui/calendar";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useBudget } from "@/context/BudgetContext";
import { useAuth } from "@/context/AuthContext";
import { AddIncomeModal, AddBudgetModal } from "./Modals";
import { toast } from "sonner";

function DashBoard({ onNavigate }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenseForm, setExpenseForm] = useState({
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    category: "Food Stuff",
  });

  const { user, logout } = useAuth();

  const {
    totalIncome,
    totalExpenses,
    balance,
    savings,
    expenses,
    budgetItems,
    addExpense,
    deleteExpense,
    deleteBudgetItem,
    deleteAllExpenses,
    deleteAllBudgetItems,
    getExpensesByCategory,
  } = useBudget();

  const chartData = getExpensesByCategory();

  const categories = [
    "Food Stuff",
    "Transport",
    "Church Commitment",
    "Miscellaneous",
    "Hair Cut",
    "Elder Gifts",
  ];

  const COLORS = [
    "hsl(271, 91%, 65%)",
    "hsl(142, 76%, 36%)",
    "hsl(48, 96%, 53%)",
    "hsl(189, 94%, 43%)",
    "hsl(0, 0%, 0%)",
    "hsl(25, 95%, 53%)",
    "hsl(0, 0%, 30%)",
  ];

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (expenseForm.description && expenseForm.amount) {
      addExpense(expenseForm);
      toast.success("Expense added successfully!");
      setExpenseForm({
        description: "",
        amount: "",
        date: new Date().toISOString().split("T")[0],
        category: "Food Stuff",
      });
    }
  };

  const formatCurrency = (amount) => {
    return `N${parseFloat(amount || 0).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  const recentExpenses = [...expenses].reverse().slice(0, 5);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    onNavigate("home");
  };

  return (
    <div className="bg-blue-50 min-h-screen w-full overflow-x-hidden pb-8">
      <nav className="w-full px-4 py-4 md:px-8 lg:px-16 bg-blue-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-32 sm:w-40 md:w-48">
            <img src={logo} alt="App logo" className="w-full h-auto" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base text-gray-700 hidden sm:inline">
              Welcome, <span className="font-semibold">{user?.username}</span>
            </span>
            <button
              onClick={() => onNavigate("home")}
              className="border border-black bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base font-medium"
            >
              Home
            </button>
            <button
              onClick={handleLogout}
              className="border border-red-500 bg-white text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-colors duration-200 text-sm md:text-base font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full px-4 md:px-8 lg:px-16 mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            <AddIncomeModal>
              <div className="bg-white border border-black rounded-xl p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="text-sm md:text-base font-semibold mb-2">
                  INCOME
                </h3>
                <p className="text-lg md:text-2xl font-bold">
                  {formatCurrency(totalIncome)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Click to add</p>
              </div>
            </AddIncomeModal>

            <div className="bg-white border border-black rounded-xl p-4 text-center">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                EXPENSES
              </h3>
              <p className="text-lg md:text-2xl font-bold">
                {formatCurrency(totalExpenses)}
              </p>
            </div>

            <div className="bg-white border border-black rounded-xl p-4 text-center">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                BALANCE
              </h3>
              <p
                className={`text-lg md:text-2xl font-bold ${
                  balance < 0 ? "text-red-500" : "text-black-600"
                }`}
              >
                {formatCurrency(balance)}
              </p>
            </div>

            <div className="bg-white border border-black rounded-xl p-4 text-center">
              <h3 className="text-sm md:text-base font-semibold mb-2">
                SAVINGS
              </h3>
              <p className="text-lg md:text-2xl font-bold">
                {formatCurrency(savings)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                    +
                  </div>
                  <h2 className="text-lg md:text-2xl font-bold">
                    Add new expense
                  </h2>
                </div>

                <form onSubmit={handleExpenseSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium text-sm md:text-base">
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="What was the expense for?"
                      value={expenseForm.description}
                      onChange={(e) =>
                        setExpenseForm({
                          ...expenseForm,
                          description: e.target.value,
                        })
                      }
                      className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium text-sm md:text-base">
                        Amount(N)
                      </label>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={expenseForm.amount}
                        onChange={(e) =>
                          setExpenseForm({
                            ...expenseForm,
                            amount: e.target.value,
                          })
                        }
                        className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        step="0.01"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-sm md:text-base">
                        Date
                      </label>
                      <input
                        type="date"
                        value={expenseForm.date}
                        onChange={(e) =>
                          setExpenseForm({
                            ...expenseForm,
                            date: e.target.value,
                          })
                        }
                        className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-sm md:text-base">
                      Category
                    </label>
                    <select
                      value={expenseForm.category}
                      onChange={(e) =>
                        setExpenseForm({
                          ...expenseForm,
                          category: e.target.value,
                        })
                      }
                      className="w-full p-2 md:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Add Expense
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                  BUDGET OVERVIEW
                </h2>
                {chartData.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-center">
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {chartData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value) => formatCurrency(value)}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex flex-col justify-center space-y-2">
                      {chartData.map((entry, index) => {
                        const total = chartData.reduce(
                          (sum, item) => sum + item.value,
                          0
                        );
                        const percentage = (
                          (entry.value / total) *
                          100
                        ).toFixed(1);
                        return (
                          <div
                            key={entry.name}
                            className="flex items-center gap-2"
                          >
                            <div
                              className="w-8 h-1"
                              style={{
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            ></div>
                            <span className="text-xs md:text-sm">
                              {entry.name} ({percentage}%)
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    No expenses yet. Start adding expenses to see your budget
                    overview.
                  </p>
                )}
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold">BUDGET</h2>
                  <AddBudgetModal>
                    <button className="border border-black px-3 py-1 md:px-4 md:py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-colors text-xs md:text-sm">
                      ADD ITEM +
                    </button>
                  </AddBudgetModal>
                </div>

                {budgetItems.length > 0 ? (
                  <div className="space-y-2">
                    {budgetItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border rounded-lg p-3 hover:bg-gray-50"
                      >
                        <span className="font-medium text-sm md:text-base">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2 md:gap-4">
                          <span className="text-sm md:text-base">
                            {formatCurrency(item.amount)}
                          </span>
                          <span className="text-xs md:text-sm text-gray-500">
                            {formatDate(item.date)}
                          </span>
                          <button
                            onClick={() => {
                              deleteBudgetItem(item.id);
                              toast.success("Budget item deleted");
                            }}
                            className="text-red-500 hover:text-red-700 text-lg"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        deleteAllBudgetItems();
                        toast.success("All budget items deleted");
                      }}
                      className="w-full mt-4 border border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      Delete all budget items
                    </button>
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No budget items yet. Click "ADD ITEM +" to create your
                    budget.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold mb-4">
                  Recent Expenses
                </h2>
                {recentExpenses.length > 0 ? (
                  <div className="space-y-2">
                    {recentExpenses.map((expense) => (
                      <div
                        key={expense.id}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border rounded-lg p-2 md:p-3 hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <span className="text-sm md:text-base font-medium block">
                            {expense.description}
                          </span>
                          <span className="text-xs text-gray-500">
                            {expense.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm md:text-base font-semibold">
                            {formatCurrency(expense.amount)}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(expense.date)}
                          </span>
                          <button
                            onClick={() => {
                              deleteExpense(expense.id);
                              toast.success("Expense deleted");
                            }}
                            className="text-red-500 hover:text-red-700 text-lg"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        deleteAllExpenses();
                        toast.success("All expenses deleted");
                      }}
                      className="w-full mt-4 border border-red-500 text-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white transition-colors text-xs md:text-sm"
                    >
                      Delete all expenses history
                    </button>
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-4">
                    No expenses yet. Add your first expense above!
                  </p>
                )}
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
                <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
                  Calendar
                </h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-lg border mx-auto"
                />
                {selectedDate && (
                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-semibold text-sm mb-2">
                      Transactions on{" "}
                      {formatDate(selectedDate.toISOString().split("T")[0])}
                    </h3>
                    {(() => {
                      const dateStr = selectedDate.toISOString().split("T")[0];
                      const dayExpenses = expenses.filter(
                        (e) => e.date === dateStr
                      );
                      const dayBudgetItems = budgetItems.filter(
                        (b) => b.date === dateStr
                      );

                      if (
                        dayExpenses.length === 0 &&
                        dayBudgetItems.length === 0
                      ) {
                        return (
                          <p className="text-xs text-gray-500 text-center py-2">
                            No transactions on this date
                          </p>
                        );
                      }

                      return (
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {dayExpenses.map((expense) => (
                            <div
                              key={expense.id}
                              className="text-xs p-2 bg-red-50 rounded border-l-2 border-red-500"
                            >
                              <div className="font-medium">
                                {expense.description}
                              </div>
                              <div className="text-gray-600">
                                {expense.category} -{" "}
                                {formatCurrency(expense.amount)}
                              </div>
                            </div>
                          ))}
                          {dayBudgetItems.map((item) => (
                            <div
                              key={item.id}
                              className="text-xs p-2 bg-green-50 rounded border-l-2 border-green-500"
                            >
                              <div className="font-medium">
                                Budget: {item.category}
                              </div>
                              <div className="text-gray-600">
                                {formatCurrency(item.amount)}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
