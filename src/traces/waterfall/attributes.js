/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var extendFlat = require('../../lib/extend').extendFlat;

var barAttrs = require('../bar/attributes');

var dash = require('../../components/drawing/attributes').dash;
var lineAttrs = require('../scatter/attributes').line;

function directionAttrs() {
    return {
        editType: 'style',
        color: barAttrs.marker.color,
        opacity: barAttrs.marker.opacity,
        line: {
            editType: 'style',
            color: barAttrs.marker.line.color,
            width: barAttrs.marker.line.width
        }
    };
}

module.exports = {

    valuetype: {
        valType: 'enumerated',
        values: ['r', 'relative', 'a', 'absolute', 't', 'total'],
        dflt: [],
        arrayOk: true,
        role: 'info',
        editType: 'calc',
        description: [
            'Using false to display relative values and true for total values.'
        ].join(' ')
    },

    x: barAttrs.x,
    x0: barAttrs.x0,
    dx: barAttrs.dx,
    y: barAttrs.y,
    y0: barAttrs.y0,
    dy: barAttrs.dy,

    r: barAttrs.r,
    t: barAttrs.t,

    text: barAttrs.text,
    hovertext: barAttrs.hovertext,
    hovertemplate: barAttrs.hovertemplate,

    textposition: barAttrs.textposition,

    textfont: barAttrs.textfont,

    insidetextfont: barAttrs.insidetextfont,

    outsidetextfont: barAttrs.outsidetextfont,

    constraintext: barAttrs.constraintext,

    cliponaxis: barAttrs.cliponaxis,

    orientation: barAttrs.orientation,

    offset: barAttrs.offset,

    width: barAttrs.width,

    marker: directionAttrs(),
    increasing: directionAttrs(),
    decreasing: directionAttrs(),

    connector: {
        color: extendFlat({}, lineAttrs.color, {dflt: '#FFFFFF'}),
        width: lineAttrs.width,
        dash: dash,
        editType: 'style'
    },

    offsetgroup: barAttrs.offsetgroup,
    alignmentgroup: barAttrs.offsetgroup,

    selected: barAttrs.selected,
    unselected: barAttrs.unselected
};
