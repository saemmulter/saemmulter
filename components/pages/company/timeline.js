import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors, mixin } from '../../../styles/designSystem';

const TimelineList = styled.div({
  '& > div:first-of-type': {
    marginTop: 0,
  },
});

const TimelineItem = styled.div({
  marginTop: Rem(10),
  [mq.minSmall]: {
    display: 'flex',
  },
});

const TimelineHeadline = styled.h3({
  padding: `${Rem(5)} 0`,
  '& time': {
    fontWeight: fontWeights.bold,
    fontSize: Rem(18),
    lineHeight: 1.33333333,
    color: colors.important,
  },
  [mq.minSmall]: {
    width: Rem(70),
  },
});

const TimelineDefinition = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
  '& dt, & dd': {
    paddingTop: Rem(7),
    paddingBottom: Rem(7),
  },
  [mq.minSmall]: {
    ...mixin.col,
    display: 'flex',
  },
});

const TimelineDate = styled.dt({
  paddingRight: Rem(10),
  width: Rem(130),
  fontWeight: fontWeights.semiBold,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.default,
});

const TimelineSummary = styled.dd({
  width: `calc(100% - ${Rem(130)})`,
  fontWeight: fontWeights.regular,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.default,
  '& span': {
    display: 'block',
  },
});

const DueDate = styled.span(({ dueDateShow }) => ({
  display: dueDateShow ? null : 'none',
}));

function Timeline2021({ y2021Timeline }) {
  return (
    <>
      <TimelineDate>
        <time dateTime={y2021Timeline.dateTimeStartMachine}>{y2021Timeline.dateTimeStartHuman}</time>
        <DueDate dueDateShow={y2021Timeline.dateTimeEndDisplay}> - <time dateTime={y2021Timeline.dateTimeEndMachine}>{y2021Timeline.dateTimeEndHuman}</time></DueDate>
      </TimelineDate>
      <TimelineSummary>{y2021Timeline.timelineSummary}</TimelineSummary>
    </>
  )
}

function Timeline2020({ y2020Timeline }) {
  return (
    <>
      <TimelineDate>
        <time dateTime={y2020Timeline.dateTimeStartMachine}>{y2020Timeline.dateTimeStartHuman}</time>
        <DueDate dueDateShow={y2020Timeline.dateTimeEndDisplay}> - <time dateTime={y2020Timeline.dateTimeEndMachine}>{y2020Timeline.dateTimeEndHuman}</time></DueDate>
      </TimelineDate>
      <TimelineSummary>{y2020Timeline.timelineSummary}</TimelineSummary>
    </>
  )
}

function Timeline2019({ y2019Timeline }) {
  return (
    <>
      <TimelineDate>
        <time dateTime={y2019Timeline.dateTimeStartMachine}>{y2019Timeline.dateTimeStartHuman}</time>
        <DueDate dueDateShow={y2019Timeline.dateTimeEndDisplay}> - <time dateTime={y2019Timeline.dateTimeEndMachine}>{y2019Timeline.dateTimeEndHuman}</time></DueDate>
      </TimelineDate>
      <TimelineSummary>{y2019Timeline.timelineSummary}</TimelineSummary>
    </>
  )
}

