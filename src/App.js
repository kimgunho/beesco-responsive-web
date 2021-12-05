import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import './lang/i18n';
import styles from './App.module.scss';
import ScrollToTop from './component/ScrollToTop';
import Header from './component/Header';
import Home from './pages/Home';
import Company from './pages/Company';
import Business from './pages/Business';
import Society from './pages/Society';
import People from './pages/People';
import Footer from './component/Footer';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={cx('wrapper')}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/business" element={<Business />} />
          <Route path="/society" element={<Society />} />
          <Route path="/people" element={<People />} />
          <Route path="*" element={<div className={cx('notFound')}>존재하지 않는 페이지입니다.</div>} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
