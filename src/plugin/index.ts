import 'azure-maps-control/dist/css/atlas.min.css'
import { VueAzureMapsPluginOptions } from 'types'
import { PluginFunction, PluginObject } from 'vue'
import { install } from './install'
import _vueAzureMaps from './vue-azure-maps'

//===
// Components
//===
import AzureMap from './components/AzureMap.vue'
import AzureMapDataSource from './components/AzureMapDataSource.vue'
import AzureMapHtmlMarker from './components/AzureMapHtmlMarker.vue'

//===
// Custom components
//===
import AzureMapUserPosition from './components/AzureMapUserPosition.vue'

//===
// Control components
//===
import AzureMapControl from './components/controls/AzureMapControl.vue'
import AzureMapZoomControl from './components/controls/AzureMapZoomControl.vue'
import AzureMapPitchControl from './components/controls/AzureMapPitchControl.vue'
import AzureMapStyleControl from './components/controls/AzureMapStyleControl.vue'
import AzureMapCompassControl from './components/controls/AzureMapCompassControl.vue'

//===
// Layer components
//===
import AzureMapSymbolLayer from './components/layers/AzureMapSymbolLayer.vue'
import AzureMapPolygonLayer from './components/layers/AzureMapPolygonLayer.vue'
import AzureMapLineLayer from './components/layers/AzureMapLineLayer.vue'
import AzureMapHeatMapLayer from './components/layers/AzureMapHeatMapLayer.vue'
import AzureMapImageLayer from './components/layers/AzureMapImageLayer.vue'
import AzureMapTileLayer from './components/layers/AzureMapTileLayer.vue'

//===
// Geometry components
//===
import AzureMapPoint from './components/geometries/AzureMapPoint.vue'
import AzureMapLineString from './components/geometries/AzureMapLineString.vue'
import AzureMapPolygon from './components/geometries/AzureMapPolygon.vue'

_vueAzureMaps.install = install as PluginFunction<VueAzureMapsPluginOptions>
_vueAzureMaps.version = process.env.__VERSION__ || ''

const VueAzureMaps: PluginObject<VueAzureMapsPluginOptions> = {
  install: _vueAzureMaps.install,
  name: 'vue-azure-maps',
}

if (typeof window !== 'undefined' && (window as any).Vue)
  (window as any).Vue.use(VueAzureMaps)

export {
  AzureMap,
  AzureMapDataSource,
  AzureMapHtmlMarker,
  AzureMapUserPosition,
  AzureMapPoint,
  AzureMapLineString,
  AzureMapPolygon,
  AzureMapControl,
  AzureMapZoomControl,
  AzureMapPitchControl,
  AzureMapStyleControl,
  AzureMapCompassControl,
  AzureMapSymbolLayer,
  AzureMapPolygonLayer,
  AzureMapLineLayer,
  AzureMapHeatMapLayer,
  AzureMapImageLayer,
  AzureMapTileLayer,
}

export default VueAzureMaps
