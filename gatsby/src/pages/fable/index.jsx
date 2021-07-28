import React, { useState } from 'react';
import sectionComponents from 'sections';
import sectionFables from 'sections/fables';
import { Logo } from 'components';

import {
  container,
  content,
  sidebar,
  sidebarLogo,
  sidebarItems,
  sidebarItem,
  sidebarLink,
  sidebarLinkActive,
  sidebarSublink,
  sidebarSublinkActive,
  sidebarArrow,
  sidebarArrowActive,
} from './fable.module.scss';

const Fable = () => {
  console.log('SECTION FABLES', sectionFables);
  console.log('SECTION COMPONENTS', sectionComponents);
  const fableKeysArr = Object.keys(sectionFables);

  const [activeComp, setActiveComp] = useState(0);
  const [activeVariation, setActiveVariation] = useState(0);

  const activeCompKey = fableKeysArr[activeComp];

  const Component = sectionComponents[activeCompKey];
  const data = sectionFables[activeCompKey];

  const variationData = data?.variations?.[activeVariation];

  const handleCompChange = (event, index) => {
    event.preventDefault();
    setActiveComp(index);
    setActiveVariation(0);
  };

  const handleVariationChange = (event, index) => {
    event.preventDefault();
    setActiveVariation(index);
  };

  return (
    <div className={container}>
      <div className={sidebar}>
        <div className={sidebarLogo}>
          <Logo />
        </div>
        <div className={sidebarItems}>
          {fableKeysArr.map((sectionName, index) => {
            const isActive = activeComp === index;
            const dataArr = sectionFables[sectionName];
            return (
              <div key={sectionName} className={sidebarItem}>
                <a
                  href="#comp"
                  className={`${sidebarLink} ${isActive ? sidebarLinkActive : ''}`}
                  onClick={(event) => handleCompChange(event, index)}
                >
                  {dataArr.name || sectionName}
                </a>
                {isActive && (
                  <div>
                    {dataArr.variations.map((variation, variationIndex) => {
                      const variationActive = activeVariation === variationIndex;
                      return (
                        <a
                          href="#type"
                          className={`${sidebarSublink} ${variationActive ? sidebarSublinkActive : ''}`}
                          key={variation.title || index}
                          onClick={(event) => handleVariationChange(event, variationIndex)}
                        >
                          <span className={variationActive ? sidebarArrowActive : sidebarArrow}>&#8627;</span>{' '}
                          {variation.title || 'Default Variation'}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={content}>{variationData ? <Component {...variationData.props} /> : <p>No Fables Found</p>}</div>
    </div>
  );
};

export default Fable;
