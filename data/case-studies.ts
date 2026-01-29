import type { CaseStudyCardProps } from '@/components/case-study-card';

export type { CaseStudyCardProps };

export const invoiceSplitterCaseStudy: CaseStudyCardProps = {
  title: 'Invoice Splitter Automation',
  client: 'Mid-Market Manufacturing Company',
  problem:
    'Manual invoice processing where multi-invoice PDFs needed to be split and routed individually. NetSuite AP module only accepts one invoice per file, requiring manual splitting and emailing—costing 12+ hours per month.',
  solution:
    'Automated system that receives email with multi-invoice PDF, splits into individual files, and returns separate emails for each invoice ready for NetSuite AP module ingestion.',
  results: [
    { metric: 'Time Saved', value: '12+ hrs/month' },
    { metric: 'Error Reduction', value: 'Near 100%' },
    { metric: 'NetSuite Compatible', value: 'Yes' },
  ],
  tags: ['NetSuite', 'Document Processing', 'Email Automation', 'AP'],
};

export const allCaseStudies = [invoiceSplitterCaseStudy];
