import React from 'react';
import { Link } from 'components';
import { generatePath } from '../../../utils/helpers';
import './styles.scss';

const Breadcrumbs = ({ noHomeLink, parentUid, parentName, currentPageUid, currentPageName, centreAlign }) => {
  const breadcrumbs = [];

  if (!noHomeLink) {
    breadcrumbs.push({
      uid: '/',
      name: 'Home',
    });
  }

  if (parentUid) {
    breadcrumbs.push({
      uid: generatePath(parentUid),
      name: parentName,
    });
  }

  breadcrumbs.push({
    uid: generatePath(currentPageUid),
    name: currentPageName,
    isCurrent: true,
  });

  const schema = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement":[
          ${breadcrumbs.map(
            (breadcrumb, index) => `{
              "@type": "ListItem",
              "position": ${index + 1},
              "item": {
                "@id": "${process.env.SITE_URL}${breadcrumb.uid}",
                "name": "${breadcrumb.name}"
              }
            }`
          )}
        ]
      }
    </script>`;

  return (
    <section className={`breadcrumbs ${centreAlign ? 'centre-align' : ''}`}>
      <div className="wrapper">
        {breadcrumbs.map((breadcrumb) => {
          if (breadcrumb.isCurrent) {
            return (
              <div className="breadcrumbs-item last-item" key={breadcrumb.name}>
                {breadcrumb.name}
              </div>
            );
          }
          return (
            <div className="breadcrumbs-item" key={breadcrumb.name}>
              <Link to={breadcrumb.uid}>{breadcrumb.name}</Link>
            </div>
          );
        })}
        <div dangerouslySetInnerHTML={{ __html: schema }} />
      </div>
    </section>
  );
};

export default Breadcrumbs;
