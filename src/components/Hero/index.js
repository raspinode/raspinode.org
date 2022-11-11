import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Raspberry Pi',
    src: require("@site/static/img/raspberry.png").default,

    description: (
      <>
        Hardware and Operating System Setup
      </>
    ),
  },
  {
    title: 'Bitcoin',
    src: require("@site/static/img/Bitcoin.png").default,

    description: (
      <>
        Bitcoin Node Setup
      </>
    ),
  },
  {
    title: 'Lightning',
    src: require("@site/static/img/lightningnetwork.png").default,
    description: (
      <>
        Lightning Node Setup
      </>
    ),
  },
];

function Feature({src, title, description}) {

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
            className={styles.featureImg}
            src={src}
          />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Hero() {

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
