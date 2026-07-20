import { DocumentListPage } from './DocumentListPage';
import { ENVIRONMENT_DOCS, BIDDING_DOCS } from '../data/content';

export function EnvironmentPage() {
  return (
    <DocumentListPage
      title="Tra cứu môi trường"
      subtitle="Báo cáo quan trắc, giám sát môi trường và kết quả đo lường"
      documents={ENVIRONMENT_DOCS}
    />
  );
}

export function BiddingPage() {
  return (
    <DocumentListPage
      title="Thông tin đấu thầu"
      subtitle="Thông báo mời thầu và kết quả đấu thầu các gói thầu"
      documents={BIDDING_DOCS}
    />
  );
}

export default EnvironmentPage;
