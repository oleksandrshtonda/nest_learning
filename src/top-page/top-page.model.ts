export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Goods,
}

export class TopPageModel {
  firstCategory: TopLevelCategory;
  secondCategory: string;
  category: string;
  title: string;
  hh?: {
    vacanciesQuantity: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: Array<{
    title: string;
    description: string;
  }>;
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
