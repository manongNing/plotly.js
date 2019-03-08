/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Color = require('../../components/color');
var hasColorscale = require('../../components/colorscale/helpers').hasColorscale;
var colorscaleDefaults = require('../../components/colorscale/defaults');

module.exports = function handleStyleDefaults(traceIn, traceOut, coerce, defaultColor, layout) {

    handleDirection(traceIn, traceOut, coerce, 'increasing', '#FF0000', layout);
    handleDirection(traceIn, traceOut, coerce, 'decreasing', '#00FF00', layout);
    handleDirection(traceIn, traceOut, coerce, 'marker', defaultColor, layout);

    coerce('selected.marker.color');
    coerce('unselected.marker.color');
};

function handleDirection(traceIn, traceOut, coerce, direction, defaultColor, layout) {
    coerce(direction + '.color', defaultColor);

    if(hasColorscale(traceIn, direction)) {
        colorscaleDefaults(
            traceIn, traceOut, layout, coerce, {prefix: 'marker.', cLetter: 'c'}
        );
    }

    coerce(direction + '.line.color', Color.defaultLine);

    if(hasColorscale(traceIn, direction + '.line')) {
        colorscaleDefaults(
            traceIn, traceOut, layout, coerce, {prefix: direction + '.line.', cLetter: 'c'}
        );
    }

    coerce(direction + '.line.width');
    coerce(direction + '.opacity');
}
