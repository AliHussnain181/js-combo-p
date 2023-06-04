import { useState } from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setDate(new Date(year, month - 1))}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded"
        >
          Prev
        </button>
        <h2 className="text-xl font-semibold">
          {new Intl.DateTimeFormat("default", { month: "long", year: "numeric" }).format(date)}
        </h2>
        <button
          onClick={() => setDate(new Date(year, month + 1))}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>

      <table className="w-full text-center">
        <thead>
          <tr>
            {weekdays.map((weekday) => (
              <th key={weekday} className="py-2">
                {weekday}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil((daysInMonth + startDay) / 7))].map((_, weekIndex) => (
            <tr key={weekIndex}>
              {[...Array(7)].map((_, dayIndex) => {
                const day = weekIndex * 7 + dayIndex - startDay + 1;
                const isToday = year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate();

                return (
                  <td key={dayIndex} className={`py-2 ${day > 0 && day <= daysInMonth ? "hover:bg-gray-200" : ""}`}>
                    {day > 0 && day <= daysInMonth && (
                      <button
                        className={`w-8 h-8 rounded-full ${isToday ? "bg-blue-500 text-white" : ""}`}
                        title={`${year}-${month + 1}-${day}`}
                      >
                        {day}
                      </button>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
