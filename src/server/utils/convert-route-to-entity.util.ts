const mapping: Record<string, string> = {
  companies: 'company',
  ideas: 'idea',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
