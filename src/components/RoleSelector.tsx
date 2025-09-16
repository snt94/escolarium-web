import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export default function RolesSelector() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { label: "Estudante", value: "estudante" },
    { label: "Coordenador", value: "coordenador" },
    { label: "Professor", value: "professor" },
  ];

  return (
    <div className="flex gap-4">
      {roles.map((role) => (
        <ToggleButton
          key={role.value}
          label={role.label}
          value={role.value}
          selected={selectedRole === role.value}
          onToggle={(value) =>
            setSelectedRole((prev) => (prev === value ? null : value))
          }
        />
      ))}
    </div>
  );
}
