import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router';
import Plans from './plans';
import Quotation from './quotation';
import { quotationRoutePath, plansRoutePath, summaryRoutePath } from 'core/constants/routes.constants';
import { useAppSelector } from 'core/store';
import { NotFoundPage } from 'shared/components/not-found-page';
import Summary from './summary';

const AppRouter = () => {

  const ProtectedRoute = () => {
    const { user } = useAppSelector(state => state.user);
    return !!user ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={quotationRoutePath} element={<Quotation />} />
        <Route element={<ProtectedRoute />}>
          <Route path={`${plansRoutePath}/*`} element={<Plans />} />
          <Route path={`${summaryRoutePath}/*`} element={<Summary />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  )
};

export default AppRouter;
