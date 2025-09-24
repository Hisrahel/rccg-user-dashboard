import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import Events from "./pages/Events";
import Search from "./pages/Search";
import Resources from "./pages/Resources";
import Donate from "./pages/Donate";
import Testimony from "./pages/Testimony";
import Prayer from "./pages/Prayer";
import Feedback from "./pages/Feedback";
import Settings from "./pages/Settings";
import PrayerHistory from "./pages/PrayerHistory";
import TestimonyHistory from "./pages/TestimonyHistory";
import DonateHistory from "./pages/DonateHistory";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import EventDetails from "./pages/EventDetails";
import SearchProfile from "./pages/SearchProfile";
import Volunteering from "./pages/Volunteering";
import SinglesFellowship from "./pages/SinglesFellowship";
import ResourcesArticle from "./pages/ResourcesArticle";
import AllResources from "./pages/AllResources";
import AllVolunteer from "./pages/AllVolunteer";
import ManageSignUp from "./pages/ManageSignUp";
import NotificationSettings from "./pages/NotificationSettings";
import SettingsPrivacy from "./pages/SettingsPrivacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/search" element={<Search />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/allresources" element={<AllResources />} />
      <Route path="/resourcesarticle" element={<ResourcesArticle />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/testimony" element={<Testimony />} />
      <Route path="/prayer" element={<Prayer />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/prayerhistory" element={<PrayerHistory />} />
      <Route path="/testimonyhistory" element={<TestimonyHistory />} />
      <Route path="/donatehistory" element={<DonateHistory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/eventdetails" element={<EventDetails />} />
      <Route path="/searchprofile" element={<SearchProfile />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/allvolunteer" element={<AllVolunteer />} />
      <Route path="/managesignup" element={<ManageSignUp />} />
      <Route path="/singlesfellowship" element={<SinglesFellowship />} />
      <Route path="/notificationsettings" element={<NotificationSettings />} />
      <Route path="/settingsprivacy" element={<SettingsPrivacy />} />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/forgotPassword"
        element={
          <AuthLayout>
            <ForgotPassword />
          </AuthLayout>
        }
      />
      <Route
        path="/resetPassword"
        element={
          <AuthLayout>
            <ResetPassword />
          </AuthLayout>
        }
      />
      <Route
        path="/newPassword"
        element={
          <AuthLayout>
            <NewPassword />
          </AuthLayout>
        }
      />
    </Routes>
  );
}

export default App;
