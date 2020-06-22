/** created 2019.07.05
 *  @author ricky email:zhangqingcq@foxmail.com
 */

import {Modal} from 'view-design'

export default function (src) {
  let id = 'previewImg'+Math.floor(Math.random()*10000000)
  Modal.info({
    closable:false,
    render: (h) => {
      return h(
        'div',
        {
          class: 'previewModal',
          attrs: {
            id:id
          }
        },
        [
          h(
            'div',
            {
              class:'previewModalInner'
            },
            [
              h(
                'img',
                {
                  attrs:{
                    src: src
                  }
                }
              ),
              h(
                'Icon',
                {
                  props:{
                    type:'md-close',
                    size:20
                  },
                  class:'previewModalDelete',
                  on:{
                    click(){
                      Modal.remove()
                    }
                  }
                }
              )
            ]
          )
        ]
      )
    }
  })

  setTimeout(()=>{
    const hideEl = document.getElementById(id).parentNode.parentNode.parentNode.parentNode
    const hideEl2 = document.getElementById(id).parentNode.nextSibling
    hideEl.style.height = '0'
    hideEl.style.padding = '0'
    hideEl2.style.display = 'none'
  },10)
}
