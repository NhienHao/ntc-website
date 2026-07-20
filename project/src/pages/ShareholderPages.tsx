import { DocumentListPage } from './DocumentListPage';
import {
  SHAREHOLDER_ANNOUNCEMENTS,
  AGM_DOCUMENTS,
  FINANCIAL_REPORTS,
  CHARTER_DOCS,
} from '../data/content';

export function ShareholderAnnouncementsPage() {
  return (
    <DocumentListPage
      title="Thông báo cổ đông"
      subtitle="Các thông báo, nghị quyết và báo cáo dành cho cổ đông"
      documents={SHAREHOLDER_ANNOUNCEMENTS}
    />
  );
}

export function AGMPage() {
  return (
    <DocumentListPage
      title="Đại hội cổ đông"
      subtitle="Tài liệu, biên bản và nghị quyết Đại hội đồng cổ đông"
      documents={AGM_DOCUMENTS}
    />
  );
}

export function FinancialReportsPage() {
  return (
    <DocumentListPage
      title="Báo cáo tài chính"
      subtitle="Báo cáo tài chính theo quý và năm đã được kiểm toán"
      documents={FINANCIAL_REPORTS}
    />
  );
}

export function CharterPage() {
  return (
    <DocumentListPage
      title="Điều lệ & Quy chế"
      subtitle="Điều lệ công ty và các quy chế quản trị nội bộ"
      documents={CHARTER_DOCS}
    />
  );
}

export default ShareholderAnnouncementsPage;
