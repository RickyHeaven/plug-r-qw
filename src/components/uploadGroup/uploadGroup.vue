<!--created 2019.07.29-->
<!--author ricky email:zhangqingcq@foxmail.com-->

<template>
  <div>
    <Upload
        name="files"
        :action="urlT"
        :before-upload="handelManualUpload"
        :on-error="uploadError"
        :on-success="uploadSuccess"
        :on-exceeded-size="overSize"
        :on-preview="onPreview"
        :on-remove="onRemove"
        :on-format-error="onFormatError"
        :data="data"
        :max-size="maxSize"
        :show-upload-list="false"
        :with-credentials="withCredentials"
        :format="format"
        :multiple="multiple||false"
        :disabled="length > 0 && fileList.length >= length||Boolean(disabled)"
    > <!--暂时屏蔽multiple选项-->
      <Button
          icon="ios-cloud-upload-outline"
          :class="{disabledR:length > 0 && fileList.length >= length||Boolean(disabled)}"
      >{{t('r.selectFile')}}</Button>
    </Upload>
    <div class="previewBoxM" v-show="previewType === 'img' && fileIdList.length>0">
      <div class="previewImg" v-if="!manualUpload && item !== null" v-for="item of fileIdList" :key="item">
        <img :src="url+'/'+item+'/download'" :alt="item">
        <div class="deleteModal">
          <Icon
              type="ios-expand" size="40" class="previewExpand" @click="fullScreenImgByDom(url+'/'+item+'/download')"
              :title="t('r.fView')"
          />
          <Icon
              type="ios-trash-outline" size="40" class="previewDelete" @click="deleteById($event,item)"
              :title="t('r.delete')"
          />
        </div>
      </div>
    </div>
    <div class="previewBoxM" v-show="previewType === 'localImg' && fileSrcList.length>0">
      <div
          class="previewImg" v-if="manualUpload && item !== null" v-for="(item,index) of fileSrcList"
          :key="'manualImg'+index"
      >
        <img :src="item" :alt="'manualImg'+index">
        <div class="deleteModal">
          <Icon
              type="ios-expand" size="40" class="previewExpand" @click="fullScreenImgByDom(item)" :title="t('r.fView')"
          />
          <Icon
              type="ios-trash-outline" size="40" class="previewDelete" @click="clearManualItem(index)"
              :title="t('r.delete')"
          />
        </div>
      </div>
    </div>
    <div
        class="customFileListM"
        v-show="previewType === 'localList'&& fileList.length>0"
    >
      <p
          class="customFileListItem" v-if="manualUpload && item !== null" v-for="(item,index) of fileList"
          :key="'manualItem'+index"
      >
        <Icon :type="getFileTypeIconByName(item.name)"/>
        <span class="upNameT" @click="downloadManualFile(item)" :title="t('r.download')">{{item.name}}</span>
        <span class="btBoxJ">
          <Icon type="md-qr-scanner" size="14" class="listBtH" @click="listExpand(item)" :title="t('r.fView')"/>
          <Icon type="ios-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')"/>
        </span>
      </p>
    </div>
    <div
        class="customFileListM"
        v-show="previewType === 'list' && fileDefaultList.length>0"
    >
      <p
          class="customFileListItem" v-if="!manualUpload && item !== null" v-for="(item,index) of fileDefaultList"
          :key="'defaultItem'+index"
      >
        <Icon :type="getFileTypeIconByName(item.name)"/>
        <span class="upNameT" @click="downloadDefaultFile(item)" :title="t('r.download')">{{item.name||t('r.file')+(index+1)}}</span>
        <span class="btBoxJ">
          <Icon type="md-qr-scanner" size="14" class="listBtH" @click="listExpand(item)" :title="t('r.fView')"/>
          <Icon type="ios-close" size="22" class="listBtH" @click="clearManualItem(index)" :title="t('r.delete')"/>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  import {
    myTypeof, getFileSrc, getFileTypeByName, isImgByFile, getFileTypeIconByName, downloadFileReaderFile
  } from '../../methods/functionGroup.js'
  import $fetch from '../../methods/fetch.js'
  import fullScreenImgByDom from '../../methods/fullScreenImgByDom.js'
  import $swal from '../../methods/swal.js'
  import Locale from '../../mixins/locale'

  export default {
    name: "uploadGroup",
    mixins: [Locale],
    model: {
      prop: 'fileIdListProp',
      event: 'on-file-id-change'
    },
    props: {
      fileIdListProp: {
        type: [
          Array,
          Number,
          String,
          File
        ],
        default() {
          return []
        }
      },
      url: {
        /*文件上传的地址*/
        type: String,
        default() {
          if (window.g && window.g.mgrURL) {
            return window.g.mgrURL + '/fsc/file'
          }
          return ''
        }
      },
      data: {
        /*文件上传接口其他参数*/
        type: Object,
        default() {
          return {
            appId: 0,
            moduleId: 0,
            typeId: 0
          }
        }
      },
      manualUpload: {
        type: Boolean,
        default: false
      },
      maxSize: {
        type: Number,
        default: 0
      },
      length: {
        type: Number,
        default: 0
      },
      showUploadList: {
        type: Boolean,
        default: true
      },
      withCredentials: {
        type: Boolean,
        default: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      format: {
        type: Array,
        default() {
          return []
        }
      },
      showImg: {
        type: Boolean,
        default: false
      },
      disabled: {
        /*禁用，仅展示*/
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        getFileTypeIconByName: getFileTypeIconByName,
        fullScreenImgByDom: fullScreenImgByDom,
        fileSrcList: [],
        fileDefaultList: []
      }
    },
    computed: {
      previewType() {
        if (!this.manualUpload && this.showImg && this.fileListItemIsIMG) {
          return 'img'
        }
        else if (this.manualUpload && this.showImg && this.fileListItemIsIMG) {
          return 'localImg'
        }
        else if (this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
          return 'localList'
        }
        else if (!this.manualUpload && this.showUploadList && (!this.showImg || !this.fileListItemIsIMG)) {
          return 'list'
        }
      },
      urlT() {
        if (this.manualUpload) {
          return '//jsonplaceholder.typicode.com/posts/'
        }
        else {
          return this.url
        }
      },
      fileList: {
        get() {
          if (this.manualUpload) {
            return this.fileIdList
          }
          else {
            let temp = []
            for (let item of this.fileIdList) {
              temp.push({
                response: {
                  data: [
                    {
                      id: item
                    }
                  ]
                }
              })
            }
            return temp
          }
        },
        set(val) {
          if (this.manualUpload) {
            this.fileIdList = val
          }
          else {
            let temp = []
            for (let item of val) {
              if (item.response && item.response.data && item.response.data[0] &&
                (item.response.data[0].id || item.response.data[0].id === 0)) {
                temp.push(item.response.data[0].id)
              }
            }
            this.fileIdList = temp
          }
        }
      },
      fileIdList: {
        get() {
          switch (myTypeof(this.fileIdListProp)) {
            case 'Number':
              return [this.fileIdListProp]
            case 'String':
              if (this.fileIdListProp.indexOf('--') !== -1) {
                return []
              }
              else {
                return [Number(this.fileIdListProp)]
              }
            case 'Array':
              return this.fileIdListProp.filter(e => e !== '--')
            case 'File':
              return [this.fileIdListProp]
            default:
              return []
          }
        },
        set(val) {
          if (this.length === 1) {
            let temp = _.first(val)
            this.$emit('on-file-id-change', temp || temp === 0 ? temp : null)
          }
          else {
            this.$emit('on-file-id-change', _.cloneDeep(val))
          }
        }
      },
      fileListItemIsIMG() {
        let temp
        if (this.manualUpload) {
          temp = this.fileList
        }
        else {
          temp = this.fileDefaultList
        }
        for (let item of temp) {
          let type
          if (this.manualUpload) {
            type = item && item.type
          }
          else {
            type = item && item.mimeType
          }
          if (!type || type && !isImgByFile(type)) {
            return false
          }
        }
        return true
      }
    },
    watch: {
      fileList: {
        async handler(after) {
          if (this.previewType === 'localImg') {
            if (after && after.length > 0) {
              this.fileSrcList = await this.getFileSrcList(after)
            }
            else {
              this.fileSrcList = []
            }
          }
          else if (after && after.length > 0 && this.previewType !== 'localList') {
            let temp = []
            for (let item of after) {
              if (item.name === undefined) {
                if (item.response && item.response.data && item.response.data[0] && item.response.data[0].id) {
                  $fetch.get(this.url + '/' + item.response.data[0].id)
                    .then(r => {
                      let itemT = _.cloneDeep(item)
                      itemT.name =
                        r && r.data && r.data.returnValue && r.data.returnValue[0] && r.data.returnValue[0].name ||
                        this.t('r.file') + _.indexOf(after, item)
                      itemT.mimeType =
                        r && r.data && r.data.returnValue && r.data.returnValue[0] && r.data.returnValue[0].mimeType ||
                        'unknown'
                      temp.push(itemT)
                    })
                    .catch(() => {
                      temp.push({name: this.t('r.file') + _.indexOf(after, item)})
                    })
                }
                else {
                  temp.push({name: this.t('r.unknown')})
                }
              }
              else {
                temp.push(item)
              }
            }
            this.fileDefaultList = temp
          }
          else {
            this.fileDefaultList = []
          }
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      clear() {
        this.fileList = []
      },
      async getFileSrcList(data) {
        let temp = []
        for (let item of data) {
          let src = await getFileSrc(item)
          temp.push(src)
        }
        return temp
      },
      clearManualItem(index) {
        if (!this.disabled) {
          let temp = this.fileList
          temp.splice(index, 1)
          this.fileList = temp
        }
      },
      downloadDefaultFile(item) {
        if (item && item.response && item.response.data && item.response.data[0] && item.response.data[0].id) {
          window.open(this.url + '/' + item.response.data[0].id + '/download')
        }
      },
      listExpand(file) {//列表图片预览
        if (this.manualUpload) {
          getFileSrc(file)
            .then(r => {
              if (isImgByFile(file.type)) {
                //图片的 base64 格式, 可以直接当成 img 的 src 属性值
                fullScreenImgByDom(r)
              }
              else {
                $swal(this.t('r.info.title'), this.t('r.notImg'), 'info')
              }
            })
        }
        else if (file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id) {
          if (isImgByFile(file.mimeType)) {
            fullScreenImgByDom(this.url + '/' + file.response.data[0].id + '/download')
          }
          else {
            $swal(this.t('r.info.title'), this.t('r.notImg'), 'info')
          }
        }
      },
      downloadManualFile(file) {
        getFileSrc(file)
          .then(r => {
            downloadFileReaderFile(file.name, r)
          })
      },
      handelManualUpload(file) {
        if (this.manualUpload) {
          if (file) {
            let type = getFileTypeByName(file.name)
            if (this.format.length > 0 && this.format.indexOf(type) < 0) {
              $swal(this.t('r.wrongFileType'),
                this.t('r.supportType') + (this.format.length > 0 && String(this.format) || this.t('r.none')),
                "warning")
              return false
            }
            if (this.maxSize && file.size > this.maxSize * 1024) {
              $swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + "kb", "warning")
              return false
            }
            let temp = this.fileList
            temp.push(file)
            this.fileList = temp
          }
          return false
        }
        else {
          return true
        }
      },
      uploadError(error, file, fileList) {
        console.warn(error)
        $swal(this.t('r.uploadError'), "", "error")
      },
      uploadSuccess(response, file, fileList) {
        if (response && response.code === 0) {
          let temp = this.fileList
          temp.push(file)
          this.fileList = temp
        }
        else {
          $swal(this.t('r.uploadFail'), response && response.message || '', 'error')
        }
      },
      overSize(file, fileList) {
        $swal(this.t('r.fileIsBig'), this.t('r.supportSize') + this.maxSize + ' kb', "warning")
      },
      onFormatError(file, fileList) {
        $swal(this.t('r.wrongFileType'),
          this.t('r.supportType') + (this.format.length > 0 && String(this.format) || this.t('r.none')), "warning")
      },
      onPreview(file) {
        let id = file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id
        let type = file && file.response && file.response.data && file.response.data[0] &&
          file.response.data[0].mimeType
        if (id) {
          if (myTypeof(type) === 'String' && type.indexOf('image') > -1) {
            fullScreenImgByDom(this.url + '/' + id + '/download')
          }
          else {
            window.open(this.url + '/' + id + '/download')
          }
        }
      },
      onRemove(file, fileList) {
        let id = file && file.response && file.response.data && file.response.data[0] && file.response.data[0].id
        this.deleteById(null, id)
      },
      deleteById(e, id) {
        if (!this.disabled) {
          const fileIdList = this.fileIdList
          let temp = fileIdList
          temp.splice(fileIdList.indexOf(id), 1)
          this.fileList = temp
        }
      }
    }
  }
</script>
