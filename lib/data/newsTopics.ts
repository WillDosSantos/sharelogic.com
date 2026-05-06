/** Topic taxonomy for news posts — shared by server loaders and client UI (must stay free of Node-only imports). */
export const newsTopics = [
  { id: "platform", label: "Platform" },
  { id: "governance", label: "Governance" },
  { id: "integrations", label: "Integrations" },
  { id: "security", label: "Security" },
  { id: "company", label: "Company" },
] as const;
