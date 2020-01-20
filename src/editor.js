/**
 * WordPress dependencies
 */
import '@wordpress/editor'; // This shouldn't be necessary

import { useState } from '@wordpress/element';
import {
    BlockEditorKeyboardShortcuts,
    BlockEditorProvider,
    BlockList,
    BlockInspector,
    WritingFlow,
    ObserveTyping,
} from '@wordpress/block-editor';
import {
    SlotFillProvider,
    DropZoneProvider,
    Popover,
} from '@wordpress/components';
import '@wordpress/format-library';

function Editor() {
    const [blocks, updateBlocks] = useState([]);

    return (
        <div class="getdavesbe-block-editor-layout">
            <SlotFillProvider>
                <DropZoneProvider>
                    <BlockEditorProvider
                        value={blocks}
                        onInput={updateBlocks}
                        onChange={updateBlocks}
                    >
                        <div className="playground__sidebar">
                            <BlockInspector />
                        </div>
                        <div className="editor-styles-wrapper">
                            <BlockEditorKeyboardShortcuts />
                            <WritingFlow>
                                <ObserveTyping>
                                    <BlockList />
                                </ObserveTyping>
                            </WritingFlow>
                        </div>
                        <Popover.Slot />
                    </BlockEditorProvider>
                </DropZoneProvider>
            </SlotFillProvider>
        </div>
    );
}

export default Editor;