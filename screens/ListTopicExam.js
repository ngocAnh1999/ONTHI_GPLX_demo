import React, { Component } from 'react';
import { 
    Container, Header, 
    Body, Right,
    Title, Text,
    Button, 
    Content, Left, 
    Card, CardItem
} from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class ListTopicExam extends Component {

    render() {
        const { navigation,route } = this.props;
        const { key_id } = route.params.itemId;
        return (
            <Container>
                <Header style={{ backgroundColor: "#1E90FF"}}>
                <Left>
                    <Button transparent
                    onPress={() => navigation.navigate("ListComponent", {
                        itemId: {key_id}
                    })}
                    >
                    <FontAwesome5Icon name="arrow-left" style={{fontSize: 20, color: 'white'}} solid/>
                    </Button>
                </Left>
                <Body>
                    <Title>Danh sách đề thi</Title>
                </Body>
                <Right>
                <Button transparent>
                    <FontAwesome5Icon name="bars" style={{fontSize: 20, color: 'white'}} solid/>
                </Button>
                </Right>
                </Header>
                <Content>
                    <Text>Danh sách đề thi chưa được cập nhật!</Text>
                </Content>
            </Container>
        );
    }
}