import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

test('[stage4-ui-build-reactivity] interactive UI commits preserve root patch build semantics', () => {
  const src = read('esm/native/kernel/state_api_install_support.ts');

  assert.match(src, /const patchUiThroughRootCommit = \(filtered: UiSlicePatch, meta: ActionMetaLike\): unknown =>/);
  assert.match(src, /store\.patch\?\.\(\{ ui: filtered \}, meta\)/);
  assert.match(src, /if \(namespace === 'ui' && hasRootCommitWriter\(\)\) \{/);
  assert.match(
    src,
    /const onlyMeta = filteredKeys\.length === 1 && typeof filteredPayload\.meta !== 'undefined';/
  );
  assert.match(src, /if \(!onlyMeta && typeof store\.patch === 'function'\) \{/);
});

test('[stage4-ui-build-reactivity] render loop visual helper no longer carries unused doors-runtime DI', () => {
  const helper = [
    read('esm/native/platform/render_loop_visual_effects.ts'),
    read('esm/native/platform/render_loop_visual_effects_shared.ts'),
    read('esm/native/platform/render_loop_visual_effects_mirror.ts'),
    read('esm/native/platform/render_loop_visual_effects_floor.ts'),
    read('esm/native/platform/render_loop_visual_effects_front_overlay.ts'),
  ].join('\n');
  assert.doesNotMatch(helper, /getDoorsOpenViaService: \(A: unknown\) => boolean/);
  assert.doesNotMatch(helper, /getDoorsRuntime: \(A: unknown\) => AnyRecord \| null/);
  assert.doesNotMatch(helper, /getHardCloseUntil: \(A: unknown\) => number/);
});
