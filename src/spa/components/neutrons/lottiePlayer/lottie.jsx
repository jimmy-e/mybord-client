/* eslint-disable
  react/prop-types,
  jsx-a11y/no-noninteractive-tabindex,
  jsx-a11y/no-static-element-interactions,
  jsx-a11y/click-events-have-key-events
*/

// Source: https://github.com/chenqingspring/react-lottie

import React from 'react';
import lottie from 'lottie-web';

export default class Lottie extends React.Component {
  componentDidMount() {
    const {
      options,
      eventListeners,
    } = this.props;

    const {
      loop,
      autoplay,
      animationData,
      rendererSettings,
      segments,
    } = options;

    this.options = {
      container: this.el,
      renderer: 'svg',
      loop: loop !== false,
      autoplay: autoplay !== false,
      segments: segments !== false,
      animationData,
      rendererSettings,
    };


    this.options = { ...this.options, ...options };

    this.anim = lottie.loadAnimation(this.options);
    this.anim.setSpeed(this.props.speed);
    this.registerEvents(eventListeners);
  }

  UNSAFE_componentWillUpdate(nextProps /* , nextState */) {
    /* Recreate the animation handle if the data is changed */
    if (this.options.animationData !== nextProps.options.animationData) {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();
      this.options = { ...this.options, ...nextProps.options };
      this.anim = lottie.loadAnimation(this.options);
      this.registerEvents(nextProps.eventListeners);
    }
  }

  componentDidUpdate() {
    if (this.props.isStopped) {
      this.stop();
    } else if (this.props.segments) {
      this.playSegments();
    } else {
      this.play();
    }

    this.pause();
    this.setSpeed();
    this.setDirection();
  }

  componentWillUnmount() {
    this.deRegisterEvents(this.props.eventListeners);
    this.destroy();
    this.options.animationData = null;
    this.anim = null;
  }

  setSpeed() {
    this.anim.setSpeed(this.props.speed);
  }

  setDirection() {
    this.anim.setDirection(this.props.direction);
  }

  handleClickToPause() {
    // The pause() method is for handling pausing by passing a prop isPaused
    // This method is for handling the ability to pause by clicking on the animation
    if (this.anim.isPaused) {
      this.anim.play();
    } else {
      this.anim.pause();
    }
  }

  play() {
    this.anim.play();
  }

  playSegments() {
    this.anim.playSegments(this.props.segments);
  }

  stop() {
    this.anim.stop();
  }

  pause() {
    if (this.props.isPaused && !this.anim.isPaused) {
      this.anim.pause();
    } else if (!this.props.isPaused && this.anim.isPaused) {
      this.anim.pause();
    }
  }

  destroy() {
    this.anim.destroy();
  }

  registerEvents(eventListeners) {
    eventListeners.forEach((eventListener) => {
      this.anim.addEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  deRegisterEvents(eventListeners) {
    eventListeners.forEach((eventListener) => {
      this.anim.removeEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  render() {
    const {
      width,
      height,
      ariaRole,
      ariaLabel,
      isClickToPauseDisabled,
      title,
    } = this.props;

    const getSize = (initial) => {
      let size;

      if (typeof initial === 'number') {
        size = `${initial}px`;
      } else {
        size = initial || '100%';
      }

      return size;
    };

    const lottieStyles = {
      width: getSize(width),
      height: getSize(height),
      overflow: 'hidden',
      margin: '0 auto',
      outline: 'none',
      ...this.props.style,
    };

    const onClickHandler = isClickToPauseDisabled ? () => null : this.handleClickToPause;

    return (
      <div
        ref={(c) => {
          this.el = c;
        }}
        style={lottieStyles}
        onClick={onClickHandler}
        title={title}
        role={ariaRole}
        aria-label={ariaLabel}
        tabIndex="0"
      />
    );
  }
}

Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: '',
};
