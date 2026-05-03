import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function lineCount(source) {
  return source.split(/\r\n|\r|\n/).length;
}

test('stage 59 order pdf sketch canvas runtime ownership split is anchored', () => {
  const facade = read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_canvas_runtime.ts');
  const types = read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_canvas_runtime_types.ts');
  const equality = read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_canvas_runtime_equality.ts');
  const paint = read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_canvas_runtime_paint.ts');
  const resolve = read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_canvas_runtime_resolve.ts');
  const consumers = [
    read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_canvas_hooks.ts'),
    read('esm/native/ui/react/pdf/order_pdf_overlay_sketch_panel_hooks.ts'),
    read('tests/order_pdf_sketch_panel_canvas_runtime.test.ts'),
    read('tests/order_pdf_sketch_palette_placement_runtime.test.ts'),
  ].join('\n');

  assert.ok(lineCount(facade) <= 8, 'sketch canvas runtime facade must stay tiny');
  assert.match(facade, /order_pdf_overlay_sketch_panel_canvas_runtime_types\.js/);
  assert.match(facade, /order_pdf_overlay_sketch_panel_canvas_runtime_equality\.js/);
  assert.match(facade, /order_pdf_overlay_sketch_panel_canvas_runtime_paint\.js/);
  assert.match(facade, /order_pdf_overlay_sketch_panel_canvas_runtime_resolve\.js/);
  assert.doesNotMatch(
    facade,
    /paintOrderPdfSketchAnnotations|getContext\('2d'\)|areOrderPdfSketchStrokeListsEqual|resolveOrderPdfSketchCanvasPixels/,
    'facade must not own canvas paint, equality, or measurement internals'
  );

  assert.match(types, /export type OrderPdfSketchCanvasDrawState/);
  assert.doesNotMatch(
    types,
    /paintOrderPdfSketchAnnotations|shouldRepaintOrderPdfSketchCanvas|resolveOrderPdfSketchCanvasPixels/
  );

  assert.match(equality, /export function shouldRepaintOrderPdfSketchCanvas\(/);
  assert.match(equality, /areOrderPdfSketchStrokeListsEqual/);
  assert.match(equality, /areOrderPdfSketchTextBoxListsEqual/);
  assert.doesNotMatch(equality, /paintOrderPdfSketchAnnotations|resolveOrderPdfSketchCanvasPixels/);

  assert.match(paint, /export function syncOrderPdfSketchCanvasElementSize\(/);
  assert.match(paint, /export function paintOrderPdfSketchCanvasFrame\(/);
  assert.match(paint, /paintOrderPdfSketchAnnotations/);
  assert.doesNotMatch(paint, /shouldRepaintOrderPdfSketchCanvas|resolveOrderPdfSketchCanvasPixels/);

  for (const needle of [
    'resolveOrderPdfSketchCanvasPixels',
    'resolveOrderPdfSketchCanvasDrawState',
    'resolveOrderPdfSketchCanvasRect',
    'shouldRunOrderPdfSketchCanvasFrame',
    'nextOrderPdfSketchCanvasFrameVersion',
  ]) {
    assert.match(resolve, new RegExp(needle), `resolve owner must contain ${needle}`);
  }
  assert.doesNotMatch(resolve, /paintOrderPdfSketchAnnotations|shouldRepaintOrderPdfSketchCanvas/);

  assert.match(consumers, /from '\.\/order_pdf_overlay_sketch_panel_canvas_runtime\.js';/);
  assert.doesNotMatch(
    consumers,
    /order_pdf_overlay_sketch_panel_canvas_runtime_(types|equality|paint|resolve)\.js/,
    'canvas runtime consumers must keep using the public runtime facade'
  );

  assert.doesNotMatch(facade + types + equality + paint + resolve, /export default\s+/);
});
