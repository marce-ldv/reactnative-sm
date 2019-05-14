import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class User extends React.Component {

    _handleLogin = () => {
        alert('logueado')
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Login Form!</Text>
                <Button
                    onPress={this._handleLogin}
                    title="Login"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
