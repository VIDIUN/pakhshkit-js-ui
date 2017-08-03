//@flow
import { h } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../../utils/bind-actions';
import { actions } from '../../reducers/shell';
import BaseComponent from '../base';
import { default as Icon, IconType } from '../icon';

const mapStateToProps = state => ({
  metadataLoaded: state.engine.metadataLoaded,
  prePlayback: state.shell.prePlayback,
  isMobile: state.shell.isMobile
});

@connect(mapStateToProps, bindActions(actions))
class PrePlaybackPlayOverlay extends BaseComponent {
  autoplay: boolean;
  mobileAutoplay: boolean;

  constructor(obj: Object) {
    super({name: 'PrePlaybackPlayOverlay', player: obj.player});
  }

  componentWillUnmount() {
    this.props.updatePrePlayback(false);
    this.props.removePlayerClass('pre-playback');
  }

  componentWillMount() {
    this.props.addPlayerClass('pre-playback');

    try { this.autoplay = this.player.config.playback.autoplay; }
    catch (e) { this.autoplay = false; } // eslint-disable-line no-unused-vars

    try { this.mobileAutoplay = this.player.config.playback.mobileAutoplay; }
    catch (e) { this.mobileAutoplay = false; } // eslint-disable-line no-unused-vars
  }

  componentDidMount() {
    this.player.addEventListener(this.player.Event.PLAY, () => {
      this.props.updatePrePlayback(false);
      this.props.removePlayerClass('pre-playback');
    });

    if (this.player.paused === false) {
      this.props.updatePrePlayback(false);
      this.props.removePlayerClass('pre-playback');
    }
  }

  handleClick() {
    this.player.play();
  }

  render(props: any) {
    if (
      !props.prePlayback ||
      (!this.props.isMobile && this.autoplay) ||
      (this.props.isMobile && this.mobileAutoplay)
    ) return undefined;

    return (
      <div className='pre-playback-play-overlay' onClick={() => this.handleClick()}>
        <a className='pre-playback-play-button'><Icon type={IconType.Play} /></a>
      </div>
    )
  }
}

export default PrePlaybackPlayOverlay;
