import React, { Component } from 'react';
import {
    Container, Header,
    Left, Body, Right,
    Button, Icon, Title, Subtitle,
    Content, List, ListItem, Text,
    H1, H3
} from 'native-base';
import { styles } from './Style';

class Item extends Component {
    render() {

        const { title, description, key } = this.props;

        return (
            <ListItem onPress={() => navigation.navigate('ListComonent',{
                                        itemId: {key},
                                    }
            )}>
                    <Body>
                        <H1 style={styles.textHeader}>{title}</H1>
                        <Text style={styles.textContent}>{description}</Text>
                    </Body>
            </ListItem>
        )
    }
}

const data = [
    {
        title: 'BẮNG A1',
        description: 'Xe mô tô 2 bánh có dung tích xy lanh dưới 175 cm3',
        key: 'A1'
    },
    {
        title: 'BẰNG A2',
        description: 'Xe mô tô 2 bánh có dung tích xy lanh từ 175 cm3 trở lên',
        key: 'A2'
    },
    {
        title: 'BẰNG A3',
        description: 'Xe mô tô 3 bánh',
        key: 'A3'
    },
    {
        title: 'BẰNG A4',
        description: 'Xe máy kéo nhỏ có trọng tải đến 1000kg',
        key: 'A4'
    },
    {
        title: 'BẰNG B1',
        description: 'Không hành nghề lái xe, xe đến 9 chỗ ngồi, xe trọng tải dưới 3.500kg',
        key: 'B1'
    },
    {
        title: 'BẰNG B2',
        description: 'Hành nghề lái xe, xe đến 9 chỗ ngồi, xe trọng tải dưới 3.5000kg',
        key: 'B2'
    },
    {
        title: 'BẰNG C',
        description: 'Xe ô tô đến 9 chỗ ngồi, xe trọng tải trên 3.500kg',
        key: 'C'
    },
    {
        title: 'BẰNG D',
        description: 'Xe ô tô chở từ 10 đến 30 người',
        key: 'D'
    },
    {
        title: 'BẰNG E',
        description: 'Xe ô tô chở trên 30 người',
        key: 'E'
    },
    {
        title: 'BẰNG F',
        description: 'Xe rơ móc',
        key: 'F'
    }
]

export default class Home extends Component {
    render() {
        return (
            <Container>
                {/* <Header>
                    <Body>
                        <Title style={styles.margin}>Chọn bằng lái xe ôn thi</Title>
                    </Body>
                </Header> */}
                <Content>
                    <List>
                        {
                            data.map(item => {
                                const {title, description} = item;
                                return <Item title={title} description={description} 
                                        />
                            })
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}