import { PieChart } from 'react-feather'
import { Block, BlockModule } from '@compoz/core'
import PieChartBlockRenderer from './PieChartBlockRenderer'
import PieChartBlockConfigurator from './PieChartBlockConfigurator'

export type PieChartBlockSettings = {
    dataContextKey: string
}

export type PieChartBlock = Block<'pieChart', PieChartBlockSettings>

const pieChartModule: BlockModule<PieChartBlock> = {
    description: `
A binding to @nivo/pie package Pie Chart.
    `,
    version: '0.1.3',
    schema: {},
    defaults: {
        label: 'Pie Chart',
        settings: {
            dataContextKey: ''
        }
    },
    icon: PieChart,
    renderer: PieChartBlockRenderer,
    configurator: PieChartBlockConfigurator,
    shouldAddChild: () => false,
    shouldBeAdded: () => true
}

export default pieChartModule
