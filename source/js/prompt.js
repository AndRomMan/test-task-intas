/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let promptSection = document.querySelector('.test-prompt');

const PROMPT_SECTION_CLASS_CLOSED = 'test-prompt--closed';

function openPromptSection() {
  openBlock(promptSection, PROMPT_SECTION_CLASS_CLOSED);
}

function closePromptSection() {
  closeBlock(promptSection, PROMPT_SECTION_CLASS_CLOSED);
}
