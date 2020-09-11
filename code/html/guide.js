import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserGuide.less';
import classnames from 'classnames'
import ReactDOM from 'react-dom'
export function getListFromLike(listLike) {
  if (!listLike) {
    return
  }
  var list = []

  for (var i = 0, len = listLike.length; i < len; i++) {
    list.push(listLike[i])
  }
  return list
}



export function getWindowInfo() {
  return {
    winW: window.innerWidth,
    winH: window.innerHeight
  }
}

const GUIDE_STEPS = [
  {
    selector: '.first-step',
    content: 'This is my first Step',
  },
  {
    selector: '.guide-step-2',
    content: 'This is my first Step',
  }


]
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



class Guide extends Component {
  static defaultProps = {
    num: true,
    visible: false,
    onCancel: function () {},
    onOk: function () {}
  }
  static propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
    num: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
  }
  constructor (props) {
    super(props)
    this.nodeList = []
    this.dots = []
    this.state = {
      activeIndex: 0,
      contentStyle: {},
      iconStyle: {},
      tipStyle: {},
      tip: '',
      arrowClass: 'top',
    }
  }
  componentDidMount () {
    this.initGuide()
    // const {dots, nodeList} = this.getMarkDomInfo()
    // console.log('nodeList',nodeList)
    // let maskContent = this.guide.querySelector('.guide-content-container')
    // if(maskContent && maskContent.length > 0){
    //   let targetNode = nodeList[0]
    //   maskContent.innerHTML = targetNode.outerHTML;
    //   let pos = targetNode.getBoundingClientRect();
    //   maskContent.style.top = pos.top + "px";
    //   maskContent.style.left = pos.left + "px";
    //   maskContent.style.width = pos.width + "px";
    //   maskContent.style.height = pos.height + "px";
    // }

    // this.nodeList = nodeList
    // this.dots = dots
    // window.addEventListener('resize', this.onRezieWindow.bind(this), false)
    // this.setTargetIndex(this.nodeList[0], 0)
    // let dot = dots[this.state.activeIndex]
    // this.setState({
    //   tipStyle: this.getTipStyle(dot),
    //   contentStyle: dot,
    //   dots,
    // })
  }

  // shouldComponentUpdate (nextProps) {
  //   if (nextProps.visible && nextProps.visible !== this.props.visible) {
  //     this.setTargetIndex(this.nodeList[0], 0)
  //     // this.setDot(this.dots[0], 0,'start')
  //   }
  //   return true
  // }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onRezieWindow.bind(this), false)
  }

  initGuide() {
    let firstStep = GUIDE_STEPS[this.activeIndex]
    let guideContentCont = this.guide.querySelector('.guide-content-container')
    const element = <Welcome name="Sara" />


  }

  // when resize window, change tooltip  position
  onRezieWindow () {
    const {dots} = this.getMarkDomInfo()
    let dot = dots[this.state.activeIndex]
    this.setState({
      tipStyle: this.getTipStyle(dot),
      contentStyle: dot,
      dots,
    })
  }
  // click shadow
  onClickShadow (event) {
    if (event.target.className ==='guide-shadow') {
      this.shadow.removeEventListener('click',this.onClickShadow.bind(this), false)
      this.closeGuide(event)
    }
  }


  getMarkDomInfo() {
    const nodeList = getListFromLike(this.guide.querySelectorAll('[data-step]'))
    nodeList.sort((a, b) => {
      return Number(a.getAttribute('data-step'))- Number(b.getAttribute('data-step'))
    })
    let dots = nodeList.map(node => {
      let height = node.clientHeight || node.offsetHeight
      let width = node.clientWidth || node.offsetWidth
      return {
        left: node.offsetLeft,
        top: node.offsetTop,
        height,
        width,
        tip: node.getAttribute('data-tip'),
        step: node.getAttribute('data-step'),
        fRight: node.offsetLeft + width,
        fBottom: node.offsetTop + height
      }
    })
    return {dots, nodeList}
  }

  // tooltip style
  getTipStyle (dot) {
    var {winH, winW} = getWindowInfo()
    var gap = 12
    var arrowClass = ''
    var tipObj = {opacity: 1}
    if (winH - dot.fBottom > 250 && winW - dot.left > 250) {
      arrowClass= 'top'
      tipObj = {top: dot.height + gap, left: 0}
    } else if (dot.top > 250  && winW - dot.left > 250) {
      arrowClass = 'bottom'
      tipObj = {bottom: dot.height + gap, left: 0}
    } else if (dot.left > 250 && winH - dot.top > 250 || dot.left > winW) {
      arrowClass= 'right'
      tipObj =  {top: 0, right: dot.width + gap}
    } else if (winW - dot.fRight > 250  && winH - dot.top > 250) {
      arrowClass = 'left'
      tipObj = {top: 0, left: dot.width+ gap}
    }  else {
      tipObj = {display: 'none'}
    }
    this.setState({
      arrowClass
    })
    return tipObj
  }
  // active target content style
  setTargetIndex (node, newIndex) {
    var timer = setTimeout(() => {
      node.style.setProperty('z-index', '99999', 'important');
      clearTimeout(timer)
    }, 300)
    if (newIndex !== this.state.activeIndex) {
      this.removeActive()
    }
  }

  // to change scroll to focus target
  _focusTarget(targetIndex) {
    var {winW, winH} = getWindowInfo()
    var {top, bottom, left, right} = this.nodeList[targetIndex].getBoundingClientRect()
    let dTop = this.dots[targetIndex].top
    let dLeft = this.dots[targetIndex].left
    let topBool = top > winH || top < 0 || bottom > winH
    let leftBool = left > winW || left < 0 || right > winW
    if (topBool || leftBool) {
      window.scrollTo(dLeft - 100, dTop - 100)
    }
  }
  // reomve active style
  removeActive() {
    let lastNode = this.nodeList[this.state.activeIndex]
    if (lastNode) {
      lastNode.style.setProperty('position', '');
      lastNode.style.setProperty('z-index', 'auto');
    }
  }
  // close guide
  closeGuide (event) {
    this.removeActive()
    this.setState({
      activeIndex: 0
    })
    this.props.onCancel(event)
  }

  handleChangeStep (direction, jump) {
    let newIndex =/\d+/g.test(jump)? jump : (this.state.activeIndex + direction)
    this.setState({
      activeIndex: newIndex
    })
    // this.setTargetIndex(this.nodeList[newIndex], newIndex)
  }


  handleSkip(event) {
    event = event || window.event;
    if (this.state.activeIndex === this.dots.length - 1) {
      this.handleOk(event)
    }
    this.closeGuide(event)
  }
  
  handleOk(event) {
    this.props.onOk(event)
  }



  renderGuideNodes() {
    const firstStep =
      <>
        <div className="guide-tooltip">
          <div>
          <button onClick={this.handleChangeStep.bind(this, -1)}>
            <span className='icon-left'></span>
            <span>上一步</span>
          </button>
          <button  onClick={this.handleChangeStep.bind(this, 1)}>
            <span>下一步</span>
            <span className='icon-right'></span>
          </button>
        </div>
        </div>
      </>

    const secondStep =
      <div style={{'z-index': 9999}}>
        <button  onClick={this.handleChangeStep.bind(this, 1)}>
          <span>下一步</span>
          <span className='icon-right'></span>
        </button>
        <Welcome name='Sara' />
      </div>
    if(this.state.activeIndex === 0) {
      return firstStep
    }
    // if(this.state.activeIndex === 1) {
    //   return secondStep
    // }

    this.appendElement()
    // React.createPortal(node, document.body)
    // ReactDOM.render(node, container)
    const thirdEle = <div className='element-third' key='guide-content'>
      {/*{[nodeList[0]]}*/}
      </div>
    return thirdEle
  }
  appendElement () {
    // 获取页面节点
    const {dots, nodeList} = this.getMarkDomInfo()
    const node = () => nodeList[0]
    console.log('nodeList',nodeList)
    let maskContent = this.guide.querySelector('.other-node')
    console.log(maskContent, 'maskcontent')
    if(maskContent){
      let targetNode = nodeList[0]
      maskContent.innerHTML = targetNode.outerHTML;
      let pos = targetNode.getBoundingClientRect();``
      maskContent.style.top = pos.top + "px";
      maskContent.style.left = pos.left + "px";
      maskContent.style.width = pos.width + "px";
      maskContent.style.height = pos.height + "px";
    }
  }

  render () {
    const guideShadowCls = classnames(styles['guide-shadow'])
    const guideContentCls = classnames('guide-content-container', styles['guide-content'])
    return (
      <div className={styles['guide-container']} ref={(e) => this.guide = e}>
        {this.props.children}
        {
          this.props.visible &&
            <>
        <div className={guideShadowCls} ref={(e) =>  this.shadow = e}
                                     onClick={this.onClickShadow.bind(this)} key='guide-shadow'></div>
          <div className={guideContentCls} key='guide-content'>
          {this.renderGuideNodes()}
          <div className='other-node'></div>
          </div>
        </>
        }
      </div>
    )
  }
}

export default Guide