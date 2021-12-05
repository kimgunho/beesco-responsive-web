import React from 'react';
import classNames from 'classnames/bind';

import styles from './S03_Video.module.scss';

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <div className={cx('container')}>
      <iframe
        className={cx('video')}
        src="https://www.youtube.com/embed/QGV9JRy1uII"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="BEESCO PR"></iframe>
    </div>
  );
};

export default Video;
