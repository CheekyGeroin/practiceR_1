import PropTypes from 'prop-types'
import { SectionContainer, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled'

export const Statistics = ({title, data}) => {
    return <SectionContainer>
        {title !== ' ' && <Title>{title}</Title>}

  <StatList class="stat-list">
            {data.map(({ id, label, percentage }) => <StatItem key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
            </StatItem>)}
    
  </StatList>
</SectionContainer>
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}