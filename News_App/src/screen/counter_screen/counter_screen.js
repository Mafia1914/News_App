import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, AppState } from 'react-native';

const CounterNumber = () => {
    const appState = useRef(AppState.currentState);
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            appState.current = nextAppState;
            console.log('App State Changed:', appState.current);
            if (appState.current === 'background') {
                
                console.log('App is in the background, stopping counter');
                clearInterval(intervalRef.current);
            } else if (appState.current === 'active') {
                console.log('App is active, starting counter');
                startCounter();
            }
        });

        startCounter();

        return () => {
            clearInterval(intervalRef.current);
            subscription.remove();
        };
    }, []);

    const startCounter = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCounter(prevCounter => {
                console.log('Counter incremented:', prevCounter + 1);
                return prevCounter + 1;
            });
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{counter}</Text>
            <View style={styles.button_group}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: 80,
        textAlign: "center",
        width: "100%",
        padding: 20,
        marginTop: 60,
        marginBottom: 30,
    },
    button_group: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
});

export default CounterNumber;
