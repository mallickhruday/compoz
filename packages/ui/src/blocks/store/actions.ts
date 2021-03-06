import { Dispatch } from 'react'
import { Omit, Block, Storage, Page } from '@compoz/core'
import { BuilderAction, BuilderState } from '../../core'
import { invalidatePageBlocks } from '../../pages'

export interface CreateBlockRequestAction {
    type: 'createBlockRequest'
    block: Omit<Block<any>, 'id' | 'children'>
    pageId?: string
    position: number
    parentId?: string
}

export interface CreateBlockSuccessAction {
    type: 'createBlockSuccess'
    block: Block<any>
    pageId?: string
    position: number
    parentId?: string
}

export const createBlock = (
    dispatch: Dispatch<BuilderAction>,
    state: BuilderState,
    storage: Storage
) => async (
    block: Omit<Block<any>, 'id' | 'children'>,
    {
        pageId,
        position,
        parentId,
    }: {
        pageId?: string
        position: number,
        parentId?: string
    }
) => {
    dispatch({
        type: 'createBlockRequest',
        block,
        pageId,
        position,
        parentId
    })
    const createdBlock = await storage.createBlock(block, {
        pageId,
        parentId,
        position,
    })
    dispatch({
        type: 'createBlockSuccess',
        block: createdBlock,
        pageId,
        position,
        parentId
    })
    if (pageId !== undefined) {
        invalidatePageBlocks(dispatch, state, storage)(pageId)
    }
}

export interface RemoveBlockAction {
    type: 'removeBlock'
    id: string
}

export interface UpdateBlockAction<B extends Block<any> = Block<any>> {
    type: 'updateBlock'
    block: B
}

export type BlockAction =
    | CreateBlockRequestAction
    | CreateBlockSuccessAction
    | RemoveBlockAction
    | UpdateBlockAction
