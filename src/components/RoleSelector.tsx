import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export default function RolesSelector() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const cargos = [
    { label: "Estudante", value: "estudante" },
    { label: "Coordenador", value: "coordenador" },
    { label: "Professor", value: "professor" },
  ];

  return (
    <div className="flex gap-4">
      {cargos.map((cargo) => (
        <ToggleButton
          key={cargo.value}
          label={cargo.label}
          value={cargo.value}
          selected={selectedRole === cargo.value}
          onToggle={(value) =>
            setSelectedRole((prev) => (prev === value ? null : value))
          }
        />
      ))}
    </div>
  );
}
