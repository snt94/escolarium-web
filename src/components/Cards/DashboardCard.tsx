import React from "react";
import InfoCard from "./InfoCard";
import { ChartLine, DollarSign } from "lucide-react";

const DashboardCard = () => {
  const userTrend: number[] = [100, 120, 150, 130, 160, 180, 200];
  const revenueTrend: number[] = [
    15000, 14800, 14200, 13000, 12000, 11800, 11500,
  ];

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      <InfoCard
        title="Usuários Ativos"
        value={1234}
        icon={<ChartLine />}
        description="Última atualização há 1 hora"
        bgColor="bg-green-500"
        trendData={userTrend}
      />
      <InfoCard
        title="Receita Mensal"
        value={-1245}
        icon={<DollarSign />}
        description="Comparado ao mês passado"
        bgColor="bg-yellow-500"
        trendData={revenueTrend}
      />
    </div>
  );
};

export default DashboardCard;
