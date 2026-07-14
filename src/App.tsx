import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ResponsiveLayout } from './components/layout/ResponsiveLayout';
import { AuthProvider } from './context/AuthContext';

// Auth
import { DesktopLogin } from './pages/auth/DesktopLogin';
import { MobileLogin } from './pages/auth/MobileLogin';
import { DesktopSignUp } from './pages/auth/DesktopSignUp';
import { MobileSignUp } from './pages/auth/MobileSignUp';
import { DesktopRedirecting } from './pages/auth/DesktopRedirecting';
import { MobileRedirecting } from './pages/auth/MobileRedirecting';

// Admin
import { DesktopAdminDashboard } from './pages/admin/DesktopAdminDashboard';
import { MobileAdminDashboard } from './pages/admin/MobileAdminDashboard';
import { DesktopPatientsList } from './pages/admin/DesktopPatientsList';
import { MobilePatientsList } from './pages/admin/MobilePatientsList';
import { DesktopAddPatient } from './pages/admin/DesktopAddPatient';
import { MobileAddPatient } from './pages/admin/MobileAddPatient';
import { DesktopPatientDetail } from './pages/admin/DesktopPatientDetail';
import { MobilePatientDetail } from './pages/admin/MobilePatientDetail';
import { DesktopDoctorsList } from './pages/admin/DesktopDoctorsList';
import { MobileDoctorsList } from './pages/admin/MobileDoctorsList';
import { DesktopAddDoctor } from './pages/admin/DesktopAddDoctor';
import { MobileAddDoctor } from './pages/admin/MobileAddDoctor';
import { DesktopInvoiceDetail } from './pages/admin/DesktopInvoiceDetail';
import { MobileInvoiceDetail } from './pages/admin/MobileInvoiceDetail';
import { DesktopInvoicesList } from './pages/admin/DesktopInvoicesList';
import { MobileInvoicesList } from './pages/admin/MobileInvoicesList';

// Doctor
import { DesktopDoctorDashboard } from './pages/doctor/DesktopDoctorDashboard';
import { MobileDoctorDashboard } from './pages/doctor/MobileDoctorDashboard';
import { DesktopMedicalHistory } from './pages/doctor/DesktopMedicalHistory';
import { MobileMedicalHistory } from './pages/doctor/MobileMedicalHistory';
import { DesktopCreatePrescription } from './pages/doctor/DesktopCreatePrescription';
import { MobileCreatePrescription } from './pages/doctor/MobileCreatePrescription';
import { DesktopDocumentUpload } from './pages/doctor/DesktopDocumentUpload';
import { MobileDocumentUpload } from './pages/doctor/MobileDocumentUpload';
import { DesktopDocumentReview } from './pages/doctor/DesktopDocumentReview';
import { MobileDocumentReview } from './pages/doctor/MobileDocumentReview';

// Staff
import { DesktopStaffDashboard } from './pages/staff/DesktopStaffDashboard';
import { MobileStaffDashboard } from './pages/staff/MobileStaffDashboard';

// Patient
import { DesktopPatientDashboard } from './pages/patient/DesktopPatientDashboard';
import { MobilePatientDashboard } from './pages/patient/MobilePatientDashboard';

// Common
import { DesktopComingSoon } from './pages/common/DesktopComingSoon';
import { MobileComingSoon } from './pages/common/MobileComingSoon';
import { DesktopSettings } from './pages/common/DesktopSettings';
import { MobileSettings } from './pages/common/MobileSettings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<ResponsiveLayout desktopComponent={DesktopLogin} mobileComponent={MobileLogin} />} />
          <Route path="/signup" element={<ResponsiveLayout desktopComponent={DesktopSignUp} mobileComponent={MobileSignUp} />} />
          <Route path="/redirecting" element={<ResponsiveLayout desktopComponent={DesktopRedirecting} mobileComponent={MobileRedirecting} />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ResponsiveLayout desktopComponent={DesktopAdminDashboard} mobileComponent={MobileAdminDashboard} />} />
        <Route path="/admin/patients" element={<ResponsiveLayout desktopComponent={DesktopPatientsList} mobileComponent={MobilePatientsList} />} />
        <Route path="/admin/patients/add" element={<ResponsiveLayout desktopComponent={DesktopAddPatient} mobileComponent={MobileAddPatient} />} />
        <Route path="/admin/patients/:id" element={<ResponsiveLayout desktopComponent={DesktopPatientDetail} mobileComponent={MobilePatientDetail} />} />
        <Route path="/admin/doctors" element={<ResponsiveLayout desktopComponent={DesktopDoctorsList} mobileComponent={MobileDoctorsList} />} />
        <Route path="/admin/doctors/add" element={<ResponsiveLayout desktopComponent={DesktopAddDoctor} mobileComponent={MobileAddDoctor} />} />
        <Route path="/admin/billing" element={<ResponsiveLayout desktopComponent={DesktopInvoicesList} mobileComponent={MobileInvoicesList} />} />
        <Route path="/admin/billing/:id" element={<ResponsiveLayout desktopComponent={DesktopInvoiceDetail} mobileComponent={MobileInvoiceDetail} />} />
        <Route path="/admin/staff" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/admin/reports" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/admin/settings" element={<ResponsiveLayout desktopComponent={DesktopSettings} mobileComponent={MobileSettings} />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor/dashboard" element={<ResponsiveLayout desktopComponent={DesktopDoctorDashboard} mobileComponent={MobileDoctorDashboard} />} />
        <Route path="/doctor/records" element={<ResponsiveLayout desktopComponent={DesktopMedicalHistory} mobileComponent={MobileMedicalHistory} />} />
        <Route path="/doctor/records/upload" element={<ResponsiveLayout desktopComponent={DesktopDocumentUpload} mobileComponent={MobileDocumentUpload} />} />
        <Route path="/doctor/records/:id/review" element={<ResponsiveLayout desktopComponent={DesktopDocumentReview} mobileComponent={MobileDocumentReview} />} />
        <Route path="/doctor/prescribe" element={<ResponsiveLayout desktopComponent={DesktopCreatePrescription} mobileComponent={MobileCreatePrescription} />} />
        <Route path="/doctor/patients" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/doctor/prescriptions" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/doctor/profile" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/doctor/support" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/doctor/settings" element={<ResponsiveLayout desktopComponent={DesktopSettings} mobileComponent={MobileSettings} />} />
        
        {/* Staff Routes */}
        <Route path="/staff/dashboard" element={<ResponsiveLayout desktopComponent={DesktopStaffDashboard} mobileComponent={MobileStaffDashboard} />} />
        <Route path="/staff/register" element={<ResponsiveLayout desktopComponent={DesktopAddPatient} mobileComponent={MobileAddPatient} />} />
        <Route path="/staff/records" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/staff/billing" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/staff/support" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/staff/settings" element={<ResponsiveLayout desktopComponent={DesktopSettings} mobileComponent={MobileSettings} />} />
        
        {/* Patient Routes */}
        <Route path="/patient/dashboard" element={<ResponsiveLayout desktopComponent={DesktopPatientDashboard} mobileComponent={MobilePatientDashboard} />} />
        <Route path="/patient/prescriptions" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/patient/records" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/patient/billing" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/patient/support" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/patient/settings" element={<ResponsiveLayout desktopComponent={DesktopSettings} mobileComponent={MobileSettings} />} />

        {/* General / Shared Routes */}
        <Route path="/messages" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />
        <Route path="/support" element={<ResponsiveLayout desktopComponent={DesktopComingSoon} mobileComponent={MobileComingSoon} />} />

      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
