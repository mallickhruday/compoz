import React from 'react'
import { Builder } from '@compoz/ui'
import container, { ContainerBlock } from '@compoz/container-block-module'
import markdown, { MarkdownBlock } from '@compoz/markdown-block-module'
import json, { JsonBlock } from '@compoz/json-block-module'
import proxy, { ProxyBlock } from '@compoz/proxy-block-module'
import pieChart, { PieChartBlock } from '@compoz/pie-chart-block-module'
import barChart, { BarChartBlock } from '@compoz/bar-chart-block-module'
import text, { TextBlock } from './customBlockModules/text'
import apiCall, { ApiCallBlock } from './customBlockModules/apiCall'

const BoundBuilder = Builder<{
    container: ContainerBlock
    markdown: MarkdownBlock
    json: JsonBlock
    proxy: ProxyBlock
    text: TextBlock
    apiCall: ApiCallBlock
    pieChart: PieChartBlock
    barChart: BarChartBlock
}>()

const App = () => (
    <BoundBuilder
        modules={{
            container,
            markdown,
            json,
            proxy,
            text,
            apiCall,
            pieChart,
            barChart
        }}
    />
)

export default App
