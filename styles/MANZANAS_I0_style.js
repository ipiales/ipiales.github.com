var size = 0;

var styleCache_MANZANAS_I0={}
var style_MANZANAS_I0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if (feature.get("cod_mz") !== null) {
        labelText = String(feature.get("cod_mz"));
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.57)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(147,159,87,0.57)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_MANZANAS_I0[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_MANZANAS_I0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MANZANAS_I0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};