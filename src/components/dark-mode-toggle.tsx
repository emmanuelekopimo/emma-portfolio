"use client";

import { useTheme } from "./theme-provider";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const options: Array<{
    value: "light" | "dark" | "system";
    icon: string;
    label: string;
  }> = [
    { value: "light", icon: "ri-sun-line", label: "Light" },
    { value: "system", icon: "ri-computer-line", label: "System" },
    { value: "dark", icon: "ri-moon-line", label: "Dark" },
  ];

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`
            flex items-center justify-center px-3 py-2 rounded transition-colors
            ${
              theme === option.value
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }
          `}
          title={option.label}
          aria-label={`Switch to ${option.label} mode`}
        >
          <i className={`${option.icon} text-lg`} />
        </button>
      ))}
    </div>
  );
}
