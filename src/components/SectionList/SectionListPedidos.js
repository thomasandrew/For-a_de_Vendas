import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { View, ScrollView, SectionList, TouchableOpacity } from 'react-native'
import { Text } from '../ui'
import ListItemContainer from '../ListItem'

CustomSectionList.propTypes = {
    sections: PropTypes.array.isRequired,
    renderItem: PropTypes.elementType.isRequired,
    style: PropTypes.object,
    spacing: PropTypes.number,
    total: PropTypes.func,
    header: PropTypes.elementType,
    footer: PropTypes.elementType,
    fabMargin: PropTypes.bool,
}

export default function CustomSectionList({ style, sections, renderItem, spacing = 10, total, header, footer, fabMargin }) {
    const sectionListRef = useRef()
    const [scrollItens, setScrollItens] = useState([])

    useEffect(() => {
        if (sections) {
            let _total = 0
            const _scrollItens = []
            sections.forEach((e, i) => {
                _scrollItens.push(e.title)
                _total += e.data.length
            })
            setScrollItens(_scrollItens)
            total && total(_total)
        }
    }, [])

    const handleSrollToSection = (index) =>
        sectionListRef.current.scrollToLocation({ sectionIndex: index, itemIndex: 0 })

    const SectionTitle = styled.View`
        padding-left: 16px;
        padding-bottom: ${spacing}px;
        background: ${({ theme }) => theme.body};
    `

    return (
        <View style={{ flexDirection: 'row', overflow: 'hidden', ...style }}>

            <SectionList
                ref={sectionListRef}
                legacyImplementation={true}
                removeClippedSubviews
                initialNumToRender={100}

                sections={sections}
                stickySectionHeadersEnabled={true}
                renderItem={renderItem}
                renderSectionFooter={() => <View style={{ height: 10 }}></View>}
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                ListEmptyComponent={()=><View><Text>Lista vazia</Text></View>}

                ItemSeparatorComponent={() => <View style={{ height: spacing }}></View>}

                getItemLayout={(data, index) => (
                    { length: 60, offset: 60 * index, index }
                )}
                keyExtractor={(item, index) => item + index}
                headerIndexList={0}

                onScrollToIndexFailed={(info) => { alert('espere') }}

                showsVerticalScrollIndicator={false}
                style={{ margin: spacing, marginTop: 0, flex: 0 }}
            />
        </View>
    )
}


export { ListItemContainer }