function CompanyTimeline() {
  const { t } = useTranslation('common')

  const y2021Timelines = [
    {
      id: 1,
      dateTimeStartMachine: '02-05',
      dateTimeStartHuman: '02/05',
      dateTimeEndMachine: '02-05',
      dateTimeEndHuman: '02/05',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2021i01')}`,
    },
    {
      id: 2,
      dateTimeStartMachine: '06-29',
      dateTimeStartHuman: '06/29',
      dateTimeEndMachine: '12-31',
      dateTimeEndHuman: '12/31',
      dateTimeEndDisplay: true,
      timelineSummary: `${t('timeline.y2021i02')}`,
    },
    {
      id: 3,
      dateTimeStartMachine: '06-29',
      dateTimeStartHuman: '06/29',
      dateTimeEndMachine: '06-29',
      dateTimeEndHuman: '06/29',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2021i03')}`,
    },
    {
      id: 4,
      dateTimeStartMachine: '09-09',
      dateTimeStartHuman: '09/09',
      dateTimeEndMachine: '09-09',
      dateTimeEndHuman: '09/09',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2021i04')}`,
    },
    {
      id: 5,
      dateTimeStartMachine: '10-07',
      dateTimeStartHuman: '10/07',
      dateTimeEndMachine: '12-31',
      dateTimeEndHuman: '12/31',
      dateTimeEndDisplay: true,
      timelineSummary: `${t('timeline.y2021i05')}`,
    },
  ];

  const y2020Timelines = [
    {
      id: 1,
      dateTimeStartMachine: '01-03',
      dateTimeStartHuman: '01/03',
      dateTimeEndMachine: '01-03',
      dateTimeEndHuman: '01/03',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i01')}`,
    },
    {
      id: 2,
      dateTimeStartMachine: '05-27',
      dateTimeStartHuman: '05/27',
      dateTimeEndMachine: '05-27',
      dateTimeEndHuman: '05/27',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i02')}`,
    },
    {
      id: 3,
      dateTimeStartMachine: '07-23',
      dateTimeStartHuman: '07/23',
      dateTimeEndMachine: '07-23',
      dateTimeEndHuman: '07/23',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i03')}`,
    },
    {
      id: 4,
      dateTimeStartMachine: '08-04',
      dateTimeStartHuman: '08/04',
      dateTimeEndMachine: '08-04',
      dateTimeEndHuman: '08/04',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i04')}`,
    },
    {
      id: 5,
      dateTimeStartMachine: '10-19',
      dateTimeStartHuman: '10/19',
      dateTimeEndMachine: '10-23',
      dateTimeEndHuman: '10/23',
      dateTimeEndDisplay: true,
      timelineSummary: `${t('timeline.y2020i05')}`,
    },
    {
      id: 6,
      dateTimeStartMachine: '11-09',
      dateTimeStartHuman: '11-09',
      dateTimeEndMachine: '11-09',
      dateTimeEndHuman: '11/09',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i06')}`,
    },
    {
      id: 7,
      dateTimeStartMachine: '11-21',
      dateTimeStartHuman: '11/21',
      dateTimeEndMachine: '11-21',
      dateTimeEndHuman: '11/21',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i07')}`,
    },
    {
      id: 8,
      dateTimeStartMachine: '12-09',
      dateTimeStartHuman: '12/09',
      dateTimeEndMachine: '12-09',
      dateTimeEndHuman: '12/09',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i08')}`,
    },
    {
      id: 9,
      dateTimeStartMachine: '12-30',
      dateTimeStartHuman: '12/30',
      dateTimeEndMachine: '12-06',
      dateTimeEndHuman: '12/06',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2020i09')}`,
    },
  ]

  const y2019Timelines = [
    {
      id: 1,
      dateTimeStartMachine: '07-08',
      dateTimeStartHuman: '07/08',
      dateTimeEndMachine: '12-06',
      dateTimeEndHuman: '12/06',
      dateTimeEndDisplay: true,
      timelineSummary: `${t('timeline.y2019i01')}`,
    },
    {
      id: 2,
      dateTimeStartMachine: '07-15',
      dateTimeStartHuman: '07/15',
      dateTimeEndMachine: '07-15',
      dateTimeEndHuman: '07/15',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2019i02')}`,
    },
    {
      id: 3,
      dateTimeStartMachine: '10-04',
      dateTimeStartHuman: '10/04',
      dateTimeEndMachine: '10-04',
      dateTimeEndHuman: '10/04',
      dateTimeEndDisplay: false,
      timelineSummary: `${t('timeline.y2019i03')}`,
    },
  ]

  return (
    <TimelineList>
      <TimelineItem>
        <TimelineHeadline><time dateTime='2021'>2021</time></TimelineHeadline>
        <TimelineDefinition>
          {y2021Timelines.map(y2021Timeline => (
            <Timeline2021
              y2021Timeline={y2021Timeline}
              key={y2021Timeline.id}
            />
          ))}
        </TimelineDefinition>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeadline><time dateTime='2020'>2020</time></TimelineHeadline>
        <TimelineDefinition>
          {y2020Timelines.map(y2020Timeline => (
            <Timeline2020
              y2020Timeline={y2020Timeline}
              key={y2020Timeline.id}
            />
          ))}
        </TimelineDefinition>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeadline><time dateTime='2019'>2019</time></TimelineHeadline>
        <TimelineDefinition>
          {y2019Timelines.map(y2019Timeline => (
            <Timeline2019
              y2019Timeline={y2019Timeline}
              key={y2019Timeline.id}
            />
          ))}
        </TimelineDefinition>
      </TimelineItem>
    </TimelineList>
  )
}

export default CompanyTimeline;
