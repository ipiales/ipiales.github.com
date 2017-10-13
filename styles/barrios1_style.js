var size = 0;

var styleCache_barrios1={}
var style_barrios1 = function(feature, resolution){
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
    if (feature.get("nombre") !== null && resolution > 0 && resolution < 7) {
        labelText = String(feature.get("nombre"));
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.7)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,223,16,0.7)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_barrios1[key]){
        var text = new ol.style.Text({
                font: '9.425px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_barrios1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_barrios1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};