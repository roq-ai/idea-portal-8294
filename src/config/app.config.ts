interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Visitor'],
  tenantRoles: ['Administrator', 'Team Member', 'Contributor', 'Moderator'],
  tenantName: 'Company',
  applicationName: 'Idea Portal',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
