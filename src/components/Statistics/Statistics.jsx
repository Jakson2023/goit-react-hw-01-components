import { List, LiItem, Title } from "./Statistics.styled"
export const Statistics = ({stats,title}) => {
return (<section class="statistics">
  <Title class="title">{title}</Title>

  <List class="stat-list">{stats.map(item => {
    return <LiItem class={item.id} key={item.id}>
    <span class="label">{item.label}</span>
    <span class="percentage">{item.percentage}{`%`}</span>
  </LiItem>
  })}   
  </List>
</section>)
}