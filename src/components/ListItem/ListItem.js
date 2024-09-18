import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Animated } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

ListItem.propTypes = {
    children: PropTypes.element.isRequired,
    leftAction: PropTypes.func,
    rightAction: PropTypes.func,
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element,
    card: PropTypes.bool
}

function ListItem({ children, leftAction, rightAction, leftComponent, rightComponent, card }) {

    const handleLeftAction = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.3)', justifyContent: 'center', padding: 16, borderRadius: card ? 4 : 0 }}>
                <Animated.View  style={{ transform: [{ scale }] }}>
                    {leftComponent}
                </Animated.View>
            </View>
        )
    }
    const handleRigthAction = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <View style={{ flex: 1, backgroundColor: '#177FC2', justifyContent: 'center', padding: 16, alignItems: 'flex-end', borderRadius: card ? 4 : 0 }}>
                <Animated.View  style={{ transform: [{ scale }] }}>
                    {rightComponent}
                </Animated.View>
            </View>
        )
    }

    return (
        <Swipeable
            friction={1.5}
            renderLeftActions={handleLeftAction}
            onSwipeableLeftOpen={leftAction}

            renderRightActions={handleRigthAction}
            onSwipeableRightOpen={rightAction}

        >
            {children}
        </Swipeable>
    )
}


export default React.memo(ListItem)