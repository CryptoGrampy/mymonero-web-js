'use strict'

const BarButtonBaseView = require('../StackNavigation/Views/BarButtonBaseView.web')

function _New_ButtonBase_View (context, optl_didConfigureInteractivity_fn) {
  const view = new BarButtonBaseView({
    didConfigureInteractivity_fn: function (thisView) {
      if (typeof optl_didConfigureInteractivity_fn !== 'undefined' && optl_didConfigureInteractivity_fn) {
        optl_didConfigureInteractivity_fn(thisView)
      }
    }
  }, context)
  const layer = view.layer
  layer.style.borderRadius = '3px'
  layer.style.height = '24px'
  layer.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  layer.style.textAlign = 'center'
  layer.style.border = 'none'
  layer.style.textDecoration = 'none'
  layer.style.lineHeight = '24px'
  layer.style.boxSizing = 'border-box'
  layer.style.width = 'auto'
  layer.style.padding = '0 8px'

  view.SetEnabled(true)
  layer.classList.add('hoverable-cell')

  return view
}
exports.New_ButtonBase_View = _New_ButtonBase_View

function New_GreyButtonView (context) {
  const view = _New_ButtonBase_View(
    context,
    function (thisView) { // config from interactivity
      // if (thisView.isEnabled) {
      // } else {
      // }
    }
  )
  const layer = view.layer
  layer.classList.add('utility')
  layer.style.backgroundColor = '#383638'
  layer.style.color = '#FCFBFC'
  layer.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  if (context.isMobile === true) {
    layer.style.boxShadow = 'inset 0 0.5px 0 0 #494749'
    layer.style.fontSize = '13px'
    layer.style.fontWeight = '600' // semibold desired but "semibold" doesn't apparently work
  } else {
    layer.style.boxShadow = '0 0.5px 1px 0 #161416, inset 0 0.5px 0 0 #494749'
    layer.style.webkitFontSmoothing = 'subpixel-antialiased'
    layer.style.fontSize = '12px' // design says 13 but chrome/desktop renders it too large
    layer.style.fontWeight = '400' // semibold desired
    layer.style.letterSpacing = '0.5px'
  }
  layer.classList.add('disableable') // allowing this to be auto-styled as disabled
  return view
}
exports.New_GreyButtonView = New_GreyButtonView

function New_BlueButtonView (context) {
  const view = _New_ButtonBase_View(
    context,
    function (thisView) { // config from interactivity
      const layer = thisView.layer
      if (thisView.isEnabled) {
        layer.style.backgroundColor = '#00c6ff'
        if (context.isMobile !== true) {
          layer.style.boxShadow = '0 0.5px 1px 0 #161416, inset 0 0.5px 0 0 rgba(255,255,255,0.20)'
        } else { // avoiding shadow
          layer.style.boxShadow = 'inset 0 0.5px 0 0 rgba(255,255,255,0.20)'
        }
        layer.style.color = '#161416'
        layer.style.fontWeight = '600'
      } else {
        layer.style.backgroundColor = '#383638'
        layer.style.boxShadow = 'none'
        layer.style.color = '#6B696B'
        layer.style.fontWeight = '600'
      }
    }
  )
  const layer = view.layer
  layer.classList.add('action')

  layer.style.webkitFontSmoothing = 'subpixel-antialiased'
  layer.style.fontSize = '12px'
  layer.style.letterSpacing = '0.5px'

  return view
}
exports.New_BlueButtonView = New_BlueButtonView

function New_LeftSide_BackButtonView (context) {
  const view = New_GreyButtonView(context)
  const layer = view.layer
  layer.style.display = 'block'
  layer.style.float = 'right' // so it sticks to the right of the right btn holder view layer
  layer.style.marginTop = '10px'
  layer.style.width = '26px'
  layer.style.height = '24px'
  layer.style.backgroundImage = 'url(./src/assets/img/backButtonIcon@3x.png)'
  layer.style.backgroundSize = '9px 14px'
  layer.style.backgroundRepeat = 'no-repeat'
  layer.style.backgroundPosition = '8px 5px'
  layer.classList.add('back_button')
  return view
}
exports.New_LeftSide_BackButtonView = New_LeftSide_BackButtonView

