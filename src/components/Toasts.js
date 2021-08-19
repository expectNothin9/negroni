import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { dismissToast, removeToast } from '../features/pageSlice'
import Icon from './Icon'

const ToastIcon = ({ toastType }) => {
  switch (toastType) {
    case 'success':
      return <Icon type="check_circle" />
    case 'warning':
      return <Icon type="warning" />
    case 'error':
      return <Icon type="error" />
    default:
      return null
  }
}
ToastIcon.propTypes = {
  toastType: PropTypes.string.isRequired
}

const StyledButton = styled.button`
  border: 0;
  padding: 0;
  margin-left: var(--gap);
  background: transparent;
  color: var(--on-surface);
`
const DismissButton = ({ onClick }) => (
  <StyledButton type="button" className="dismiss-button" onClick={onClick}>
    <Icon type="close" />
  </StyledButton>
)
DismissButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

const StyledToast = styled.p`
  height: 48px;
  padding: 0 var(--gap);
  margin-right: var(--gap);
  margin-bottom: var(--gap);
  display: flex;
  align-items: center;
  background-color: var(--surface);
  color: var(--on-surface);
  border-radius: 4px;
  & > i {
    margin-right: var(--gap);
  }
  &.success > i {
    color: var(--success);
  }
  &.warning > i {
    color: var(--warning);
  }
  &.error > i {
    color: var(--error);
  }
  transform: translateX(0);
  &.toast-enter {
    transform: translateX(100%);
  }
  &.toast-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  &.toast-exit {
    transform: translateX(0);
  }
  &.toast-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }
`
const Toast = ({ type, message, dismissed, onDismiss, onRemove }) => {
  const toastRef = useRef()
  const autoDismissTimer = useRef()
  const handleStartAutoDismissTimer = useCallback(() => {
    autoDismissTimer.current = setTimeout(() => onDismiss(), 5000)
  }, [onDismiss])
  const handleClearAutoDismissTimer = useCallback(() => {
    if (autoDismissTimer.current) {
      clearTimeout(autoDismissTimer.current)
    }
  }, [])
  return (
    <CSSTransition
      nodeRef={toastRef}
      in={!dismissed}
      timeout={300}
      classNames="toast"
      onEntered={handleStartAutoDismissTimer}
      onExit={handleClearAutoDismissTimer}
      onExited={onRemove}
      unmountOnExit>
      <StyledToast ref={toastRef} className={`toast ${type}`}>
        <ToastIcon toastType={type} />
        {message}
        <DismissButton onClick={onDismiss} />
      </StyledToast>
    </CSSTransition>
  )
}
Toast.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  dismissed: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
Toast.defaultProps = {
  type: 'neutral'
}

const ToastsBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 3; /* over the modal */
`
const Toasts = () => {
  const dispatch = useDispatch()
  const toasts = useSelector(({ page }) => page.toasts)
  const handleDismiss = useCallback(
    (toastId) => () => dispatch(dismissToast({ toastId })),
    [dispatch]
  )
  const handleRemove = useCallback(
    (toastId) => () => dispatch(removeToast({ toastId })),
    [dispatch]
  )
  return (
    <ToastsBox className="toasts-box">
      <TransitionGroup className="toasts-list">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            dismissed={toast.dismissed}
            onDismiss={handleDismiss(toast.id)}
            onRemove={handleRemove(toast.id)}
          />
        ))}
      </TransitionGroup>
    </ToastsBox>
  )
}

export default Toasts
