var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_MANZANAS_I0 = new ol.format.GeoJSON();
var features_MANZANAS_I0 = format_MANZANAS_I0.readFeatures(json_MANZANAS_I0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_I0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MANZANAS_I0.addFeatures(features_MANZANAS_I0);var lyr_MANZANAS_I0 = new ol.layer.Vector({
                source:jsonSource_MANZANAS_I0, 
                style: style_MANZANAS_I0,
                title: '<img src="styles/legend/MANZANAS_I0.png" /> MANZANAS_I'
            });var format_barrios1 = new ol.format.GeoJSON();
var features_barrios1 = format_barrios1.readFeatures(json_barrios1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_barrios1.addFeatures(features_barrios1);var lyr_barrios1 = new ol.layer.Vector({
                source:jsonSource_barrios1, 
                style: style_barrios1,
                title: '<img src="styles/legend/barrios1.png" /> barrios'
            });var format_punto_encuesf2 = new ol.format.GeoJSON();
var features_punto_encuesf2 = format_punto_encuesf2.readFeatures(json_punto_encuesf2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punto_encuesf2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_punto_encuesf2.addFeatures(features_punto_encuesf2);var lyr_punto_encuesf2 = new ol.layer.Vector({
                source:jsonSource_punto_encuesf2, 
                style: style_punto_encuesf2,
                title: '<img src="styles/legend/punto_encuesf2.png" /> punto_encuesf'
            });

lyr_MANZANAS_I0.setVisible(true);lyr_barrios1.setVisible(true);lyr_punto_encuesf2.setVisible(true);
var layersList = [baseLayer,lyr_MANZANAS_I0,lyr_barrios1,lyr_punto_encuesf2];
lyr_MANZANAS_I0.set('fieldAliases', {'objectid': 'objectid', 'objectid_1': 'objectid_1', 'codigo': 'codigo', 'barrio_cod': 'barrio_cod', 'codigo_ant': 'codigo_ant', 'usuario_lo': 'usuario_lo', 'fecha_log': 'fecha_log', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'cod_mz': 'cod_mz', });
lyr_barrios1.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'id': 'CODIGO:', 'objectid': 'objectid', 'nombre': 'BARRIO:', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'SOLICITUDES_qc_id': 'SOLICITUDES_qc_id', 'SOLICITUDES_no.': 'No.SOLICITUD:', 'SOLICITUDES_fecha': 'FECHA:', 'SOLICITUDES_hora': 'HORA:', 'SOLICITUDES_jac': 'JAC:', 'SOLICITUDES_presidente': 'PRESIDENTE:', 'SOLICITUDES_contacto_pre': 'CONTACTO_PRES:', 'SOLICITUDES_vicepresidente': 'VICEPRESIDENTE:', 'SOLICITUDES_contacto_vp': 'CONTACTO_VICE:', 'SOLICITUDES_tesorero': 'TESORERO:', 'SOLICITUDES_contacto_te': 'CONTACTO_TES:', 'SOLICITUDES_secretario': 'SECRETARIO:', 'SOLICITUDES_contacto_sec': 'CONTACTO_SEC:', 'SOLICITUDES_fiscal': 'FISCAL:', 'SOLICITUDES_contacto_fi': 'CONTACTO_FISC:', 'SOLICITUDES_requerimientos': 'REQUERIMINETOS:', 'SOLICITUDES_no encuestados': 'NO.ENCUESTADOS', });
lyr_punto_encuesf2.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'longw': 'longw', 'latin': 'latin', 'e_tsvivien': 'e_tsvivien', 'e_direccio': 'e_direccio', 'e_cod_barr': 'e_cod_barr', 'e_barrio': 'e_barrio', 'e_corregim': 'e_corregim', 'e_vereda': 'e_vereda', 'e_telefono': 'e_telefono', 'e_predial': 'e_predial', 'e_coordena': 'e_coordena', 'e_nomencue': 'e_nomencue', 'e_direncue': 'e_direncue', 'e_thabitan': 'e_thabitan', 'e_othabita': 'e_othabita', 'e_propieta': 'e_propieta', 'e_cedulap': 'e_cedulap', 'e_estrato': 'e_estrato', 'e_nhogares': 'e_nhogares', 'e_tuvivien': 'e_tuvivien', 'e_npisos': 'e_npisos', 'e_mppav': 'e_mppav', 'e_mppiv': 'e_mppiv', 'e_mpcv': 'e_mpcv', 'e_ee': 'e_ee', 'e_gas': 'e_gas', 'e_alc': 'e_alc', 'e_rb': 'e_rb', 'e_ac': 'e_ac', 'e_ie': 'e_ie', 'e_tv': 'e_tv', 'e_tf': 'e_tf', 'e_estviv': 'e_estviv', 'e_ssanitar': 'e_ssanitar', 'e_epb': 'e_epb', 'e_apch': 'e_apch', 'e_cdsta': 'e_cdsta', 'e_vur': 'e_vur', 'e_cpc': 'e_cpc', 'e_tiup': 'e_tiup', 'e_hcsbs-1': 'e_hcsbs-1', 'e_hcsbs-2': 'e_hcsbs-2', 'e_hcsbs-3': 'e_hcsbs-3', 'e_hcsbs-4': 'e_hcsbs-4', 'e_hcsbs-5': 'e_hcsbs-5', 'e_hcsbs-6': 'e_hcsbs-6', 'e_hcsbs-7': 'e_hcsbs-7', 'e_hcsbs-8': 'e_hcsbs-8', 'e_hcsbs-9': 'e_hcsbs-9', 'e_hcsbs-10': 'e_hcsbs-10', 'e_hcsbs-11': 'e_hcsbs-11', 'e_reciclar': 'e_reciclar', 'e_notoxico': 'e_notoxico', 'e_concient': 'e_concient', 'e_otraambi': 'e_otraambi', 'e_cpav': 'e_cpav', 'e_alcneu': 'e_alcneu', 'e_sevpr': 'e_sevpr', 'e_cperr': 'e_cperr', 'e_spcpr': 'e_spcpr', 'e_spbpdlh': 'e_spbpdlh', 'e_cpbr': 'e_cpbr', 'e_sropr': 'e_sropr', 'e_cbtbp': 'e_cbtbp', 'e_caed': 'e_caed', 'e_mtranspo': 'e_mtranspo', 'e_otrotran': 'e_otrotran', 'e_encuesta': 'e_encuesta', 'e_id_encue': 'e_id_encue', 'e_id': 'e_id', 'e_fecha': 'e_fecha', 'e_hora': 'e_hora', 'e_b_id': 'e_b_id', 'e_b_nombre': 'e_b_nombre', });
lyr_MANZANAS_I0.set('fieldImages', {'objectid': 'TextEdit', 'objectid_1': 'TextEdit', 'codigo': 'TextEdit', 'barrio_cod': 'TextEdit', 'codigo_ant': 'TextEdit', 'usuario_lo': 'TextEdit', 'fecha_log': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'cod_mz': 'TextEdit', });
lyr_barrios1.set('fieldImages', {'qc_id_0': 'TextEdit', 'qc_id': 'TextEdit', 'id': 'TextEdit', 'objectid': 'TextEdit', 'nombre': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'SOLICITUDES_qc_id': 'TextEdit', 'SOLICITUDES_no.': 'TextEdit', 'SOLICITUDES_fecha': 'TextEdit', 'SOLICITUDES_hora': 'TextEdit', 'SOLICITUDES_jac': 'TextEdit', 'SOLICITUDES_presidente': 'TextEdit', 'SOLICITUDES_contacto_pre': 'TextEdit', 'SOLICITUDES_vicepresidente': 'TextEdit', 'SOLICITUDES_contacto_vp': 'TextEdit', 'SOLICITUDES_tesorero': 'TextEdit', 'SOLICITUDES_contacto_te': 'TextEdit', 'SOLICITUDES_secretario': 'TextEdit', 'SOLICITUDES_contacto_sec': 'TextEdit', 'SOLICITUDES_fiscal': 'TextEdit', 'SOLICITUDES_contacto_fi': 'TextEdit', 'SOLICITUDES_requerimientos': 'TextEdit', 'SOLICITUDES_no encuestados': 'TextEdit', });
lyr_punto_encuesf2.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'longw': 'TextEdit', 'latin': 'TextEdit', 'e_tsvivien': 'TextEdit', 'e_direccio': 'TextEdit', 'e_cod_barr': 'TextEdit', 'e_barrio': 'TextEdit', 'e_corregim': 'TextEdit', 'e_vereda': 'TextEdit', 'e_telefono': 'TextEdit', 'e_predial': 'TextEdit', 'e_coordena': 'TextEdit', 'e_nomencue': 'TextEdit', 'e_direncue': 'TextEdit', 'e_thabitan': 'TextEdit', 'e_othabita': 'TextEdit', 'e_propieta': 'TextEdit', 'e_cedulap': 'TextEdit', 'e_estrato': 'TextEdit', 'e_nhogares': 'TextEdit', 'e_tuvivien': 'TextEdit', 'e_npisos': 'TextEdit', 'e_mppav': 'TextEdit', 'e_mppiv': 'TextEdit', 'e_mpcv': 'TextEdit', 'e_ee': 'TextEdit', 'e_gas': 'TextEdit', 'e_alc': 'TextEdit', 'e_rb': 'TextEdit', 'e_ac': 'TextEdit', 'e_ie': 'TextEdit', 'e_tv': 'TextEdit', 'e_tf': 'TextEdit', 'e_estviv': 'TextEdit', 'e_ssanitar': 'TextEdit', 'e_epb': 'TextEdit', 'e_apch': 'TextEdit', 'e_cdsta': 'TextEdit', 'e_vur': 'TextEdit', 'e_cpc': 'TextEdit', 'e_tiup': 'TextEdit', 'e_hcsbs-1': 'TextEdit', 'e_hcsbs-2': 'TextEdit', 'e_hcsbs-3': 'TextEdit', 'e_hcsbs-4': 'TextEdit', 'e_hcsbs-5': 'TextEdit', 'e_hcsbs-6': 'TextEdit', 'e_hcsbs-7': 'TextEdit', 'e_hcsbs-8': 'TextEdit', 'e_hcsbs-9': 'TextEdit', 'e_hcsbs-10': 'TextEdit', 'e_hcsbs-11': 'TextEdit', 'e_reciclar': 'TextEdit', 'e_notoxico': 'TextEdit', 'e_concient': 'TextEdit', 'e_otraambi': 'TextEdit', 'e_cpav': 'TextEdit', 'e_alcneu': 'TextEdit', 'e_sevpr': 'TextEdit', 'e_cperr': 'TextEdit', 'e_spcpr': 'TextEdit', 'e_spbpdlh': 'TextEdit', 'e_cpbr': 'TextEdit', 'e_sropr': 'TextEdit', 'e_cbtbp': 'TextEdit', 'e_caed': 'TextEdit', 'e_mtranspo': 'TextEdit', 'e_otrotran': 'TextEdit', 'e_encuesta': 'TextEdit', 'e_id_encue': 'TextEdit', 'e_id': 'TextEdit', 'e_fecha': 'TextEdit', 'e_hora': 'TextEdit', 'e_b_id': 'TextEdit', 'e_b_nombre': 'TextEdit', });
lyr_MANZANAS_I0.set('fieldLabels', {'objectid': 'no label', 'objectid_1': 'no label', 'codigo': 'no label', 'barrio_cod': 'no label', 'codigo_ant': 'no label', 'usuario_lo': 'no label', 'fecha_log': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'cod_mz': 'no label', });
lyr_barrios1.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'id': 'no label', 'objectid': 'no label', 'nombre': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'SOLICITUDES_qc_id': 'no label', 'SOLICITUDES_no.': 'no label', 'SOLICITUDES_fecha': 'no label', 'SOLICITUDES_hora': 'no label', 'SOLICITUDES_jac': 'no label', 'SOLICITUDES_presidente': 'no label', 'SOLICITUDES_contacto_pre': 'no label', 'SOLICITUDES_vicepresidente': 'no label', 'SOLICITUDES_contacto_vp': 'no label', 'SOLICITUDES_tesorero': 'no label', 'SOLICITUDES_contacto_te': 'no label', 'SOLICITUDES_secretario': 'no label', 'SOLICITUDES_contacto_sec': 'no label', 'SOLICITUDES_fiscal': 'no label', 'SOLICITUDES_contacto_fi': 'no label', 'SOLICITUDES_requerimientos': 'no label', 'SOLICITUDES_no encuestados': 'no label', });
lyr_punto_encuesf2.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'longw': 'no label', 'latin': 'no label', 'e_tsvivien': 'no label', 'e_direccio': 'no label', 'e_cod_barr': 'no label', 'e_barrio': 'no label', 'e_corregim': 'no label', 'e_vereda': 'no label', 'e_telefono': 'no label', 'e_predial': 'no label', 'e_coordena': 'no label', 'e_nomencue': 'no label', 'e_direncue': 'no label', 'e_thabitan': 'no label', 'e_othabita': 'no label', 'e_propieta': 'no label', 'e_cedulap': 'no label', 'e_estrato': 'no label', 'e_nhogares': 'no label', 'e_tuvivien': 'no label', 'e_npisos': 'no label', 'e_mppav': 'no label', 'e_mppiv': 'no label', 'e_mpcv': 'no label', 'e_ee': 'no label', 'e_gas': 'no label', 'e_alc': 'no label', 'e_rb': 'no label', 'e_ac': 'no label', 'e_ie': 'no label', 'e_tv': 'no label', 'e_tf': 'no label', 'e_estviv': 'no label', 'e_ssanitar': 'no label', 'e_epb': 'no label', 'e_apch': 'no label', 'e_cdsta': 'no label', 'e_vur': 'no label', 'e_cpc': 'no label', 'e_tiup': 'no label', 'e_hcsbs-1': 'no label', 'e_hcsbs-2': 'no label', 'e_hcsbs-3': 'no label', 'e_hcsbs-4': 'no label', 'e_hcsbs-5': 'no label', 'e_hcsbs-6': 'no label', 'e_hcsbs-7': 'no label', 'e_hcsbs-8': 'no label', 'e_hcsbs-9': 'no label', 'e_hcsbs-10': 'no label', 'e_hcsbs-11': 'no label', 'e_reciclar': 'no label', 'e_notoxico': 'no label', 'e_concient': 'no label', 'e_otraambi': 'no label', 'e_cpav': 'no label', 'e_alcneu': 'no label', 'e_sevpr': 'no label', 'e_cperr': 'no label', 'e_spcpr': 'no label', 'e_spbpdlh': 'no label', 'e_cpbr': 'no label', 'e_sropr': 'no label', 'e_cbtbp': 'no label', 'e_caed': 'no label', 'e_mtranspo': 'no label', 'e_otrotran': 'no label', 'e_encuesta': 'no label', 'e_id_encue': 'no label', 'e_id': 'no label', 'e_fecha': 'no label', 'e_hora': 'no label', 'e_b_id': 'no label', 'e_b_nombre': 'no label', });
lyr_punto_encuesf2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});