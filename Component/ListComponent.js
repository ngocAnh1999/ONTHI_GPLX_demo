import React, { Component } from 'react';
import { Container, Header, 
    Left, Body, Right,
    Button, Icon, Title, Subtitle,
    Content, List, ListItem, Text,
    H1,H3 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from './Style';

export default class ListComponent extends Component {

    render() {
        const { itemId } = route.params;
        return (
            <Container>
                {/* <Header>
                    <Body>
                        <Title style={styles.margin}>Ôn thi giấy phép lái xe </Title>
                    </Body>
                </Header> */}
                <Grid>
                    <Col>
                        <Text>{itemId}</Text>
                    </Col>
                    <Col></Col>
                </Grid>
            </Container>
        );
    }
}
