import React, { useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function BeforeAfterChart({ onChartRendered }) {
  const chartData = [
    { name: "Client Retention", Before: 60, After: 95 },
    { name: "Delivery Speed", Before: 65, After: 90 },
    { name: "Content Quality", Before: 70, After: 97 },
    { name: "ROI Growth", Before: 55, After: 92 },
  ];

  // 🔁 Run callback when chart mounts
  useEffect(() => {
    if (onChartRendered) onChartRendered();
  }, [onChartRendered]);

  return (
    <div className="relative bg-gradient-to-b  py-20 text-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
          Before & After with <span className="text-red-500">Vidly Pro</span>
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Our clients experience measurable performance boosts after upgrading
          to Vidly Pro’s professional editing and marketing systems.
        </p>

        {/* Chart Container */}
        <div className="relative bg-[#0a0a0a] rounded-3xl p-8 border border-[#2c2c2c] backdrop-blur-sm">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
              onMouseEnter={() => console.log("📊 Chart hovered")}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2c2c2c" />
              <XAxis dataKey="name" stroke="#ccc" tick={{ fill: "#ccc" }} />
              <YAxis stroke="#ccc" tick={{ fill: "#ccc" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  borderRadius: "10px",
                  border: "1px solid #444",
                  color: "#fff",
                }}
              />
              <Legend wrapperStyle={{ color: "#fff" }} />
              <defs>
                {/* Before: matte silver gradient */}
                <linearGradient id="beforeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#4b5563" />
                </linearGradient>

                {/* After: bright gold gradient */}
                <linearGradient id="afterGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>

              <Bar
                dataKey="Before"
                fill="url(#beforeGradient)"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="After"
                fill="url(#afterGradient)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          Results shown are based on real-world improvements achieved through
          Vidly Pro’s full-scale content optimization.
        </p>
      </div>
    </div>
  );
}
