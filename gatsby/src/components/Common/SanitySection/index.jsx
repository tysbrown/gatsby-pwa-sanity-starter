import React from 'react';
import * as Sections from '../../../sections';

const SanitySection = (props) => {
  const { data } = props;
  const { _type: sectionType } = data;

  // Handle null _type prop
  if (!sectionType) {
    console.error('Please pass a _type from your template to the Section component');
    return null;
  }

  // Convert section type from snake_case to TitleCase
  const sectionName = sectionType[0].toUpperCase() + sectionType.slice(1, sectionType.length);

  // Get the section component
  const CustomSection = Sections[sectionName];

  // Handle missing exported Section
  if (!CustomSection) {
    console.error(`Can't find Section ${sectionName}, are you sure it exists in the sections directory?`);
  }

  // Return section
  return <CustomSection {...props} />;
};

export default SanitySection;
