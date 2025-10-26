import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useBudget } from "@/context/BudgetContext";
import { toast } from "sonner";

// Simple date formatter
const formatDate = (date) => {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const toISODate = (date) => {
  if (!date) return "";
  return date.toISOString().split("T")[0];
};

export function AddIncomeModal({ children }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const { addIncome } = useBudget();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && source) {
      addIncome({
        amount,
        source,
        date: toISODate(date),
      });
      toast.success("Income added successfully!");
      // Reset form
      setAmount("");
      setSource("");
      setDate(new Date());
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Income</DialogTitle>
          <DialogDescription>
            Add a new income entry to track your earnings.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-sm">Source</label>
            <input
              type="text"
              placeholder="Salary, Freelance, etc."
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm">Amount (N)</label>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              step="0.01"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm">Date</label>
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full p-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {formatDate(date)}
            </button>
            {showCalendar && (
              <div className="mt-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate || new Date());
                    setShowCalendar(false);
                  }}
                  className="rounded-md border mx-auto"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Add Income
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function AddBudgetModal({ children }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food Stuff");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const { addBudgetItem } = useBudget();

  const categories = [
    "Food Stuff",
    "Transport",
    "Church Commitment",
    "Miscellaneous",
    "Hair Cut",
    "Elder Gifts",
    "Savings",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category) {
      addBudgetItem({
        amount,
        category,
        date: toISODate(date),
      });
      toast.success(`Budget item added for ${category}`);
      // Reset form
      setAmount("");
      setCategory("Food Stuff");
      setDate(new Date());
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Budget Item</DialogTitle>
          <DialogDescription>
            Set a budget allocation for a specific category.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium text-sm">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm">Amount (N)</label>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              step="0.01"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm">Date</label>
            <button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full p-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {formatDate(date)}
            </button>
            {showCalendar && (
              <div className="mt-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    setDate(newDate || new Date());
                    setShowCalendar(false);
                  }}
                  className="rounded-md border mx-auto"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Add Budget Item
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
