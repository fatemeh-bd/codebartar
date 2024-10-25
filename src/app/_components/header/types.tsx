export interface NavItemType {
  text: string;
  path?: string;
  childrens?: {
    path: string;
    text: string;
  }[];
}
