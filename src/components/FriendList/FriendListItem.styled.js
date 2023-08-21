import styled from 'styled-components'


export const LiItems = styled.li`
display: flex;
align-items: center;
width: 150px;
border: 2px solid orange;
gap: 10px;
    padding: 5px;
`;

export const Status = styled.span`
height: 10px;
width: 10px;
border-radius: 50%;
background-color: ${online => {
    console.log(online.online);
    return (online.online ? "green" : "red")
}

};
`;