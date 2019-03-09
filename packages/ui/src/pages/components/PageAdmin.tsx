import React, { FunctionComponent, useState } from 'react'
import { Edit2, Eye, Code, Settings } from 'react-feather'
import { getNodeByPath } from '@compoz/core'
import styled from '../../theming'
import { TabsNav } from '../../core'
import { BlockRenderer, BlockAdmin, RawBlockData } from '../../blocks'
import { usePageState } from '../store'
import PageAdminHeader from './PageAdminHeader'

type Props = {}

const tabsItems = [
    { id: 'configure', label: 'configure', icon: Settings },
    { id: 'admin', label: 'build', icon: Edit2 },
    { id: 'preview', label: 'preview', icon: Eye },
    { id: 'raw', label: 'raw', icon: Code }
]

const PageAdmin: FunctionComponent<Props> = () => {
    const [mode, setMode] = useState('admin')
    const blocks = usePageState('blocks')
    const root = getNodeByPath(blocks, '0')

    return (
        <Container>
            <PageAdminHeader />
            <TabsNav
                items={tabsItems}
                currentId={mode}
                onChange={setMode}
            />
            <ContentWrapper>
                {mode === 'admin' && (
                    <BlocksWrapper>
                        <BlockAdmin block={root} depth={0} />
                    </BlocksWrapper>
                )}
                {mode === 'preview' && (
                    <PreviewContainer>
                        <BlockRenderer block={root} />
                    </PreviewContainer>
                )}
                {mode === 'raw' && <RawBlockData block={root} />}
            </ContentWrapper>
        </Container>
    )
}

export default PageAdmin

const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr;
    height: 100%;
    overflow: hidden;
    background: red;
`

const PreviewContainer = styled.div`
    background: ${props => props.theme.backgroundColor};
    padding: ${props => props.theme.spacing * 2}px ${props => props.theme.spacing * 3}px;
`

const ContentWrapper = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
`

const BlocksWrapper = styled.div`
    margin-bottom: ${props => props.theme.spacing * 6}px;
`