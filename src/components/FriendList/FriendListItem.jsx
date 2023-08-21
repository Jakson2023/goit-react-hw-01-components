import { LiItems, Status } from "./FriendListItem.styled"
export const FriendListItem = ({ item }) => {
    return (<LiItems class={item.id} key={item.id}>
        <Status class="status" online={item.isOnline} >{item.isOnline}</Status>
        <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
        <p class="name">{item.name}</p>
    </LiItems>)


}
