import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 200, text: 'Projects'},
  { number: 520, text: 'Websites Created', },
  { number: 100, text: 'Softwares Created', },
  { number: 300, text: 'Active Projects', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