function New_RightSide_AddButtonView (context) {
  const view = New_BlueButtonView(context)
  const layer = view.layer
  layer.style.float = 'right' // so it sticks to the right of the right btn holder view layer
  layer.style.marginTop = '10px'
  layer.style.width = '26px' // instead of 24px - slightly wider than H
  layer.style.backgroundImage = 'url(./src/assets/img/addButtonIcon_10@3x.png)'
  layer.style.backgroundSize = '10px 10px'
  layer.style.backgroundRepeat = 'no-repeat'
  layer.style.backgroundPosition = 'center'
  return view
}
exports.New_RightSide_AddButtonView = New_RightSide_AddButtonView

function New_LeftSide_CancelButtonView (context, title_orUndefinedForDefaultCancel) {
  const view = New_GreyButtonView(context)
  const layer = view.layer
  const title =
		typeof title_orUndefinedForDefaultCancel === 'undefined' ||
			title_orUndefinedForDefaultCancel === null ||
			title_orUndefinedForDefaultCancel === ''
		  ? 'Cancel'
: title_orUndefinedForDefaultCancel
  layer.innerHTML = title
  layer.style.display = 'block'
  layer.style.float = 'left' // so it sticks to the left of the left btn holder view layer
  layer.style.marginTop = '10px'
  return view
}
exports.New_LeftSide_CancelButtonView = New_LeftSide_CancelButtonView

function New_RightSide_SaveButtonView (context) {
  const view = New_BlueButtonView(context)
  const layer = view.layer
  layer.innerHTML = 'Save'
  layer.style.float = 'right' // so it sticks to the right of the right btn holder view layer
  layer.style.marginTop = '10px'
  return view
}
exports.New_RightSide_SaveButtonView = New_RightSide_SaveButtonView

function New_RightSide_EditButtonView (context) {
  const view = New_GreyButtonView(context)
  const layer = view.layer
  layer.innerHTML = 'Edit'
  layer.style.display = 'block'
  layer.style.float = 'right' // so it sticks to the right of the right btn holder view layer
  layer.style.marginTop = '10px'
  return view
}
exports.New_RightSide_EditButtonView = New_RightSide_EditButtonView

function New_RightSide_ValueDisplayLabelButtonView (context) {
  const view = _New_ButtonBase_View(context)
  const layer = view.layer
  // setup/style
  layer.href = '' // to make it non-clickable
  layer.style.display = 'block'
  layer.style.float = 'right' // so it sticks to the right of the right btn holder view layer
  layer.style.marginTop = '12px'
  layer.style.width = 'auto'
  layer.style.height = 'auto'
  layer.style.textDecoration = 'none'
  if (context.isMobile === true) {
    layer.style.fontFamily = 'Native-Regular, input, menlo, monospace'
    layer.style.fontSize = '11px'
    layer.style.fontWeight = 'lighter'
  } else {
    layer.style.fontFamily = 'Native-Light, input, menlo, monospace'
    layer.style.webkitFontSmoothing = 'subpixel-antialiased' // for chrome browser
    layer.style.fontSize = '10px'
    layer.style.letterSpacing = '0.5px'
    if (typeof process !== 'undefined' && process.platform === 'linux') {
      layer.style.fontWeight = '700' // surprisingly does not render well w/o this… not linux thing but font size thing. would be nice to know which font it uses and toggle accordingly. platform is best guess for now
    } else {
      layer.style.fontWeight = '300'
    }
  }
  layer.style.color = '#9E9C9E'
  layer.style.lineHeight = '200%' // % extra to get + aligned properly
  layer.style.textAlign = 'center'
  layer.style.cursor = 'default'
  return view
}
exports.New_RightSide_ValueDisplayLabelButtonView = New_RightSide_ValueDisplayLabelButtonView
