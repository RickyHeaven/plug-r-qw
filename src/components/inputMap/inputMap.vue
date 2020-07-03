<template>
  <div :style="containerStyle" class="containerIKJ">
    <Input
        ref="mapInput"
        v-model="valueT.name"
        :class="{mapInputIKJ:showMap}"
        :placeholder="placeholder"
        :disabled="disabled"
        icon="ios-search"
    />
    <div :style="mapStyle" :ref="vidT" :id="vidT"></div>
  </div>
</template>

<script>
  import {lazyAMapApiLoaderInstance} from 'vue-amap'
  import _ from 'lodash'

  export default {
    name: "inputMap",
    model: {
      prop: 'valProp',
      event: 'update-value'
    },
    props: {
      valProp: {
        type: Object,
        default() {
          return null
        }
      },
      width: {
        type: [
          String,
          Number
        ],
        default() {
          return '100%'
        }
      },
      height: {
        type: [
          String,
          Number
        ],
        default() {
          return null
        }
      },
      placeholder: {
        type: String,
        default() {
          return '搜索'
        }
      },
      disabled: {
        type: Boolean,
        default() {
          return false
        }
      },
      showMap: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    data() {
      return {
        infoWindow: null
      }
    },
    computed: {
      valueT: {
        get() {
          let temp
          if (!this.valProp) {
            temp = {
              name: null
            }
          } else if (!this.valProp.name) {
            temp = {
              ...this.valProp,
              name: null
            }
          } else {
            temp = _.cloneDeep(this.valProp)
          }
          return temp
        },
        set(val) {
          this.$emit('update-value', _.cloneDeep(val))
        }
      },
      vidT() {
        return 'vidT' + Math.floor(Math.random() * 1000000000)
      },
      widthT() {
        if (_.isNumber(this.width)) {
          return this.width + 'px'
        } else {
          return this.width
        }
      },
      heightT() {
        if (_.isNumber(this.height)) {
          return this.height + 'px'
        } else if (this.height) {
          return this.height
        } else if (_.isNumber(this.width)) {
          return this.width * 0.66 + 'px'
        } else {
          return '200px'
        }
      },
      containerStyle() {
        return {
          width: this.widthT,
          position: 'relative'
        }
      },
      mapStyle() {
        return {
          width: this.widthT,
          height: this.heightT,
          marginTop: '6px',
          opacity: this.showMap ? 1 : 0,
          position: this.showMap ? 'relative' : 'absolute',
          top: this.showMap ? 0 : '-10000px'
        }
      }
    },
    mounted() {
      this.checkHeight()
    },
    methods: {
      checkHeight() {
        if (this.$refs[this.vidT] && this.$refs[this.vidT].clientHeight < 10 || (!this.$refs[this.vidT])) {
          setTimeout(this.checkHeight, 100)
        } else {
          setTimeout(this.initMap, 10)
        }
      },
      initMap() {
        lazyAMapApiLoaderInstance.load()
          .then(() => {
            this.mapX = new AMap.Map(this.vidT, {}).on('complete', () => {
              this.geoCoder = new AMap.Geocoder()

              if (this.valProp && this.valProp.lng && this.valProp.lat) {
                this.createMarker({
                  lng: this.valProp.lng,
                  lat: this.valProp.lat,
                  name: this.valProp.name
                })
              }
              new AMap.Autocomplete({
                input: this.$refs.mapInput.$el.children[1]
              }).on('select', (val) => {
                if (val && val.poi && val.poi.name) {
                  if (val.poi.location && val.poi.location.lng && val.poi.location.lat) {
                    this.createMarker({
                      name: val.poi.name,
                      lng: val.poi.location.lng,
                      lat: val.poi.location.lat
                    })
                    this.valueT = {
                      name: val.poi.name,
                      lng: val.poi.location.lng,
                      lat: val.poi.location.lat
                    }
                  } else {
                    this.mapX.setCity(val.poi.name, () => {
                      let center = this.mapX.getCenter()
                      this.createMarker({
                        name: val.poi.name,
                        lng: center.lng,
                        lat: center.lat
                      })
                      this.valueT = {
                        name: val.poi.name,
                        lng: center.lng,
                        lat: center.lat
                      }
                    })
                  }
                }
                this.$emit('on-change', this.valueT)
              })
            })
          })
      },
      createMarker({lng, lat, name}) {
        this.mapX.clearMap()
        let point = new AMap.LngLat(lng, lat)
        let marker = new AMap.Marker({
          map: this.mapX,
          position: point,
          draggable: true
        })
        this.mapX.add(marker)
        this.getAddress(lng, lat)
        marker.on('dragend', () => {
          let dragPoint = marker.getPosition()
          this.valueT = {
            name: name || null,
            lng: dragPoint.lng,
            lat: dragPoint.lat
          }
          this.getAddress(lng, lat)
        })
        marker.on('click', (e) => {
          if (this.infoWindow) {
            this.infoWindow.open(this.mapX, e.target.getPosition())
          }
        })
        this.mapX.setFitView()
      },
      getAddress(lng, lat) {
        this.geoCoder.getAddress([
          lng,
          lat
        ], (status, result) => {
          if (status === 'complete' && result.info === 'OK' && result.regeocode && result.regeocode.formattedAddress) {
            this.infoWindow = new AMap.InfoWindow({ //创建信息窗体
              isCustom: true,
              content: '<div class="mapInfoWindowIKJ">' + result.regeocode.formattedAddress + '</div>',
              offset: new AMap.Pixel(16, -45),
              closeWhenClickMap: true
            })
          } else {
            this.infoWindow = null
            console.warn('地图获取位置信息失败', result)
          }
        })
      }
    }
  }
</script>