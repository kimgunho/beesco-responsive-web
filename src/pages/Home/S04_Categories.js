import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S04_Categories.module.scss';
import categories from '../../assets/data/categories';

const cx = classNames.bind(styles);

const Categories = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <ul className={cx('categories')}>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={category.link}>
              <h3 className={cx('title')}>{category.title}</h3>
              <ul className={cx('items')}>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{t(`home.${item}`)}</li>
                ))}
              </ul>
            </Link>
            <div className={cx('background')} style={{ backgroundImage: `url(${category.image})` }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
