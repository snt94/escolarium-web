"use client"
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  value: number;
  icon?: ReactNode;
  description?: string;
  bgColor?: string;
  trendData?: number[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  icon,
  description,
  bgColor = "bg-blue-500",
  trendData = [],
}) => {
  // Determina cor do valor: verde se positivo, vermelho se negativo
  const valueColor = value >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="flex flex-col p-3 bg-white shadow-lg rounded-xl w-72 hover:shadow-2xl transition">
      {/* Título */}
      <h2 className="text-gray-500 text-sm font-medium">{title}</h2>

      {/* Valor principal com ícone */}
      <div className="flex items-center mt-2">
        {icon && (
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${bgColor} mr-3`}
          >
            {icon}
          </div>
        )}
        <span className={`text-2xl font-semibold ${valueColor}`}>{value}</span>
      </div>

      {/* Descrição */}
      {description && (
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      )}

      {/* Mini gráfico de tendência */}
      {trendData.length > 0 && (
        <div className="mt-3">
          <Sparklines data={trendData} height={40}>
            <SparklinesLine color={value >= 0 ? "green" : "red"} />
          </Sparklines>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
