import styled from '@emotion/styled'

export const ProfileCard = styled.div`
padding: 15px;
text-align:center;
background-color:#fff;
max-width: 600px;
`

export const DescriptionCard = styled.div`
margin:0 auto;
`

export const Avatar = styled.img`
width:300px;
height:auto;
margin-bottom:20px;
`

export const Name = styled.p`
font-size:20px;
font-weight:bold;
margin:0;
margin-bottom: 10px;`

export const Tag = styled.p`
color:#b2b4b8;
margin:0;
margin-bottom: 10px;`

export const Location = styled.p`
color:#b2b4b8;
font-size:18px;
margin:0;
`

export const StatsList = styled.ul`
list-style:none;
display:flex;
align-items:center;
justify-content:center;
padding:0;
background-color:#edf4ff;
max-width:300px;
`

export const StatsItem = styled.li`
display:flex;
flex-direction:column;
:not(:last-child){
    margin-right:35px;
}
`

export const Label = styled.span``

export const Quantity = styled.span`
font-weight:bold;`