import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutOverviewPage = lazy(() => import('./pages/AboutOverviewPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const OrgChartPage = lazy(() => import('./pages/OrgChartPage'));
const StrengthsPage = lazy(() => import('./pages/StrengthsPage'));
const ProjectsOverviewPage = lazy(() => import('./pages/ProjectsOverviewPage'));
const ParkDetailPage = lazy(() => import('./pages/ParkDetailPage'));
const LinkedCompaniesPage = lazy(() => import('./pages/LinkedCompaniesPage'));
const InvestmentPage = lazy(() => import('./pages/InvestmentPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const RecruitmentPage = lazy(() => import('./pages/RecruitmentPage'));



function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin" />
      </div>
    </div>
  );
}

// Wrapper components for named exports from ShareholderPages
function ShareholderAnnouncementsWrapper() {
  return <Suspense fallback={<LoadingSpinner />}><LazyShareholderAnnouncements /></Suspense>;
}
function AGMWrapper() {
  return <Suspense fallback={<LoadingSpinner />}><LazyAGM /></Suspense>;
}
function FinancialReportsWrapper() {
  return <Suspense fallback={<LoadingSpinner />}><LazyFinancialReports /></Suspense>;
}
function CharterWrapper() {
  return <Suspense fallback={<LoadingSpinner />}><LazyCharter /></Suspense>;
}
function EnvironmentWrapper() {
  return <Suspense fallback={<LoadingSpinner />}><LazyEnvironment /></Suspense>;
}
function BiddingWrapper() {
  return <Suspense fallback={<LoadingSpinner />}><LazyBidding /></Suspense>;
}

const LazyShareholderAnnouncements = lazy(() => import('./pages/ShareholderPages').then(m => ({ default: m.ShareholderAnnouncementsPage })));
const LazyAGM = lazy(() => import('./pages/ShareholderPages').then(m => ({ default: m.AGMPage })));
const LazyFinancialReports = lazy(() => import('./pages/ShareholderPages').then(m => ({ default: m.FinancialReportsPage })));
const LazyCharter = lazy(() => import('./pages/ShareholderPages').then(m => ({ default: m.CharterPage })));
const LazyEnvironment = lazy(() => import('./pages/LookupPages').then(m => ({ default: m.EnvironmentPage })));
const LazyBidding = lazy(() => import('./pages/LookupPages').then(m => ({ default: m.BiddingPage })));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            {/* Gioi thieu */}
            <Route path="/gioi-thieu/tong-quan" element={<AboutOverviewPage />} />
            <Route path="/gioi-thieu/lich-su" element={<HistoryPage />} />
            <Route path="/gioi-thieu/so-do-to-chuc" element={<OrgChartPage />} />
            <Route path="/gioi-thieu/tiem-luc" element={<StrengthsPage />} />

            {/* Du an */}
            <Route path="/du-an" element={<ProjectsOverviewPage />} />
            <Route path="/du-an/:slug" element={<ParkDetailPage />} />

            {/* Cong ty lien ket */}
            <Route path="/cong-ty-lien-ket" element={<LinkedCompaniesPage />} />

            {/* Tu van */}
            <Route path="/tu-van-dau-tu" element={<InvestmentPage />} />

            {/* Co dong */}
            <Route path="/co-dong/thong-bao" element={<ShareholderAnnouncementsWrapper />} />
            <Route path="/co-dong/dai-hoi" element={<AGMWrapper />} />
            <Route path="/co-dong/bao-cao" element={<FinancialReportsWrapper />} />
            <Route path="/co-dong/dieu-le" element={<CharterWrapper />} />

            {/* Tra cuu */}
            <Route path="/tra-cuu/moi-truong" element={<EnvironmentWrapper />} />
            <Route path="/tra-cuu/dau-thau" element={<BiddingWrapper />} />

            {/* Thu vien */}
            <Route path="/thu-vien/tin-tuc" element={<NewsPage />} />
            <Route path="/thu-vien/video" element={<MediaPage />} />
            <Route path="/thu-vien/e-brochure" element={<MediaPage />} />

            {/* Others */}
            <Route path="/tuyen-dung" element={<RecruitmentPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
